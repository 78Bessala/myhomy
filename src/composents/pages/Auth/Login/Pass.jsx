import React from "react";
import logo from "../../../../images/logo.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Pass = () => {
  return (
    <div className=" h-screen bg-[#A3D2FF] flex  flex-col gap-6">

        {/* Flèche retour */}
        <Link to="/login">
         <div className="p-4 text-black text-2xl cursor-pointer">
          <FaArrowLeftLong />
        </div>

        </Link>
      {/* Flèche + Header bleu */}
     

        {/* Logo */}
        <div className="flex justify-center items-center h-56">
          <img
            src={logo}
            alt="logo"
            className="w-48 h-48 object-contain"
          />
        </div>


     

      {/* Container bleu clair, arrondi seulement en haut */}
      <div className=" h-full bg-[#EAE6F4]  rounded-t-3xl p-6">

        {/* Titre */}
        <h2 className="text-center text-2xl font-bold mb-2">
          Mot de passe oublié?
        </h2>

        <p className="text-center text-gray-600 text-sm mb-8">
          N’ayez aucune crainte. Vous retrouverez votre compte
        </p>

        {/* Label */}
        <label className="block text-sm font-medium m-2 text-black">
          Adresse mail
        </label>

    <div>

       {/* Input email */}
        <input
          type="email"
          placeholder="Entrer votre adresse email"
          className="w-full pl-4 items-center border border-[#989393] h-[48px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#203D89] mb-6"
        />

        {/* Button */}
        <button className="w-full bg-[#203D89] h-[48px]  flex items-center  justify-center text-white rounded-[10px] text-sm font-semibold hover:bg-[#1A326F] transition-colors">
          <Link to="/verification">Envoyer le code</Link>
          
        </button>

    </div>
       
        {/* Retour login */}
        <div className="flex items-center  mt-8  gap-1 text-xs text-gray-600  cursor-pointer">
          <span className="text-lg mr-1">
            <FaArrowLeftLong />
          </span>
            Retourner sur{" "}
            <Link to="/login" className="hover:underline">
            <span className="text-[#203D89] font-bold">se connecter</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Pass;
