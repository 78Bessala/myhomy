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
  import Studio  from  './composents/pages/Accueil/Studio'
  import Chambre from './composents/pages/Accueil/Chambre';
  import Details1 from './composents/pages/Accueil/Details1'
  import Details2 from './composents/pages/Accueil/Details2'
   import DetailsA from './composents/pages/Accueil/DetailsA'
    import DetailsD from './composents/pages/Accueil/DetailsD'
  import DetailsV from './composents/pages/Accueil/DetailsV'
  import DetailsV1 from './composents/pages/Accueil/DetailsV1'
  import DetailsS from './composents/pages/Accueil/DetailsS'
  import DetailsS1 from './composents/pages/Accueil/DetailsS1'
      import DetailsD1 from './composents/pages/Accueil/DetailsD1'
    import DetailsA1 from './composents/pages/Accueil/DetailsA1'
     import DetailsC from './composents/pages/Accueil/DetailsC'
       import DetailsC1 from './composents/pages/Accueil/DetailsC1'
       import  Reservation  from './composents/pages/Accueil/Reservation'
import Favoris from './composents/pages/Accueil/Favoris';
import Message from './composents/pages/Accueil/Message'
import Profil from './composents/pages/Accueil/Profil'
import Footer1 from './composents/pages/Accueil/Footer1'
import Layout from './composents/pages/Accueil/Layout'
// import '../../../index.css';



function App() {
  return (
    <ReservationProvider>
      <FavorisProvider>
        <Router>        
           <Routes>
{/* authentification */}

      {/* Page par défaut = Accueil */}
        <Route path="/" element={<Welcomme />} />

        {/* Autres pages */}
        <Route path="/welcomme" element={<Welcomme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Pass/>}></Route>
        <Route path="/verification" element={<Verification/>}></Route>
        <Route path="/new" element={<NewPass/>}></Route>
        <Route path="/succes" element={<Succes/>}></Route>
        <Route path="initia" element={<NewSucces/>}></Route>
        {/* <Route path="login_desktop" element={<LoginD/>}></Route>
        <Route path="register_desktop" element={<RegisterD/>}></Route> */}
        <Route path="pprofil" element={<ProfilP/>}></Route>
        <Route path="vprofil" element={<ProfilV/>}></Route>
        <Route path="parametrel" element={<Parametre/>}></Route>
         <Route path="avant" element={<Sprof/>}></Route>



             <Route element={<Layout />} /> 
          {/* Tabs */}
           <Route path="/" element={<Voirtout /> } />
          <Route path="/voir-tout" element={<Voirtout />}          />
          <Route path="/duplex" element={<Duplex />} />
          <Route path="/villa" element={<Ville />} />
          <Route path="/appartement" element={<Appartement />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/chambre" element={<Chambre />} />

          {/* menu phone */}
            <Route path="/reservation" element={<Reservation/>} />
          <Route path="/favoris" element={<Favoris/>} />
         <Route path="/message" element={<Message/>} /> 
         <Route path="/profil" element={<Profil/>} /> 

          
          
          
          {/* Detail pages */}
          <Route path="/Details1" element={<Details1 />} />
          <Route path="/Details2" element={<Details2 />} />
          <Route path="/DetailsA" element={<DetailsA />} />
          <Route path="/DetailsD" element={<DetailsD />} />
          <Route path="/DetailsV" element={<DetailsV />} />
          <Route path="/DetailsV1" element={<DetailsV1 />} />
          <Route path="/DetailsS" element={<DetailsS />} />
          <Route path="/DetailsS1" element={<DetailsS1 />} />
          <Route path="/DetailsD1" element={<DetailsD1 />} />
          <Route path="/DetailsA1" element={<DetailsA1 />} />
          <Route path="/DetailsC" element={<DetailsC />} />
          <Route path="/DetailsC1" element={<DetailsC1 />} />

           
        </Routes>
      </Router>
      </FavorisProvider>
    </ReservationProvider>

  );
}
export default App;

