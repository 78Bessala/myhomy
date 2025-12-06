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
        

      </Routes>
    </Router>
  );
}

export default App;
