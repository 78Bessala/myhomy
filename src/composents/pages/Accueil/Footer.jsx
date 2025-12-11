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

import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";

function Footer() {
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
   <section className="sm:block md:hidden fixed bottom-0 left-0 right-0 flex flex-col gap-1 bg-white z-50">

      <div className="w-full bg-[#0078EF] h-1"></div>

      <div className="flex justify-between mx-4 py-2">

        {/* Maison */}
        <div 
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
           <Link to="/voir-tout" className="">
          <img 
            src={activeItem === 'Maison' ? home1 : home} 
            className="w-[24px] h-[24px]"
          />
          </Link>
          <h1 className={`text-sm ${activeItem === 'Maison' ? 'text-[#0078EF]' : ''}`}>
            Maison
          </h1>
        </div>

        {/* Reservation */}
        <div 
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
           <Link to="/reservation" className="">
          <img 
            src={activeItem === 'Reservation' ? reservation1 : reservation} 
            className="w-[24px] h-[24px]"
          /></Link>
          <h1 className={`text-sm ${activeItem === 'Reservation' ? 'text-[#0078EF]' : ''}`}>
            Reservation
          </h1>
        </div>

        {/* Favoris */}
        <div 
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <Link to="/favoris" className="">
          <img 
            src={activeItem === 'Favoris' ? favoris1 : favoris}
            className="w-[24px] h-[24px]"
          />
          </Link>
          <h1 className={`text-sm ${activeItem === 'Favoris' ? 'text-[#0078EF]' : ''}`}>
            Favoris
          </h1>
        </div>

        {/* Messages */}
        <div 
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <Link to="/message" className="">
          <img 
             src={activeItem === 'Messages' ? message : message1} 
            className="w-[24px] h-[24px]"
          />
          </Link>
          <h1 className={`text-sm ${activeItem === 'Messages' ? 'text-[#0078EF]' : ''}`}>
            Messages
          </h1>
        </div>

        {/* Profil */}
        <div 
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
           <Link to="/profil" className="">
          <img 
             src={activeItem === 'Profil' ? profil1 : profil}
            className="w-[24px] h-[24px]"
          /></Link>
          <h1 className={`text-sm ${activeItem === 'Profil' ? 'text-[#0078EF]' : ''}`}>
            Profil
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;

