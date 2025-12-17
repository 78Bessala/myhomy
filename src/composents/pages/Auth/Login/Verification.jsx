import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import logo from "../../../../images/logo.svg";
import logo3 from "../../../../assets/public/logo3.svg";

import bg1 from "../../../../assets/public/s1.jpg";
import bg2 from "../../../../assets/public/v3.jpg";
import bg3 from "../../../../assets/public/v1.jpg";
import bg4 from "../../../../assets/public/03.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

const Verification = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen flex items-center justify-center md:p-16 bg-gray-100 overflow-hidden">

      <section
        className="
          w-full
          h-full
          max-w-7xl
          flex
          gap-4
          md:rounded-2xl
          bg-white
          md:p-8
          shadow-2xl
          overflow-hidden
        "
      >

        {/* ===== GAUCHE : BACKGROUND SLIDER ===== */}
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
                rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.8)
              ),
              url(${backgrounds[index]})
            `,
          }}
        >
          <Link to="/forgot" className="absolute top-4 left-4 text-white text-2xl">
            <FaArrowLeftLong />
          </Link>

          <img src={logo3} alt="logo" className="w-56 h-56" />
        </section>

        {/* ===== DROITE ===== */}
        <div className="bg-[#A3D2FF] md:bg-[#EBEBF2] flex gap-12 md:gap-0 flex-col md:flex-row flex-1 md:rounded-xl">

          {/* ===== HEADER MOBILE ===== */}
          <div className="bg-[#A3D2FF] flex gap-4 overflow-x-hidden md:hidden ">
            <Link to="/forgot">
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

          {/* ===== FORMULAIRE ===== */}
          <div
            className="
              w-full
              md:rounded-xl
              h-full
              flex
              flex-col
              gap-6
              md:gap-10
              lg:gap-10
              bg-[#EAE6F4]
              rounded-t-3xl
              md:rounded-[1px]
              p-8
              lg:p-12
              md:min-h-full
            "
          >
            {/* TITRE */}
            <h2 className="text-center text-3xl lg:text-4xl font-bold mt-4 md:mt-8 lg:mt-16">
              Vérification
            </h2>

            <p className="text-center text-gray-600 text-sm">
              Entrez le code pour confirmer.
            </p>

            {/* INFO EMAIL */}
            <p className="text-center text-sm">
              Nous avons envoyé le code <br />
              à votre <span className="font-bold">mail@gmail.com</span>
            </p>

            {/* INPUT CODE */}
            <div className="flex justify-center gap-2 my-4">
              {Array(6).fill(0).map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="
                    w-12
                    h-12
                    border
                    border-[#989393]
                    rounded-[10px]
                    text-center
                    text-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                  "
                />
              ))}
            </div>

            {/* BUTTON */}
            <Link to="/new">
              <button
                className="
                  w-full
                  bg-[#0078EF]
                  h-[48px]
                  text-white
                  rounded-[10px]
                  hover:bg-blue-600
                  transition
                "
              >
                Continuer
              </button>
            </Link>

            {/* RESEND */}
            <p className="text-center text-xs text-gray-800">
              N'avez-vous pas reçu de code ?{" "}
              <Link to="/verification" className="text-[#0078EF] font-medium">
                Renvoyer le code
              </Link>
            </p>

            {/* BACK LOGIN */}
            <div className="flex justify-center items-center gap-1 text-xs text-gray-800 mt-4">
              <FaArrowLeftLong />
              <span>Retourner sur</span>
              <Link to="/login" className="text-[#0078EF] font-bold hover:underline">
                se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Verification;
