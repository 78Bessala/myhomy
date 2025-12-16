import React from "react";
import logo from "../../../../images/logo.svg";
import utilitaire from "../../../../images/utilitaire.jpeg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Verification = () => {
  return (

    <section>


      <section  >
        <div className="relative w-full h-64">
          {/* Background */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${utilitaire})` }}
          />

          {/* Logo centré */}
          <img
            src={logo}
            alt="logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

      </section>



      <div className="h-screen bg-[#A3D2FF] flex flex-col gap-2">
        {/* Flèche retour */}
        <Link to="/forgot">
          <div className="px-4 pt-4 text-black text-2xl cursor-pointer">
            <FaArrowLeftLong />
          </div>
        </Link>


        {/* Header bleu avec logo */}
        <div className="flex justify-center items-center p-4">
          <img
            src={logo}
            alt="le-logo"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Container Blanc arrondi seulement en haut */}
        <div className=" flex flex-col gap-6 h-full bg-[#EAE6F4]  rounded-t-3xl p-6 shadow-lg">

          {/* Titre */}
          <h2 className="text-center text-3xl font-bold mb-1">
            Vérification
          </h2>

          <p className="text-center text-gray-600 text-sm mb-5">
            Entrer le code pour confirmer.
          </p>

          {/* Info mail */}
          <p className="text-center text-sm ;t-2">
            Nous avons envoyé le code <br />
            à votre <span className="font-bold">mail@gmail.com</span>
          </p>

          {/* Cases de code */}
          <div className="flex justify-center gap-1 mb-6">
            {Array(6).fill(0).map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 border border-[#989393] rounded-[10px] text-center text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ))}
          </div>

          {/* Button */}
          <button className="w-full bg-[#203D89] text-white py-3 rounded-[10px] text-sm font-medium">
            <Link to="/new">Continuer</Link>
          </button>

          {/* Lien renvoyer code */}
          <p className="text-center text-xs mt-3 text-gray-800">
            N'avez-vous pas reçu de code?{" "}
            <Link to="/verification" className="text-[#203D89] font-medium">
              Renvoyer le code
            </Link>
          </p>

          {/* Retour login */}
          <div className="flex gap-1 items-center text-xs text-gray-800 mt-8 cursor-pointer">
            <span className="text-lg mr-1"><FaArrowLeftLong /></span>
            Retourner sur
            <Link to="/login" className="hover:underline"> <span className="text-[#203D89] font-medium">se connecter</span>
            </Link>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Verification;
