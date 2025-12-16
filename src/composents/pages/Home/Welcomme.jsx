import React from "react";
import Frame from "../../../images/Frame 132.svg";
import homes from "../../../images/homes.jpeg";
import Login from "../Auth/Login/Login";
import { Link } from "react-router-dom";

const Welcomme = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col gap-6 justify-center items-center px-6"
      style={{
        backgroundImage: `url(${homes})`,
      }}
    >

      {/* LOGO EN HAUT */}
      <img
        src={Frame}
        alt="logo"
        className="w-48 h-48 md:w-40 md:h-40 object-contain mb-6"
      />

      <div className="">
        {/* TEXTE */}
      <h1 className="text-white text-xs md:text-3xl  text-center mb-2">
        Votre assistant IA pour un enregistrement légal
      </h1>

      {/* BOUTON SE CONNECTER */}
      <button
        className="w-full max-w-xs bg-[#203D89] text-white py-3 rounded-full text-lg font-medium mb-4"
      >
        <Link to="/login" className="hover:bg-[#1A2D5F] transition-colors">Se connecter</Link>
        
      </button>

      {/* BOUTON S’INSCRIRE TRANSPARENT */}
      <button
        className="w-full max-w-xs border border-white text-white py-3 rounded-full text-lg font-medium bg-transparent"
      >
        <Link to="/register" className="hover:text-blue-800">S’inscrire</Link>
      </button>
      </div>
      

    </div>
  );
};

export default Welcomme;
