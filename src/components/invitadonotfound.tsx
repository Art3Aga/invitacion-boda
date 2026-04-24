export const InvitadoNotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-svh p-6 text-center bg-v-bg">
    <h2 className="font-serif italic text-3xl text-v-text mb-4">¡Ups! Lo sentimos</h2>
    <p className="font-text-2 text-gray-600 mb-8 max-w-xs">
      No pudimos encontrar tu invitación. Por favor, verifica que el enlace sea el correcto.
    </p>
    <div className="w-24 h-[1px] bg-v-accent/30 mb-8" />
    <p className="text-xs uppercase tracking-widest text-v-accent">Boda Albery & Rosalba</p>
  </div>
);