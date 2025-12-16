import React from "react";
import { useEffect, useState } from "react";
import logo from "../../../../images/logo.svg";
import utilitaire from "../../../../images/utilitaire.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import bg3 from '../../../../assets/public/s4.jpg'
import bg4 from '../../../../assets/public/03.jpg'
import bg1 from '../../../../assets/public/v2.jpg'
import bg2 from '../../../../assets/public/v3.jpg'
import logo3 from '../../../../assets/public/logo3.svg'

const backgrounds = [bg1, bg2, bg3,bg4];

const Login = () => {
 

    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000); // change toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

    return (
<main className="h-screen flex items-center justify-center  md:p-16 bg-gray-100 overflow-hidden">

      <section className="
        w-full
        h-full
        max-w-7xl
        flex
        gap-4
        md:rounded-2xl
        bg-white
         md:p-8
        shadow-2xl
        overflow-hidden
      ">
        <section id="bord"
          className="
            flex-1
            h-full
            bg-cover
            bg-center
            transition-all
            duration-700
            relative
            flex
            items-center
            justify-center
            rounded-xl
            overflow-hidden
            
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0.8, 0.8)
              ),
              url(${backgrounds[index]})
            `,
          }}
        >
          <Link to="/welcomme" className="absolute top-4 left-4 text-white text-2xl">
            <FaArrowLeftLong />
          </Link>

          <img src={logo3} alt="logo" className="w-56 h-56" />
        </section>


      {/*ghcgfgfjf  */}





      <div className=" bg-[#A3D2FF]  md:bg-[#EBEBF2] flex  gap-12 md:gap-0 flex-col md:flex-row flex-1 md:rounded-xl">



        <div className="bg-[#A3D2FF] flex  gap-4   overflow-x-hidden">

          {/* Flèche retour */}
          <Link to="/welcomme">
            <div className="px-4 pt-4 text-black text-2xl cursor-pointer md:hidden">
              <FaArrowLeftLong />
            </div>
          </Link>

          {/* Logo */}
          <div className="flex justify-center items-center h-80">
            <img
              src={logo}
              alt="logo"
              className="w-56 h-56  object-contain md:hidden"
            />
          </div>
        </div>

        {/* Formulaire */}
        <div className="w-full md:rounded-xl  h-full md:max-w-full  flex  flex-col gap-4 md:gap-8 lg:gap-12 md:min-h-full  bg-[#EBEBF2]   rounded-t-3xl md:rounded-[1px]  p-6 lg:p-12">

          {/* Titre */}
          <h2 className="text-center text-3xl font-bold mb-6">se connecter</h2>
          <div className="flex flex-col gap-4">
            {/* Boutons de connexion */}
            <div className="flex justify-between  lg:mx-12 m-4 mb-4 text-3xl">
              <FcGoogle className="cursor-pointer md:w-8 md:h-8 lg:h-10 lg:w-10 " />
              <FaFacebook className="text-blue-600 cursor-pointer md:w-8 md:h-8 lg:h-10 lg:w-10" />
              <FaApple className="cursor-pointer md:w-8 md:h-8 lg:h-10 lg:w-10" />
            </div>

            {/* Ligne "ou avec" */}
            <div className="flex items-center my-4">
              {/* <hr className="flex-1  bg-gray-400"/> */}
              <span className="flex-1 h-px bg-[#989393]"></span>
              <span className="px-3 text-gray-500 text-sm">ou avec</span>
              {/* <hr className="flex-1  bg-[#989393]"/> */}
              <span className="flex-1 h-px bg-[#989393]"></span>
            </div>

            {/* section suivqnte */}
            <div>
              <div>
                {/* Champ email */}
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="myhomy@example.com"
                    className="w-full h-[48px] flex items-center pl-4 border border-[#989393]  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>


                {/* Champ mot de passe */}
                <div className="mb-2 relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="****************"
                    className="flex items-center w-full h-[48px] pl-4 border border-[#989393] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <span className="absolute right-4 top-4 text-[#989393] cursor-pointer flex items-center"><BsEyeSlash /></span>
                </div>
              </div>


              {/* Remember + mot de passe oublié */}
              <div className="flex justify-between items-center mb-6 m-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-xs">me rappeler</span>
                </label>

                <Link to="/forgot" className="text-[#203D89] text-xs font-medium hover:underline">
                  mot de passe oublié ?
                </Link>

              </div>

            </div>


            {/* Bouton */}
            <button
              type="submit"
              className="w-full bg-[#203D89] h-[48px]  text-base text-white py-3 rounded-[10px] hover:bg-[#1A326F] transition-colors"
            >
              se connecter
            </button>


            {/* Texte en bas */}
            <p className="text-[10px] mt-6 text-black text-center">
              En continuant, vous acceptez de recevoir des appels, y compris par WhatsApp
              ou SMS, et d’accepter les{" "}
              <span className="underline">Conditions d’utilisation</span>.
            </p>

          </div>
        </div>

      </div>
    </section>

</main>
  );
};

export default Login;
