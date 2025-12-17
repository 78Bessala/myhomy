import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";

import logo from "../../../../images/logo.svg";
import logo3 from "../../../../assets/public/logo3.svg";

import bg1 from "../../../../assets/public/v2.jpg";
import bg2 from "../../../../assets/public/v3.jpg";
import bg3 from "../../../../assets/public/s4.jpg";
import bg4 from "../../../../assets/public/03.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

const NewPass = () => {
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
        <section
          id="bord"
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
          <Link to="/verification" className="absolute top-4 left-4 text-white text-2xl">
            <FaArrowLeftLong />
          </Link>

          <img src={logo3} alt="logo" className="w-56 h-56" />
        </section>

        {/* DROITE – FORMULAIRE */}
        <div className="bg-[#A3D2FF] md:bg-[#EBEBF2] flex gap-12 md:gap-0 flex-col md:flex-row flex-1 md:rounded-xl">

          {/* HEADER MOBILE */}
          <div className="bg-[#A3D2FF] flex gap-4 overflow-x-hidden">
            <Link to="/verification">
              <div className="px-4 pt-4 text-black text-2xl cursor-pointer md:hidden">
                <FaArrowLeftLong />
              </div>
            </Link>

            <div className="flex justify-center items-center h-80">
              <img
                src={logo}
                alt="logo"
                className="w-56 h-56 object-contain md:hidden"
              />
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="w-full md:rounded-xl h-full flex flex-col gap-6 md:gap-12 lg:gap-12 md:min-h-full bg-[#EAE6F4] rounded-t-3xl md:rounded-[1px] p-8 lg:p-12">

            {/* TITRE */}
            <h2 className="text-center text-3xl font-bold mt-4 md:mt-6 lg:mt-8">
              Nouveau mot de passe
            </h2>
            <p className="text-center text-gray-600 text-sm ">
              Créez un mot de passe unique
            </p>

            {/* INPUT NOUVEAU MOT DE PASSE */}
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Créez un nouveau mot de passe"
                  className="w-full h-[48px] pl-4 border border-[#989393] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#203D89]"
                  required
                />
                <span className="absolute right-4 top-4 text-gray-400 cursor-pointer flex items-center">
                  <BsEyeSlash />
                </span>
              </div>

              {/* CONFIRMATION */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Réécrivez le mot de passe"
                  className="w-full h-[48px] pl-4 border border-[#989393] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#203D89]"
                  required
                />
                <span className="absolute right-4 top-4 text-gray-400 cursor-pointer flex items-center">
                  <BsEyeSlash />
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <Link to="/initia">
              <button className="w-full bg-[#0078EF] h-[48px] text-white rounded-[10px] hover:bg-blue-600 transition">
                Réinitialiser le mot de passe
              </button>
            </Link>

            {/* Lien plus tard */}
            <div className="text-xs text-gray-800 mt-4 text-center">
              Réinitialiser le mot de passe{" "}
              <Link to="/login" className="hover:underline">
                <span className="text-[#0078EF] font-bold">plus tard</span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default NewPass;
