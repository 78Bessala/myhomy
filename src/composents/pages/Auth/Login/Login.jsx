import React from "react";
import logo from "../../../../images/logo.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="flex justify-center items-center bg-[#A3D2FF] md:w-1/2 min-h-[200px] md:min-h-screen">
        <img src={logo} alt="le-logo" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
      </div>


      {/* Formulaire */}
      <div className="w-full max-w-md bg-white -mt-10 rounded-t-3xl p-6">

        {/* Titre */}
        <h2 className="text-center text-2xl font-bold mb-6">se connecter</h2>

        {/* Boutons de connexion */}
        <div className="flex justify-center gap-6 mb-4 text-3xl">
          <FcGoogle className="cursor-pointer" />
          <FaFacebook className="text-blue-600 cursor-pointer" />
          <FaApple className="cursor-pointer" />
        </div>

        {/* Ligne "ou avec" */}
        <div className="flex items-center my-4">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="px-3 text-gray-500 text-sm">ou avec</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Champ email */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>


        {/* Champ mot de passe */}
        <div className="mb-2 relative">
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer"><BsEyeSlash /></span>
        </div>

        {/* Remember + mot de passe oublié */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>me rappeler</span>
          </label>

          <Link to="/forgot" className="text-[#203D89] font-medium hover:underline">
            mot de passe oublié ?
          </Link>

        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-[#203D89] text-white py-3 rounded-lg hover:bg-[#1A326F] transition-colors"
        >
          se connecter
        </button>


        {/* Texte en bas */}
        <p className="text-xs mt-6 text-black text-center">
          En continuant, vous acceptez de recevoir des appels, y compris par WhatsApp
          ou SMS, et d’accepter les{" "}
          <span className="underline">Conditions d’utilisation</span>.
        </p>

      </div>
    </div>
  );
};

export default Login;
