import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './composents/pages/Auth/Login/Login';

import Register from './composents/pages/Auth/Register/Register';
 import Accueil from './composents/pages/Accueil/Accueil';
 import Voirtout from './composents/pages/Accueil/Voirtout';
  import Duplex from './composents/pages/Accueil/Duplex';
  import Ville from './composents/pages/Accueil/Ville';
  import Appartement from './composents/pages/Accueil/Appartement';
  import Studio  from  './composents/pages/Accueil/Studio'
  import Chambre from './composents/pages/Accueil/Chambre';
import Footer from './composents/pages/Accueil/Footer'

function App() {
  return (
    <Router>
      <Routes>
        {/* Tabs */}
         <Route path="/" element={<Voirtout />} />
        <Route path="/voir-tout" element={<Voirtout />} />
        <Route path="/duplex" element={<Duplex />} />
        <Route path="/villa" element={<Ville />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/chambre" element={<Chambre />} />

        {/* <Route path="/" element={<Voirtout/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/Accueil" element={<Accueil />} />  */}
        {/* <Route path="*" element={<Login />} /> Page par défaut */}
      </Routes>
    </Router>
  );
}

export default App;
