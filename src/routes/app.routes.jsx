import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Teste } from '../pages/Teste'


export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teste" element={<Teste/>}/>
    </Routes>
  )
}