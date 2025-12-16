import React from "react";
import logo from "../../../../images/logo.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewPass = () => {
  return (
    <div className="min-h-screen  flex flex-col gap-4 bg-[#EAE6F4]">

      {/* Flèche + Header bleu */}
      <div className="bg-[#A3D2FF]">

        {/* Flèche retour */}
        <Link to="/verification">
          <div className="px-4 pt-4 text-black text-2xl cursor-pointer">
            <FaArrowLeftLong />
          </div></Link>


        {/* Logo */}
        <div className="flex justify-center items-center h-56">
          <img
            src={logo}
            alt="logo"
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Container vbleu clair, arrondi seulement en haut */}
      <div className="bg-[#EAE6F4] -mt-10 rounded-t-3xl p-6">

        {/* Titre */}
        <h2 className="text-center   text-2xl font-bold mb-2">
          Nouveau mot de passe
        </h2>

        <p className="text-center text-gray-600 text-sm mb-8">
          Créez un mot de passe unique
        </p>

        {/* Label */}
        <label className="block text-sm m-2 font-medium  text-black">
          Nouveau mot de passe
        </label>
<div className="flex flex-col gap-4">
 {/* Input password */}
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Créez un nouveau mot de passe"
            className="w-full pl-4 flex items-center border border-[#989393] h-[48px] rounded-[10px]  focus:outline-none focus:ring-2 focus:ring-[#203D89]"
            required
          />
          <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer">
            <BsEyeSlash />
          </span>
        </div>

        {/* Label confirm */}
        <label className="block text-sm font-medium m-2 text-black">
          Confirmez le mot de passe
        </label>

        {/* Input confirm */}
        <div className="mb-6 relative">
          <input
            type="password"
            placeholder="Réécrivez le mot de passe"
            className="w-full p-3 border border-[#989393] h-[48px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#203D89]"
            required
          />
          <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer">
            <BsEyeSlash />
          </span>
        </div>
</div>
       

        {/* Button */}
        <button className="w-full bg-[#203D89] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#1A326F] transition-colors">
          <Link to="/initia"> Réinitialiser le mot de passe</Link>
        </button>

        {/* Lien */}
        <div className="text-xs text-gray-800 mt-10 cursor-pointer text-center">

          Réinitialiser le mot de passe{" "}
          <Link to="/login" className="hover:underline">
            <span className="text-[#203D89] font-medium">plus tard</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NewPass;
