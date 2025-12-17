import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import logo from "../../../../images/logo.svg";
import logo3 from "../../../../assets/public/logo3.svg";

import bg1 from "../../../../assets/public/v2.jpg";
import bg2 from "../../../../assets/public/a3.jpg";
import bg3 from "../../../../assets/public/c04.jpg";
import bg4 from "../../../../assets/public/03.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

const ForgotPassword = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen flex items-center justify-center md:p-16 bg-gray-100 overflow-hidden">
      <section className="w-full h-full max-w-7xl flex  flex-1 gap-4 md:rounded-2xl bg-white md:p-8 shadow-2xl overflow-hidden">

        {/* GAUCHE – IMAGE */}
        <section id='bord'
          className="hidden md:flex flex-1 h-full bg-cover bg-center relative items-center justify-center rounded-xl overflow-hidden transition-all duration-700"
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
          <Link to="/login" className="absolute top-4 left-4 text-white text-2xl">
            <FaArrowLeftLong />
          </Link>

          <img src={logo3} alt="logo" className="w-56 h-56" />
        </section>

        {/* DROITE – FORMULAIRE */}
        <div className="bg-[#A3D2FF] md:bg-[#EBEBF2] flex flex-col flex-1">

          {/* HEADER MOBILE */}
          <div className="bg-[#A3D2FF] md:hidden m-4">
            <Link to="/login" className="px-4 pt-4 text-black text-2xl">
              <FaArrowLeftLong />
            </Link>

            <div className="flex justify-center items-center h-56">
              <img
                src={logo}
                alt="logo"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="flex-1 bg-[#EBEBF2] rounded-t-3xl md:rounded-xl p-8 lg:p-12 flex flex-col gap-6 ">

            <h2 className="text-center text-3xl font-bold  mt-4 md:mt-12">
              Mot de passe oublié
            </h2>
            <div className="flex flex-col gap-8 md:mt-12 mt-6">
            <p className="text-sm text-center text-gray-600">
              Entrez votre adresse email pour recevoir un lien de réinitialisation.
            </p>

            <input
              type="email"
              placeholder="myhomy@example.com"
              className="w-full h-[48px] pl-4 border border-[#989393] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
      <Link to="/verification">
            <button
              className="w-full bg-[#0078EF] h-[48px] text-white rounded-[10px] hover:bg-blue-600 transition-colors"
            >
              Envoyer le lien
            </button>
            </Link>

            <p className="text-xs text-center text-black mt-4 lg:text-sm">
              Vous vous souvenez de votre mot de passe ?{" "}
              <Link to="/login" className="text-[#0078EF] font-bold hover:underline">
                Se connecter
              </Link>
            </p>
</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
