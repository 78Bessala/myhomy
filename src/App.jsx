import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './composents/pages/Auth/Login/Login';
import Register from './composents/pages/Auth/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} /> {/* Page par défaut */}
      </Routes>
    </Router>
  );
}

export default App;