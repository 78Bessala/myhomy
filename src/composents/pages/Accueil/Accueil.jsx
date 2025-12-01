import React from "react";
import { useState } from "react";


  

const Accueil = () => {
const tabs = ["Voir tout", "Duplex", "Villa", "Appartement", "Studio", "Chambre"];
  const [activeTab, setActiveTab] = useState("Voir tout");
  return (
    <section className="flex flex-col gap-6">
          <div className=" flex flex-col mt-12">
      {/* Partie gauche avec le logo sur fond bleu */}
     <div className=" h-16  w-full bg-green-100 p-2 px-4 flex justify-center items-center">
      <div className="h-8 w-full bg-blue-600"></div>
     </div>
      
    </div>
    <div className="flex flex-col ">
     <div className="flex flex-col">
      <nav className="flex  w-full gap-12 p-4 overflow-x-auto whitespace-nowrap relative scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              text-base transition-all
              ${activeTab === tab ? "text-blue-600 font-semibold" : "text-black"}
            `}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Barre animée */}
      <div className="relative w-full  h-1">
        <div
          className="absolute top-0 h-1 bg-blue-600 transition-all duration-400"
          style={{
            width: `${120 / tabs.length}%`,
            left: `${(tabs.indexOf(activeTab) * 150) / tabs.length}%`,
          }}
        ></div>
      </div>
    </div>

<div className="w-full  bg-blue-500 h-1">

</div>
    </div>


{/* nouvelle section */}
    <section className="">
<div
  className="w-full h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('./assets/public/v6.jpg')" }}
></div>

    </section>


   
    </section>
 );
};

export default Accueil;