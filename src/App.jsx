import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './composents/pages/Auth/Login/Login';


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
// import '../../../index.css';



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

        {/* menu phone */}
          <Route path="/reservation" element={<Reservation/>} />
        <Route path="/favoris" element={<Favoris/>} />
       <Route path="/message" element={<Message/>} /> 
         {/* <Route path="/profil "element={<Profil/>} />  */}

        
        
        
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
  );
}

export default App;
