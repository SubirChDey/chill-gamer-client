import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import router from './routes/Router';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './components/ThemeContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
    </ThemeProvider>
  </StrictMode>,
)
