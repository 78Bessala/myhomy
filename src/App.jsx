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
function App() {
  return (
    <Router>
      <Routes>

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



      </Routes>
    </Router>
  );
}

export default App;
