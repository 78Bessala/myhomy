import React from "react";
import logo from '../../../../images/logo.svg';
import utilitaire from "../../../../images/utilitaire.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section>

      <section  >
        <div className="relative w-full">

          {/* Image de fond */}
          <img
            src={utilitaire}
            alt="image d'un batiment"
            className="w-full h-auto"
          />

          {/* Logo centré */}
          <img
            src={logo}
            alt="logo"
            className="
               absolute
               top-1/2 left-1/2
               -translate-x-1/2 -translate-y-1/2
               w-48 h-48
               object-contain
             "
          />

        </div>
      </section>


      <div className="h-screen bg-[#A3D2FF] flex flex-col gap-2 9 md:flex-row">

        {/* Partie gauche avec le logo sur fond bleu */}
        {/* Flèche + Header bleu */}
        <div className="bg-[#A3D2FF]">

          {/* Flèche retour */}
          <Link to="/welcomme">
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

        {/* Partie droite */}
        <div className=" h-full flex flex-col  gap-4 bg-[#EBEBF2] justify-center items-center md:w-1/2 p-8 space-y-6  rounded-3xl ">
          <h2 className="text-center text-3xl font-bold mb-6">s'inscrire</h2>

          {/* FORMULAIRE SANS RECTANGLE */}
          <form className="w-full  flex flex-col gap-2 max-w-md">

            <div className="mb-4">
              <input
                type="text"
                id="nom"
                placeholder="Entrer votre nom"
                className="w-full h-[48px] pl-4 border border-[#989393]  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full h-[48px] pl-4 border border-[#989393]  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full h-[48px] pl-4 border border-[#989393]  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <span className="absolute right-4 top-3.5 text-gray-400 cursor-pointer">
                <BsEyeSlash />
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#203D89] text-white h-[48px] rounded-[10px] hover:bg-[#1A326F] transition-colors mb-6"
            >
              S'inscrire
            </button>

            {/* Séparateur */}
            <div className="flex items-center ">
              <span className="flex-1 h-px bg-[#989393] "></span>
              <span className="px-3 text-gray-500 text-sm">ou avec</span>
              <span className="flex-1 h-px bg-[#989393] "></span>
            </div>

            {/* Icônes réseaux sociaux */}
            <div className="flex justify-between m-4 text-3xl">
              <FcGoogle className="cursor-pointer" />
              <FaFacebook className="text-blue-600 cursor-pointer" />
              <FaApple className="cursor-pointer" />
            </div>

          </form>

          {/* TEXTE CENTRÉ SUR LA PAGE EN DEHORS DU FORM */}
          <p className="text-sm  text-black text-center">
            Vous avez déjà un compte?{" "}
            <Link to="/login" className="text-[#203D89] font-medium hover:underline">
              Se connecter
            </Link>
          </p>

        </div>
      </div>

    </section>
  );

};

export default Register;
