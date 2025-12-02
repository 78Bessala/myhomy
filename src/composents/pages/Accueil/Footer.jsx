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
import { useState } from 'react';

function Footer() {
  const [activeItem, setActiveItem] = useState('Maison');

  return (
    <section className="fixed bottom-0 left-0 right-0 flex flex-col gap-1 bg-white z-50">
      <div className="w-full bg-[#0078EF] h-1"></div>

      <div className="flex justify-between mx-4 py-2">

        {/* Maison */}
        <div 
          onClick={() => setActiveItem('Maison')}
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <img 
            src={activeItem === 'Maison' ? home1 : home} 
            className="w-[24px] h-[24px]"
          />
          <h1 className={`text-sm ${activeItem === 'Maison' ? 'text-[#0078EF]' : ''}`}>
            Maison
          </h1>
        </div>

        {/* Reservation */}
        <div 
          onClick={() => setActiveItem('Reservation')}
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <img 
            src={activeItem === 'Reservation' ? reservation1 : reservation} 
            className="w-[24px] h-[24px]"
          />
          <h1 className={`text-sm ${activeItem === 'Reservation' ? 'text-[#0078EF]' : ''}`}>
            Reservation
          </h1>
        </div>

        {/* Favoris */}
        <div 
          onClick={() => setActiveItem('Favoris')}
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <img 
            src={activeItem === 'Favoris' ? favoris1 : favoris}
            className="w-[24px] h-[24px]"
          />
          <h1 className={`text-sm ${activeItem === 'Favoris' ? 'text-[#0078EF]' : ''}`}>
            Favoris
          </h1>
        </div>

        {/* Messages */}
        <div 
          onClick={() => setActiveItem('Messages')}
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <img 
             src={activeItem === 'Messages' ? message : message1} 
            className="w-[24px] h-[24px]"
          />
          <h1 className={`text-sm ${activeItem === 'Messages' ? 'text-[#0078EF]' : ''}`}>
            Messages
          </h1>
        </div>

        {/* Profil */}
        <div 
          onClick={() => setActiveItem('Profil')}
          className="flex flex-col gap-1 items-center cursor-pointer"
        >
          <img 
             src={activeItem === 'Profil' ? profil1 : profil}
            className="w-[24px] h-[24px]"
          />
          <h1 className={`text-sm ${activeItem === 'Profil' ? 'text-[#0078EF]' : ''}`}>
            Profil
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;

