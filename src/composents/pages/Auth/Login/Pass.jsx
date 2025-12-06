import React from "react";
import logo from "../../../../images/logo.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Pass = () => {
  return (
    <div className="min-h-screen bg-[#EAE6F4]">

      {/* Flèche + Header bleu */}
      <div className="bg-[#A3D2FF]">

        {/* Flèche retour */}
        <Link to="/login">
         <div className="p-4 text-black text-2xl cursor-pointer">
          <FaArrowLeftLong />
        </div>

        </Link>
        
        {/* Logo */}
        <div className="flex justify-center items-center h-56">
          <img
            src={logo}
            alt="logo"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>

      {/* Container bleu clair, arrondi seulement en haut */}
      <div className="bg-[#EAE6F4] -mt-10 rounded-t-3xl p-6">

        {/* Titre */}
        <h2 className="text-center text-xl font-bold mb-2">
          Mot de passe oublié?
        </h2>

        <p className="text-center text-gray-600 text-sm mb-8">
          N’ayez aucune crainte. Vous retrouverez votre compte
        </p>

        {/* Label */}
        <label className="block text-sm font-medium mb-2 text-black">
          Adresse mail
        </label>

        {/* Input email */}
        <input
          type="email"
          placeholder="Entrer votre adresse email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#203D89] mb-6"
        />

        {/* Button */}
        <button className="w-full bg-[#203D89] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#1A326F] transition-colors">
          <Link to="/verification">Envoyer le code</Link>
          
        </button>

        {/* Retour login */}
        <div className="flex items-center text-xs text-gray-600 mt-10 cursor-pointer">
          <span className="text-lg mr-1">
            <FaArrowLeftLong />
          </span>
            Retourner sur{" "}
            <Link to="/login" className="hover:underline">
            <span className="text-[#203D89] font-medium">se connecter</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Pass;
