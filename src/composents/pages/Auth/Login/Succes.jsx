import React from "react";
import logo from "../../../../images/logo.svg";
import Frame34 from "../../../../images/Frame 34.svg";
import { LuCircleCheckBig } from "react-icons/lu";
import { Link } from "react-router-dom";

const Succes = () => {
  return (
    <div className="min-h-screen bg-[#EAE6F4] flex flex-col">

      {/* Header bleu */}
      <div className="bg-[#A3D2FF] flex justify-center items-center pt-10 pb-6 ">

        {/* Container images */}
        <div className="flex flex-col items-center">

          {/* Logo principal */}
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 object-contain mb-[-12px]"
          />

          {/* Frame34 en dessous */}
          <img
            src={Frame34}
            alt="frame"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-col items-center text-center px-6 py-10">

        <h1 className="text-xl font-bold text-black mb-2">
          Compte cree
        </h1>

        <p className="text-blue-600 text-sm mb-6">
          Bienvenue chez Myhomy
        </p>

        {/* Icône cercle + check */}
        <div className="flex justify-center items-center">
          <LuCircleCheckBig
            className="text-[#333333]"
            style={{ width: "104px", height: "104px" }}
          />
        </div>


        <p className="text-gray-600 text-sm">
          Votre compte Myhomy avec <br />
          <span className="font-bold text-black text-lg">succès !!!</span>
        </p>

      </div>

      {/* Bouton */}
      <div className="px-6 mt-auto pb-10">
        <button className="w-full bg-[#203D89] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#36148A] transition-colors">
          <Link to="#">Continuer</Link>
        </button>
      </div>

    </div>
  );
};

export default Succes;