import React, { useEffect } from 'react';

interface ModalMapsProps {
  isOpen: boolean;
  onClose: () => void;
  addressMaps: string;
  address: string;
}


export const ModalMaps: React.FC<ModalMapsProps> = ({ isOpen, onClose, address, addressMaps }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);


    if (!isOpen) return null;


    const publicMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(addressMaps)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      <div className="relative z-10 bg-white w-full max-w-2xl overflow-hidden rounded-sm shadow-2xl animate-scale-up border border-v-border">
        
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white">
          <h3 className="font-text-2 font-bold text-xl text-vc-text">Ubicación</h3>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-400 hover:text-v-text transition-colors p-2 text-3xl leading-none cursor-pointer z-50"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div className="aspect-video w-full h-[400px] bg-gray-100 relative">
          <iframe
            title="Mapa"
            className="w-full h-full border-0"
            src={publicMapSrc}
            allowFullScreen
          />
        </div>

        <div className="p-4 bg-white text-center">
          <p className="font-text-2 text-sm text-v-text mb-4">{address}</p>
        </div>
      </div>
    </div>
  );
};