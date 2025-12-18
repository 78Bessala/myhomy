import Footer from './Footer'
import Footer1 from '../../../composents/pages/Accueil/Footer1';
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { PiMapPinAreaFill } from "react-icons/pi";
import { GoPulse } from "react-icons/go";
import { RiHome4Fill } from "react-icons/ri";
import { HiMiniCheckBadge } from "react-icons/hi2";
import user from '../../../assets/public/user.jpeg'
import s1 from '../../../assets/public/s01.jpeg'
import v1 from '../../../assets/public/v1.jpg'
import v2 from '../../../assets/public/v0.jpg'
import a1 from '../../../assets/public/a3.jpg'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiRequest } from '../../../service/api';
import { isAuthenticated } from '../../../utils/auth';



function Profil() {

  const [user1, setUser] = useState(null)

  const navigate = useNavigate()

  const logged = isAuthenticated()
   

  useEffect(() => {
    if(logged){
      apiRequest("/accounts/me/", "GET", null, localStorage.getItem("access"))
        .then(setUser)
    }
    else {
      navigate("/login")
    }
    
  }, [navigate, logged]);

  if (!user1) return <p>Chargement du profil...</p>


  return (
    <section className="flex ">
      <Footer1 />
      {/* <section className='flex-2'> */}
      <div className="min-h-screen flex flex-col  flex-3 max-w-full
 mx-auto bg-white font-sans text-[13px]  ">
        {/* En-tête profil */}
        <header className="relative bg-[#0078EF] ">


          <div className="h-28 relative">
            {/* Menu 3 points */}
            <div className="absolute top-4 right-4 flex flex-col gap-1">
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span className="w-1 h-1 rounded-full bg-blue-700" />
              <span className="w-1 h-1 rounded-full bg-blue-700" />
            </div>
          </div>

          {/* Contenu blanc */}
          <div className="px-4 pb-4 bg-white relative rounded-tl-4xl border border-blue-900">

            {/* Avatar */}
            <div className="absolute -top-20 left-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-md bg-cover" style={{ backgroundImage: `url(${user})` }}></div>

            </div>

            {/* Bouton éditer */}
            <div className="pt-4 flex justify-end">
              <button className="px-3 py-1 rounded-md border text-[11px] text-gray-700">
                Éditer la photo
              </button>
            </div>

            {/* Nom */}
            <div className="mt-6 flex items-center gap-1 text-[20px] font-semibold">
              {user1.first_name} {user1.last_name}
              <HiMiniCheckBadge className="text-blue-600 text-[18px]" />
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-1 text-[12px] text-gray-600 mt-1">
              <PiMapPinAreaFill className="text-blue-600" />
              Mendong, Yaoundé
            </div>

            {/* Bouton prospecter */}
            <div className="mt-3 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-md  bg-[#0078EF]  font-semibold text-[12px] border border-blue-400">
                <BsPlusSquare className="text-[16px] text-[#203D89]" />
                Prospecter
              </button>
            </div>

          </div>
        </header>

        {/* Onglet Publications */}
        <section className="flex justify-center bg-[#0078EF]  ">
          <div className="inline-flex items-center  rounded-md border border-gray-300 bg-gray-100 px-5 py-1.5 shadow-sm">
            <GoPulse className="text-[18px] text-black mr-1" />
            <span className="text-[11px]  lg:text-[25px] font-semibold text-gray-800">
              Publications
            </span>
          </div>
        </section>

        {/* Grille de cartes */}
        <main className="px-3 mt-3 lg:mt-8 grid gap-3 
                 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {[{
            img: s1,
            title: "Studio Meublé",
            location: "Mendong, Yaoundé",
            price: "50 000 Fcfa / nuit",
            date: "Publié le 2 Novembre"
          }, {
            img: v1,
            title: "Villa avec Piscine",
            location: "Odza, Yaoundé",
            price: "250 000 Fcfa / nuit",
            date: "Publié le 15 Décembre"
          }, {
            img: v2,
            title: "Villa luxe",
            location: "Simbock, Yaoundé",
            price: "400 000 Fcfa / nuit",
            date: "Publié le 2 Novembre"
          }, {
            img: a1,
            title: "Appartement",
            location: "Bastos, Yaoundé",
            price: "150 000 Fcfa / nuit",
            date: "Publié le 15 Décembre"
          }].map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-1 md:gap-2 border rounded-xl overflow-hidden bg-white shadow-sm"
            >
              {/* Image */}
              <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-gray-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Contenu */}
              <div className="p-1 h-16 lg:h-24 flex flex-col  lg:p-4 md:p-2 md:gap-1 lg:gap-2 ">
                <div className="flex justify-between items-start">
                  <p className="font-semibold truncate lg:text-[16px]">{item.title}</p>
                  <div className="flex justify-between text-gray-500">
                    <PiMapPinAreaFill className="text-blue-600 text-[12px] lg:text-[16px]" />
                    <h2 className="text-[9px] sm:text-[13px] lg:text-[14px]">{item.location}</h2>
                  </div>
                </div>

                <p className="text-gray-700 text-[9px] sm:text-[10px]">{item.price}</p>

                <div className="flex items-center gap-1 mb-2">
                  <HiMiniCheckBadge className="text-blue-600 text-[16px]" />
                  <p className="text-[#0078EF] font-medium text-[8px] sm:text-[10px]">{item.date}</p>
                </div>
              </div>
            </article>
          ))}
        </main>


        {/* Bottom navigation */}
        <Footer />
      </div>

      {/* </section> */}
    </section>
  );
}

export default Profil;