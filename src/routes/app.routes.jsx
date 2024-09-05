import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home'
import { Materias } from '../pages/Materias'
import { DefaultLayout } from '../layouts/defaultLayout';

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/materias" element={<Materias />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Route>
    </Routes>
  )
}