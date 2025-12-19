import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './composents/pages/Auth/Login/Login';
import Register from './composents/pages/Auth/Register/Register';
// import Welcomme from './composents/pages/Home/Welcomme';
import Pass from './composents/pages/Auth/Login/Pass';
import Verification from './composents/pages/Auth/Login/Verification';
import NewPass from './composents/pages/Auth/Login/NewPass';
import Succes from './composents/pages/Auth/Login/Succes';
import NewSucces from './composents/pages/Auth/Login/NewSucces';
import Welcomme from './composents/pages/Home/Welcomme';
// import LoginD from './composents/pages/Auth/Desktop/LoginD';
// import RegisterD from './composents/pages/Auth/Desktop/RegisterD';
import ProfilP from './composents/pages/Auth/Parametres/ProfilP';
import ProfilV from './composents/pages/Auth/Parametres/ProfilV';
import Parametre from './composents/pages/Auth/Parametres/Parametre';
import Sprof from './composents/pages/Auth/Parametres/Sprof';

////////////////////////////////////////////////////////////////
import { ReservationProvider } from './context/ReservationContext';
import { FavorisProvider } from './composents/pages/Accueil/FavorisContext';

import Voirtout from './composents/pages/Accueil/Voirtout';
import Duplex from './composents/pages/Accueil/Duplex';
import Ville from './composents/pages/Accueil/Ville';
import Appartement from './composents/pages/Accueil/Appartement';
import Studio from './composents/pages/Accueil/Studio'
import Chambre from './composents/pages/Accueil/Chambre';
import Reservation from './composents/pages/Accueil/Reservation'
import Favoris from './composents/pages/Accueil/Favoris';
import Message from './composents/pages/Accueil/Message'
import Profil from './composents/pages/Accueil/Profil'
import Footer1 from './composents/pages/Accueil/Footer1'
import Layout from './composents/pages/Accueil/Layout'
import ListingDetail from './composents/pages/Accueil/ListingDetail';
import ReservationLogement from './composents/pages/Home/Reservation/ReservationLogement';
// import '../../../index.css';



function App() {

  return (
    <ReservationProvider>
      <FavorisProvider>
        <Router>
          <Routes>
            {/* authentification */}

            {/* Page par défaut = Accueil */}
            {/* <Route path="/" element={<Welcomme />} /> */}

            {/* Autres pages */}
            <Route path="/welcome" element={<Welcomme />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Pass />}></Route>
            <Route path="/verification" element={<Verification />}></Route>
            <Route path="/new" element={<NewPass />}></Route>
            <Route path="/succes" element={<Succes />}></Route>
            <Route path="initia" element={<NewSucces />}></Route>
            {/* <Route path="login_desktop" element={<LoginD/>}></Route>
        <Route path="register_desktop" element={<RegisterD/>}></Route> */}
            <Route path="pprofil" element={<ProfilP />}></Route>
            <Route path="vprofil" element={<ProfilV />}></Route>
            <Route path="parametrel" element={<Parametre />}></Route>
            <Route path="avant" element={<Sprof />}></Route>



            <Route element={<Layout />} />
            {/* Tabs */}
            <Route path="/" element={<Voirtout />} />
            <Route path="/voir-tout" element={<Voirtout />} />
            <Route path="/duplex" element={<Duplex />} />
            <Route path="/villa" element={<Ville />} />
            <Route path="/appartement" element={<Appartement />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/chambre" element={<Chambre />} />

            {/* menu phone */}
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/detail/:id" element={<ListingDetail />} />
            <Route path="/reserver/:id" element={<ReservationLogement />} />
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/message" element={<Message />} />
            <Route path="/profil" element={<Profil />} />

          </Routes>
        </Router>
      </FavorisProvider>
    </ReservationProvider>

  );
}

export default App;