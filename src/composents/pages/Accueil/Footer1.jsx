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
import logo2 from '../../../assets/public/logo2.svg';
import { useLocation, Link } from 'react-router-dom';

function Footer1() {
  const location = useLocation();

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
    <aside
      className="
    flex  flex-1
        w-[280px] lg:w-
        flex-shrink-0
        h-screen
        sticky top-0
        flex-col
        gap-10
        bg-blue-100
        px-6
        pt-6
        md:overflow-y-hidden
      " id="footer1"
    >
      {/* LOGO */}
      <img
        src={logo2}
        alt="logo"
        className="w-full  md:max-w-[120px] lg:max-w-[300px] lg:h-[100px] mx-auto mb-6"
      />

      {/* MENU */}
      <nav className="flex flex-col  justify-center  lg:mx-24  gap-10">
        {/* Maison */}
        <Link to="/voir-tout" className="flex items-center gap-6">
          <img
            src={activeItem === 'Maison' ? home1 : home}
            className="w-10 h-10"
          />
          <span className={`text-xl ${activeItem === 'Maison' ? 'text-[#0078EF]' : ''}`}>
            Maison
          </span>
        </Link>

        {/* Reservation */}
        <Link to="/reservation" className="flex items-center gap-6">
          <img
            src={activeItem === 'Reservation' ? reservation1 : reservation}
            className="w-10 h-10"
          />
          <span className={`text-xl ${activeItem === 'Reservation' ? 'text-[#0078EF]' : ''}`}>
            Reservation
          </span>
        </Link>

        {/* Favoris */}
        <Link to="/favoris" className="flex items-center gap-6">
          <img
            src={activeItem === 'Favoris' ? favoris1 : favoris}
            className="w-10 h-10"
          />
          <span className={`text-xl ${activeItem === 'Favoris' ? 'text-[#0078EF]' : ''}`}>
            Favoris
          </span>
        </Link>

        {/* Messages */}
        <Link to="/message" className="flex items-center gap-6">
          <img
            src={activeItem === 'Messages' ? message : message1}
            className="w-10 h-10"
          />
          <span className={`text-xl ${activeItem === 'Messages' ? 'text-[#0078EF]' : ''}`}>
            Messages
          </span>
        </Link>

        {/* Profil */}
        <Link to="/profil" className="flex items-center gap-6">
          <img
            src={activeItem === 'Profil' ? profil1 : profil}
            className="w-10 h-10"
          />
          <span className={`text-xl ${activeItem === 'Profil' ? 'text-[#0078EF]' : ''}`}>
            Profil
          </span>
        </Link>
      </nav>
    </aside>
  );
}

export default Footer1;
