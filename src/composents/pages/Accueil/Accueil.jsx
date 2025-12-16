import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import search from '../../../assets/public/search.svg';
import logo2 from '../../../assets/public/logo2.svg';
import logo from '../../../assets/public/logo.svg'
import menu from '../../../assets/public/menu.svg'
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
    <section className="flex flex-col gap-4 mt-2">
      {/* <div className="flex justify-between m-4">
        <img src={logo} className="w-[42px] h-[42px] md:hidden"/>
         <img src={search} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" alt="search" />
         <img src={menu} className="w-[24px] h-[24px] md:hidden"/>
      </div>
       */}
      {/* Header */}
      <div id='bouton' className="flex  gap-4 justify-end  mt-4 mx-4">
      <button  
          
          className=' w-32  lg:w-52 h-8  lg:h-10 bg-[#0078EF] rounded-[8px] text-base lg:text-xl text-white'
        >
          S'inscrire
        </button>
        <button 
          
          className=' w-32 lg:w-52 h-8  lg:h-10  border border-[#0078EF] rounded-[8px] text-base lg:text-xl text-[#0078EF] '
        >
          se connecter 
        </button>
        </div>

      <header className=" mt-1  flex justify-center ">
      <div id="barre" className="h-16  w-full lg:h-20 bg-[#F3F2F2] md:bg-white  p-1 px-3 flex justify-center items-center gap-4">
            <div className="h-8 lg:h-10  md:w-[800px] w-full bg-[#D2D0D7] rounded-[10px] p-1 px-6 flex gap-4 items-center">
              <img src={search} className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" alt="search" />
             <h1 className="text-xs sm:text-sm md:text-base lg:text-xl">Rechercher une ville, une date, un prix</h1>
            </div>
          
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 bg-white z-10">
        <nav
          ref={navRef}
          className=" md:flex md:justify-center relative text-2xl md:text-3xl flex gap-8 p-4  font-body  overflow-x-auto whitespace-nowrap scrollbar-hide" style={{
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
              className={`text-base lg:text-xl lg:gap-12 transition-all hover:-translate-y-1 hover:text-gray-700 px-1 ${
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

