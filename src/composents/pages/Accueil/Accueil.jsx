import React, { useState, useRef, useEffect } from "react";
import search from '../../../assets/public/search.svg'

const Accueil = () => {
  const tabs = ["Voir tout", "Duplex", "Villa", "Appartement", "Studio", "Chambre"];
  const [activeTab, setActiveTab] = useState("Voir tout");

  //gestion du scroll
  const [underlineFixed, setUnderlineFixed] = useState({
    left: 0,
    top: 0,
    width: 0,
    visible: false,
  });

  const buttonsRef = useRef({});
  const navRef = useRef(null);

  const handleClick = (tab) => {
    const btn = buttonsRef.current[tab];
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    setActiveTab(tab);

    setUnderlineFixed({
      left: Math.round(rect.left),     // ← position VIEWPORT (relative à l'écran)
      top: Math.round(rect.bottom),    // ← position VIEWPORT
      width: Math.round(rect.width),
      visible: true,
    });
  };

  // Recalcule lors du resize et du scroll
  useEffect(() => {
    const handleUpdate = () => {
      if (!underlineFixed.visible) return;

      const btn = buttonsRef.current[activeTab];
      if (!btn) return;

      const rect = btn.getBoundingClientRect();

      setUnderlineFixed((s) => ({
        ...s,
        left: Math.round(rect.left),
        top: Math.round(rect.bottom),
        width: Math.round(rect.width),
      }));
    };

    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate, true); 
    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate, true);
    };
  }, [activeTab, underlineFixed.visible]);

  return (
    <section className="flex flex-col gap-4">

      {/* Header */}
      <header className="mt-10">
        <div className="h-16 w-full bg-[#F3F2F2] p-1 px-3 flex justify-center items-center">
          <div className="h-8 w-full bg-[#D2D0D7] rounded-[10px] p-1 px-6 flex  gap-4 items-center">
              <img src={search} className="w-[24px]  h-[24px]"/>
              <h1 className="text-sm "> Rechercher une ville,une date ,un prix</h1>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 bg-white z-10">
        <div className="relative">
          <nav
            ref={navRef}
            className="flex gap-8 p-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el) => (buttonsRef.current[tab] = el)}
                onClick={() => handleClick(tab)}
                className={`text-base transition-all px-1  ${
                  activeTab === tab ? "text-[#0078EF] font-semibold" : "text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Ligne statique */}
          <div className="absolute bottom-0 left-0 w-full h-1  bg-[#0078EF]"></div>
        </div>
      </div>

      {/* <div className="w-full bg-blue-500 h-1"></div> */}

      {/* BARRE BLEUE FIXÉE ABSOLUMENT */}
      {underlineFixed.visible && (
        <div className="mt-2"
          aria-hidden
          style={{
            position: "fixed",
            left: underlineFixed.left,
            top: underlineFixed.top - 1,
            width: underlineFixed.width,
            height: 3,
            zIndex: 60,
            transition: "left 150ms ease, width 150ms ease, top 150ms ease",
            pointerEvents: "none",
            backgroundColor: "#0078EF",
            borderRadius: 2,
          }}
        />
      )}

      
    </section>
  );
};

export default Accueil;
