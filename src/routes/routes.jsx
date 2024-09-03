import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Teste } from '../pages/Teste';
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/teste" element={<Teste />} />
        <Route path="/login" element={<SignIn />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}
