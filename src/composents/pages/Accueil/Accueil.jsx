import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import search from '../../../assets/public/search.svg';

const tabsData = [
  { label: "Voir tout", path: "/voir-tout" },
  { label: "Duplex", path: "/duplex" },
  { label: "Villa", path: "/villa" },
  { label: "Appartement", path: "/appartement" },
  { label: "Studio", path: "/studio" },
  { label: "Chambre", path: "/chambre" },
];

const Accueil = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const buttonsRef = useRef({});

  // Détermine le tab actif en fonction de l'URL
  const activeTab = tabsData.find(tab => tab.path === location.pathname)?.label || tabsData[0].label;

  const updateUnderline = (label) => {
    const btn = buttonsRef.current[label];
    if (btn && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setUnderline({
        left: btnRect.left - navRect.left + navRef.current.scrollLeft,
        width: btnRect.width,
      });

      // Scroll automatique pour rendre le tab visible
      const offset = btn.offsetLeft - navRef.current.scrollLeft;
      if (offset < 0 || offset + btnRect.width > navRef.current.clientWidth) {
        navRef.current.scrollTo({
          left: btn.offsetLeft - navRef.current.clientWidth / 2 + btnRect.width / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const handleClick = (tab) => {
    navigate(tab.path); // navigation immédiate
  };

  // Met à jour la barre à chaque changement de tab (URL)
  useLayoutEffect(() => {
    updateUnderline(activeTab);
  }, [activeTab]);

  return (
    <section className="flex flex-col gap-4 ">
      {/* Header */}
      <header className="mt-10">
        <div className="h-16 w-full bg-[#F3F2F2] p-1 px-3 flex justify-center items-center">
          <div className="h-8 w-full bg-[#D2D0D7] rounded-[10px] p-1 px-6 flex gap-4 items-center">
            <img src={search} className="w-[24px] h-[24px]" alt="search" />
            <h1 className="text-sm ">Rechercher une ville, une date, un prix</h1>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 bg-white z-10">
        <nav
          ref={navRef}
          className="relative flex gap-8 p-4  font-body  overflow-x-auto whitespace-nowrap scrollbar-hide" style={{
    /* Pour masquage cross-browser si besoin */
    scrollbarWidth: "none",
     paddingBottom: "6px",// Firefox
  }}

        >
          {tabsData.map((tab) => (
            <button
              key={tab.label}
              ref={(el) => (buttonsRef.current[tab.label] = el)}
              onClick={() => handleClick(tab)}
              className={`text-base transition-all px-1 ${
                activeTab === tab.label ? "text-[#0078EF] font-semibold" : "text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Barre bleue */}
          <div
            className="absolute bottom-0 h-1 bg-[#0078EF] rounded transition-all duration-300 ease-out"
            style={{
              left: underline.left,
              width: underline.width,
            }}
          />
        </nav>
        <div className=" w-full bg-[#0078EF] h-1 mt-0.5"></div>
      </div>
    </section>
  );
};

export default Accueil;

