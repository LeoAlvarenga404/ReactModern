import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './routes/routes';

import { AuthProvider } from './hooks/auth';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>
)
