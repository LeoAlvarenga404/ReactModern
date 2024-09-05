import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Teste } from '../pages/Teste'
import { DefaultLayout } from '../layouts/defaultLayout';

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/materias" element={<Teste/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  )
}