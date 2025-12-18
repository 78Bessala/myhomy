import React from "react";
import Frame from "../../../images/Frame 132.svg";
import homes from "../../../images/homes.jpeg";
import { isAuthenticated, logout } from "../../../utils/auth"
import { useNavigate } from "react-router-dom";
import Login from "../Auth/Login/Login";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Welcomme() {
  const navigate = useNavigate
  const loggedIn = isAuthenticated()

  const handleLogout = () => {
    logout()
    navigate("/voir-tout")
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col gap-6 justify-center items-center px-6"
      style={{
        backgroundImage: `url(${homes})`,
      }}
    >

      <Link to="/voir-tout" className="absolute top-4 left-4 text-white text-2xl">
        <FaArrowLeftLong />
      </Link>

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
        {!loggedIn ? (
          <>
            <button
              className="w-full max-w-xs bg-[#203D89] text-white py-3 rounded-full cursor-pointer text-lg font-medium mb-4 hover:bg-blue-800 hover:-translate-y-1"
            >
              <Link to="/login" className=" transition-colors">Se connecter</Link>

            </button>

            {/* BOUTON S’INSCRIRE TRANSPARENT */}
            <button
              className="w-full max-w-xs border border-white text-white cursor-pointer py-3 rounded-full text-lg font-medium bg-transparent hover:-translate-y-1 "
            >
              <Link to="/register" className="hover:text-blue-800">S’inscrire</Link>
            </button>
          </>
        ) : (

          <>
            {/* BOUTON PROFIL TRANSPARENT */}
            <button
              className="w-full max-w-xs border border-white text-white py-3 rounded-full text-lg font-medium bg-transparent hover:-translate-y-1 "
            >
              <Link to="/profil" className="hover:text-blue-800">Profil</Link>
            </button>

            <button onClick={handleLogout}
              className="w-full max-w-xs bg-red-700 text-white py-3 rounded-full text-lg font-medium mb-4 hover:bg-red-800 hover:-translate-y-1"
            >
              <Link to="/voir-tout" className=" transition-colors">Déconnexion</Link>

            </button>

          </>
        )}
      </div>
    </div>
  );
};

export default Welcomme;
