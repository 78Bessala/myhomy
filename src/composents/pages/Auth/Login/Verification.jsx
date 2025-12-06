import React from "react";
import logo from "../../../../images/logo.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <div className="min-h-screen bg-[#A3D2FF]">
      {/* Flèche retour */}
      <Link to="/forgot">
      <div className="p-4 text-black text-2xl cursor-pointer">
        <FaArrowLeftLong />
      </div>
      </Link>
      

      {/* Header bleu avec logo */}
      <div className="flex justify-center items-center py-6">
        <img
          src={logo}
          alt="le-logo"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Container Blanc arrondi seulement en haut */}
      <div className="bg-[#EAE6F4] -mt-4 rounded-t-3xl p-6 shadow-lg">
        
        {/* Titre */}
        <h2 className="text-center text-xl font-bold mb-1">
          Vérification
        </h2>

        <p className="text-center text-gray-600 text-sm mb-5">
          Entrer le code pour confirmer.
        </p>

        {/* Info mail */}
        <p className="text-center text-sm mb-6">
          Nous avons envoyé le code <br />
          à votre <span className="font-semibold">mail@gmail.com</span>
        </p>

        {/* Cases de code */}
        <div className="flex justify-center gap-2 mb-6">
          {Array(6).fill(0).map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>

        {/* Button */}
        <button className="w-full bg-[#203D89] text-white py-3 rounded-md text-sm font-medium">
          <Link to="/new">Continuer</Link>
        </button>

        {/* Lien renvoyer code */}
        <p className="text-center text-xs mt-3 text-gray-600">
          N'avez-vous pas reçu de code?{" "}
          <Link to="/verification" className="text-[#203D89] font-medium">
            Renvoyer le code
          </Link>
        </p>

        {/* Retour login */}
        <div className="flex items-center text-xs text-gray-600 mt-8 cursor-pointer">
          <span className="text-lg mr-1"><FaArrowLeftLong /></span>
            Retourner sur 
            <Link to="/login" className="hover:underline"> <span className="text-[#203D89] font-medium">se connecter</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Verification;
