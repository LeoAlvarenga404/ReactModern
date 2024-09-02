// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Teste } from '../pages/Teste';
import { SignIn } from '../pages/SignIn'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/teste" element={<Teste />} />
        <Route path="/login" element={<SignIn />}/>
      </Routes>
    </Router>
  );
}
