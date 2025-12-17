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

  const menuItems = [
    { name: 'Maison', path: '/voir-tout', icon: home, iconActive: home1 },
    { name: 'Reservation', path: '/reservation', icon: reservation, iconActive: reservation1 },
    { name: 'Favoris', path: '/favoris', icon: favoris, iconActive: favoris1 },
    { name: 'Messages', path: '/message', icon: message1, iconActive: message },
    { name: 'Profil', path: '/profil', icon: profil, iconActive: profil1 },
  ];

  return (
    <aside id="footer1" 
    className="flex flex-col flex-1 w-[280px] lg:w-[300px] flex-shrink-0 h-screen sticky top-0 gap-8 bg-gradient-to-b from-blue-50 to-blue-100 px-6 py-6 shadow-lg rounded-r-2xl">
      
      {/* LOGO */}
      <img
        src={logo2}
        alt="logo"
        className="w-full md:mt-8 md:max-w-[270px] lg:mt-4 lg:max-w-[300px] lg:h-[100px] mx-auto mb-6"
      />

      {/* MENU */}
      <nav className="flex flex-col gap-4 md:gap-6">
        {menuItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                ${isActive ? 'bg-blue-200 shadow-md' : 'hover:bg-blue-100'}
              `}
            >
              <img
                src={isActive ? item.iconActive : item.icon}
                alt={item.name}
                className="w-10 h-10"
              />
              <span className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-[#0078EF]' : 'text-gray-700'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Footer1;
