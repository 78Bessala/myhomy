import home from '../../../assets/public/home2.svg';
import home1 from '../../../assets/public/home1.svg';
import reservation from '../../../assets/public/reservation.svg';
import reservation1 from '../../../assets/public/reservation1.svg';
import favoris from '../../../assets/public/favoris.svg';
import favoris1 from '../../../assets/public/favoris1.svg';
import message1 from '../../../assets/public/message1.svg';
import message from '../../../assets/public/message.svg';
import profil from '../../../assets/public/profil.svg';
import profil1 from '../../../assets/public/profil1.svg';
import logo2 from '../../../assets/public/logo2.svg'
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";

function Footer1() {
  const location = useLocation();
  
  // Déterminer l'item actif en fonction de la route
  const getActiveItem = () => {
    const path = location.pathname;
    if (path.includes('voir-tout') || path === '/') return 'Maison';
    if (path.includes('reservation')) return 'Reservation';
    if (path.includes('favoris')) return 'Favoris';
    if (path.includes('message')) return 'Messages';
    if (path.includes('profil')) return 'Profil';
    return 'Maison';
  };

  const activeItem = getActiveItem();

  return (
    <section className="hidden lg:flex flex-1 flex-col p-8 pt-24 lg:pt-6 gap-12 bg-blue-100 w-11/12">

     <img src={logo2} className='mt-6 lg:w-[286px] lg:h-[286px] mt-2'/>

      <div className="flex  flex-col  gap-12 lg:gap-32 justify-between mx-4 ">

        {/* Maison */}
        <div 
          className="flex  gap-6 items-center cursor-pointer"
        >
           <Link to="/voir-tout" className="">
          <img 
            src={activeItem === 'Maison' ? home1 : home} 
            className=" w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
          />
          </Link>
          <h1 className={`text-base lg:text-2xl ${activeItem === 'Maison' ? 'text-[#0078EF]' : ''}`}>
            Maison
          </h1>
        </div>

        {/* Reservation */}
        <div 
          className="flex  gap-6 items-center cursor-pointer"
        >
           <Link to="/reservation" className="">
          <img 
            src={activeItem === 'Reservation' ? reservation1 : reservation} 
            className=" w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
          /></Link>
          <h1 className={` lg:text-2xl ${activeItem === 'Reservation' ? 'text-[#0078EF]' : ''}`}>
            Reservation
          </h1>
        </div>

        {/* Favoris */}
        <div 
          className="flex  gap-6 items-center cursor-pointer"
        >
          <Link to="/favoris" className="">
          <img 
            src={activeItem === 'Favoris' ? favoris1 : favoris}
            className=" w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
          />
          </Link>
          <h1 className={` lg:text-2xl ${activeItem === 'Favoris' ? 'text-[#0078EF]' : ''}`}>
            Favoris
          </h1>
        </div>

        {/* Messages */}
        <div 
          className="flex  gap-6 items-center cursor-pointer"
        >
          <Link to="/message" className="">
          <img 
             src={activeItem === 'Messages' ? message : message1} 
            className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
          />
          </Link>
          <h1 className={` lg:text-2xl ${activeItem === 'Messages' ? 'text-[#0078EF]' : ''}`}>
            Messages
          </h1>
        </div>

        {/* Profil */}
        <div 
          className="flex  gap-6 items-center cursor-pointer"
        >
           <Link to="/profil" className="">
          <img 
             src={activeItem === 'Profil' ? profil1 : profil}
            className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
          /></Link>
          <h1 className={` lg:text-2xl ${activeItem === 'Profil' ? 'text-[#0078EF]' : ''}`}>
            Profil
          </h1>
        </div>
      </div>
    </section>
  );
 }

export default Footer1;
