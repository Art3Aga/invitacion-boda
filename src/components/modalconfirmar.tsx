import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { Invitado } from '../types/invitado';

interface ModalConfirmarProps {
    isOpen: boolean;
    onClose: () => void;
    invitado: Invitado;
    onUpdate: () => void;
}

export const ModalConfirmar: React.FC<ModalConfirmarProps> = ({ isOpen, onClose, invitado, onUpdate }) => {
  const [asiste, setAsiste] = useState<boolean | null>(null);
  const [cantidad, setCantidad] = useState<number>(invitado.pases_totales);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        setAsiste(null);
        setCantidad(invitado.pases_totales);
        setLoading(false);
    }
    else {
        document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset' };
  }, [isOpen, invitado]);

  if (!isOpen) return null;

  const handleConfirmacion = async () => {
    setLoading(true);
    const { error } = await supabase
      .from('invitados')
      .update({
        estado: asiste ? 'confirmado' : 'rechazado',
        confirmados: asiste ? cantidad : 0
      }).eq('id', invitado.id);

    if (!error) {
        setTimeout(() => {
            onClose();
            onUpdate();
        }, 2000);
    } else {
        alert("Hubo un error al guardar tu respuesta. Por favor intenta de nuevo.");
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md p-8 rounded-sm shadow-2xl border border-v-accent/20 relative">
      
        {!loading && (
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
            ✕
        </button>
        )}

        <h3 className="font-serif italic text-3xl text-center mb-6">Confirmar Asistencia</h3>
        
        <p className="text-center mb-8 font-text-2 text-sm tracking-wide">
          Hola <span className="font-bold">{invitado.nombre_visible}</span>, 
          { invitado.pases_totales > 1 ? ` ¿podrán acompañarnos en nuestro gran día?` : ' ¿podrás acompañarnos en nuestro gran día?'}
        </p>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setAsiste(true)}
            className={`font-text-2 flex-1 py-3 border transition-all ${asiste === true ? 'bg-vc-bg text-white border-vc-bg' : 'border-gray-200 text-vc-bg'}`}
          >
            SÍ, ASISTIRÉ
          </button>
          <button 
            onClick={() => setAsiste(false)}
            className={`font-text-2 flex-1 py-3 border transition-all ${asiste === false ? 'bg-red-800 text-white border-red-800' : 'border-gray-200 text-red-800'}`}
          >
            NO PODRÉ IR
          </button>
        </div>

        {asiste === true && invitado.pases_totales > 1 && (
          <div className="animate-fade-in mb-8">
            <label className="block text-center text-xs font-text-2 uppercase tracking-widest mb-4">¿Cuántos confirman asistencia?</label>
            <div className="flex justify-center items-center gap-6">
              <button 
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                className="w-10 h-10 rounded-full border border-v-accent flex items-center justify-center"
              >-</button>
              <span className="text-2xl font-serif">{cantidad}</span>
              <button 
                onClick={() => setCantidad(Math.min(invitado.pases_totales, cantidad + 1))}
                className="w-10 h-10 rounded-full border border-v-accent flex items-center justify-center"
              >+</button>
            </div>
            <p className="text-[10px] text-center mt-2 text-gray-400">Máximo {invitado.pases_totales} cupos</p>
          </div>
        )}

        <button
          disabled={asiste === null || loading}
          onClick={handleConfirmacion}
          className="font-text-2 w-full bg-black text-white py-4 font-sans tracking-widest uppercase text-xs hover:bg-gray-600 transition-colors disabled:bg-gray-300"
        >
          {loading ? 'GUARDANDO...' : 'ENVIAR RESPUESTA'}
        </button>

      </div>
    </div>
  );
};