import React from "react";
import logo from '../../../../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Partie gauche avec le logo sur fond bleu */}
      <div className="flex justify-center items-center bg-[#A3D2FF] md:w-1/2 min-h-[200px] md:min-h-screen">
        <img
          src={logo}
          alt="le-logo"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>

      {/* Partie droite */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8 space-y-6  ">


        {/* FORMULAIRE SANS RECTANGLE */}
        <form className="w-full max-w-md">

          <div className="mb-4">
            <input
              type="text"
              id="nom"
              placeholder="Entrer votre nom"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer">
              <BsEyeSlash />
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#203D89] text-white py-3 rounded-lg hover:bg-[#1A326F] transition-colors mb-6"
          >
            S'inscrire
          </button>

          {/* Séparateur */}
          <div className="flex items-center my-4">
            <span className="flex-1 h-px bg-gray-300"></span>
            <span className="px-3 text-gray-500 text-sm">ou avec</span>
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>

          {/* Icônes réseaux sociaux */}
          <div className="flex justify-center gap-6 text-3xl mb-2">
            <FcGoogle className="cursor-pointer" />
            <FaFacebook className="text-blue-600 cursor-pointer" />
            <FaApple className="cursor-pointer" />
          </div>

        </form>

        {/* TEXTE CENTRÉ SUR LA PAGE EN DEHORS DU FORM */}
        <p className="text-sm mt-6 text-black text-center">
          Vous avez déjà un compte?{" "}
          <Link to="/login" className="text-[#203D89] font-medium hover:underline">
            Se connecter
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
