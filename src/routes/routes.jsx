import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { usuario } = useAuth();

  return(
    <BrowserRouter>
    { usuario ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}