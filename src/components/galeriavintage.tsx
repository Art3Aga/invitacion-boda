
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

import foto1 from '../assets/perquin1.jpg';
import foto2 from '../assets/perquin3.jpg';
import foto3 from '../assets/restaurante.jpg';
import foto4 from '../assets/perquin5.jpg';
import foto5 from '../assets/navidad.jpg';
import marcovintage from '../assets/vintage-frame-neutral.png';


const fotosBoda = [foto1, foto2, foto3, foto4, foto5];

export const GaleriaVintage = () => {
  return (
    <div className="relative my-8 group mx-auto max-w-[300px] md:max-w-[380px] overflow-visible">
      
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
        
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="slide"
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="w-full h-full z-0"
        >
          {fotosBoda.map((foto, i) => (
            <SwiperSlide key={i}>
              {/* Ajustamos el padding para que la foto no se vea tan apretada en el tamaño pequeño */}
              <div className="w-full h-full">
                <img src={foto} 
                    className="w-full h-full object-cover shadow-inner
                        sepia-[30%] saturate-[70%] contrast-[110%] brightness-[95%]" 
                    alt="Boda" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Marco Vintage - z-10 */}
        <div className='absolute inset-0 z-10 pointer-events-none'>
          <img className='w-full h-full object-fill' src={marcovintage} alt="Marco Decorativo" />
        </div>
      </div>

      {/* Botones ajustados al nuevo tamaño (más pequeños y pegados) */}
      <button className="btn-prev absolute left-[-30px] top-1/2 -translate-y-1/2 z-20 p-1 text-v-text/40 hover:text-v-accent transition-all">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button className="btn-next absolute right-[-30px] top-1/2 -translate-y-1/2 z-20 p-1 text-v-text/40 hover:text-v-accent transition-all">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};