import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PantallaActiva } from './pages/pantalla-activa'
import './index.css'




import { register } from 'swiper/element/bundle';
register(); // Initialize Swiper custom elements
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/invitacion/:slug" element={<PantallaActiva />} />
        
        <Route path="/" element={<Navigate to="/invitacion/invitado-general" />} />
        
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
