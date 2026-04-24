
import { useState } from 'react';
import Portada from './portada';
import { Invitacion } from '../components/invitacion';
import { useSearchInvitado } from '../hooks/useSearchInvitado';
import { InvitadoNotFound } from '../components/invitadonotfound';

export const PantallaActiva = () => {
  const [showContent, setShowContent] = useState(false);
  const { invitado, loading, refreshInvitado } = useSearchInvitado();

  if (loading) {
    return <div className="bg-v-bg min-h-svh" />;
  }

  if (!invitado) {
    return <InvitadoNotFound />;
  }

  const handleStart = (): void => setShowContent(true);

  return (
    <div className="font-sans antialiased bg-v-bg min-h-svh">
      {!showContent ? (
        <Portada onStart={handleStart} nombre={invitado.nombre_visible} />
      ) : (
        <div className="animate-fade-in"> 
          <Invitacion invitado={invitado} onUpdate={refreshInvitado} />
        </div>
      )}
    </div>
  );
}