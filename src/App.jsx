import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './composents/pages/Auth/Login/Login';
import Register from './composents/pages/Auth/Register/Register';
 import Accueil from './composents/pages/Accueil/Accueil';
 import Voirtout from './composents/pages/Accueil/Voirtout';
import Footer from './composents/pages/Accueil/Footer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Voirtout/>} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/Accueil" element={<Accueil />} />
        {/* <Route path="*" element={<Login />} /> Page par défaut */}
      </Routes>
    </Router>
  );
}

export default App;
