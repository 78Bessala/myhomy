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



function Profil(){

    return(
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
            <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white shadow-md bg-cover"  style={{ backgroundImage: `url(${user})` }}></div> 
           
          </div>

          {/* Bouton éditer */}
          <div className="pt-4 flex justify-end">
            <button className="px-3 py-1 rounded-md border text-[11px] text-gray-700">
              Éditer la photo
            </button>
          </div>

          {/* Nom */}
          <div className="mt-6 flex items-center gap-1 text-[20px] font-semibold">
            Sammuel Eto&apos;o
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
          <span className="text-[11px]  lg:text-lg font-semibold text-gray-800">
            Publications
          </span>
        </div>
      </section>

      {/* Grille de cartes */}
      <main className="px-3 mt-3  lg:mt-8 grid grid-cols-2 gap-3">
        {/* Carte 1 */}
        <div className=" flex  flex-col  gap-4 md:gap-8 border rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="h-32 md:h-48 lg:h-56 bg-gray-200" >

            <img src={s1} />
          </div>
          <div className="p-3 lg:bg-white">
            <div className='flex justify-between items-start'>
            <p className="text-[11px] font-semibold">Studio Meublé</p>
            <div className='flex  gap-1'> <PiMapPinAreaFill className="text-blue-600 mt-1" />
            <p className="text-[9px] text-gray-500 mt-1">Mendong, Yaoundé</p></div>
            </div>
            <p className="text-[10px] text-gray-600">50 000 Fcfa / nuit</p>
           
            <div className='flex  gap-1'>
                     <HiMiniCheckBadge className="text-blue-600 text-[18px] mt-1" />
            <p className="mt-1 text-[12px] text-[#0078EF] font-medium">
              Publié le 2 Novembre
            </p>
        
            </div>
           
          </div>
        </div>

        {/* Carte 2 */}
        <article className="  flex flex-col gap-4 md:gap-8 border rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="h-32  md:h-48 lg:h-56 bg-gray-200" >

            <img src={v1} />
          </div>
          <div className="p-2 lg:bg-white">
             <div className='flex  justify-between '>
            <p className="text-[11px]  md:text-base
            font-semibold">Villa avec Piscine</p>
              <div className='flex  gap-1'>
             <PiMapPinAreaFill className="text-blue-600" />
             <p className="text-[9px]  text-gray-500 mt-1">Odza, Yaoundé</p>
             </div>
            </div>
            <p className="text-[10px] text-gray-600">250 000 Fcfa / nuit</p>
           
            
            <div className='flex  gap-1'>
            <HiMiniCheckBadge className="text-blue-600 text-[18px]" />
            <p className="mt-1  text-[12px] text-[9px] text-[#0078EF] font-medium">
              Publié le 15 Décembre
            </p>
            </div>
          </div>
        </article>

        {/* Carte 3 */}
        <article className=" flex flex-col md:gap-8  gap-4border rounded-xl overflow-hidden bg-white shadow-sm">
          {/* Image placeholder */}
          <div className="h-32 md:h-48 lg:h-56  bg-gray-200" >
            <img src={v2} />
          </div>

          <div className="p-3 text-[10px] lg:bg-white">

            {/* Titre + localisation */}
            <div className="flex justify-between items-start">
              <p className="font-semibold text-[12px] truncate max-w-[100px]">
                Villa luxe
              </p>

              <div className="flex items-center gap-1 text-gray-500">
                <PiMapPinAreaFill className="text-blue-600 text-[12px]" />
                <span className="text-[9px]">Simbock,Yaoundé</span>
              </div>
            </div>

            {/* Prix */}
            <p className="mt-1 text-gray-700 text-[9px]">
              400 000 Fcfa / nuit
            </p>

            {/* Publication avec icône alignée */}
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                <HiMiniCheckBadge className="text-blue-600 text-[16px]" />
                <p className=" text-[12px] text-[#0078EF] font-medium text-[8px]">
                  Publié le 2 Novembre
                </p>
              </div>
            </div>

          </div>
        </article>


        {/* Carte 4 */}
        <article className=" flex flex-col md:gap-8 border rounded-xl overflow-hidden bg-white shadow-sm">

          {/* Image placeholder */}
          <div className="h-32 md:h-48 lg:h-56  bg-gray-200" >
            <img src={a1} />
          </div>

          <div className="p-3 text-[10px] lg:bg-white">

            {/* Titre + localisation */}
            <div className="flex justify-between items-start">
              <p className="font-semibold text-[12px] truncate max-w-[100px]">
                Appartement
              </p>

              <div className="flex items-center gap-1 text-gray-500">
                <PiMapPinAreaFill className="text-blue-600 text-[12px]" />
                <span className="text-[9px]">Bastos,Yaoundé</span>
              </div>
            </div>

            {/* Prix */}
            <p className="mt-1 text-gray-700 text-[9px]">
              150 000 Fcfa / nuit
            </p>

            {/* Publication avec icône alignée */}
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                <HiMiniCheckBadge className="text-blue-600 text-[16px]" />
                <p className=" text-[12px]  text-[#0078EF] font-medium text-[8px]">
                  Publié le 15 Décembre
                </p>
              </div>
            </div>

          </div>
        </article>

      </main>

      {/* Bottom navigation */}
      
   

           
      <Footer />
       </div>

        {/* </section> */}
</section>
    );
}

export default Profil;