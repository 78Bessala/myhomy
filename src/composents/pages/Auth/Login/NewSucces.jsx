import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuCircleCheckBig } from "react-icons/lu";

import logo from "../../../../images/logo.svg";
import Frame34 from "../../../../images/Frame 34.svg";
import logo3 from "../../../../assets/public/logo3.svg"
import bg1 from "../../../../assets/public/v2.jpg";
import bg2 from "../../../../assets/public/v3.jpg";
import bg3 from "../../../../assets/public/s4.jpg";
import bg4 from "../../../../assets/public/03.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

const NewSucces = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen flex items-center justify-center md:p-16 bg-gray-100 overflow-hidden">
      <section className="w-full h-full max-w-7xl flex gap-4 md:rounded-2xl bg-white md:p-8 shadow-2xl overflow-hidden">

        {/* GAUCHE – IMAGE SLIDER */}
        <section id="bord"
          className="
            flex-1
            h-full
            bg-cover
            bg-center
            transition-all
            duration-700
            relative
            flex
            items-center
            justify-center
            rounded-xl
            overflow-hidden
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.1),
                rgba(0,0,0,0.8)
              ),
              url(${backgrounds[index]})
            `,
          }}
        >
          <img src={logo3} alt="logo3" className="w-56 h-56" />
        </section>

        {/* DROITE – CONTENU */}
        <div className="bg-[#A3D2FF] md:bg-[#EBEBF2] flex flex-col flex-1 gap-12 md:gap-0 md:rounded-xl">

          {/* HEADER MOBILE */}
          <div 
          id="logo1" 
          className ="md:hidden flex flex-col items-center bg-[#A3D2FF]">
            <div className="px-4 pt-4 text-black text-2xl">
              {/* Flèche retour mobile si nécessaire */}
            </div>

            <div className="md:hidden flex justify-center items-center h-56">
              <img src={logo} alt="logo" className="w-48 h-48 object-contain" />
            </div>
          </div>

          {/* CONTENU SUCCÈS */}
          <div className="w-full md:rounded-xl h-full flex flex-col gap-6 md:gap-8 lg:gap-12 md:min-h-full bg-[#EAE6F4] rounded-t-3xl md:rounded-[1px] p-8 lg:p-12 items-center text-center overflow-y-auto">

            

            {/* TITRE */}
            <h2 className="text-3xl font-bold mt-4 md:mt-10 lg:mt-12">Mot de passe changé !!!</h2>
            <p className="text-gray-600 text-sm mb-6">Opération réussie !!</p>

            {/* Icône cercle check */}
            <div className="flex justify-center items-center">
            <LuCircleCheckBig
              className="text-[#333333]"
              style={{ width: "104px", height: "104px" }}
            />
          </div>

            <p className="text-gray-600 text-sm mb-6">
              Votre mot de passe a été réinitialisé avec <br />
              <span className="font-bold text-black text-lg">succès !!!</span>
            </p>

            {/* BOUTON */}
            <Link to="/login" className="w-full">
              <button className="w-full bg-[#0078EF] text-white py-3 rounded-[10px] text-sm font-semibold hover:bg-blue-600 transition-colors">
                Continuer
              </button>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
};

export default NewSucces;
