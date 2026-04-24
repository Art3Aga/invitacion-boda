
import fondoVintage from '../assets/cover celeste.jpg';

export default function Portada({ onStart, nombre }: { onStart: () => void; nombre: string }) {

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 flex items-center justify-center text-[40rem] font-serif text-v-accent">
        &
      </div>

      <button className="bg-cover bg-center mx-auto flex h-full min-h-screen w-full max-w-md flex-col justify-center overflow-hidden bg-center bg-no-repeat cursor-pointer" 
        style={{ backgroundImage: `url(${fondoVintage})` }}
        onClick={onStart}>
        <div className="z-10 animate-fade-in">
            <p className="font-sans uppercase tracking-[0.15em] text-xs text-v-text mb-4">
                Hola <span className='font-bold italic'>{nombre}</span>,
            </p>
            
            <h1 className="font-serif text-6xl md:text-7xl text-v-text italic leading-tight">
                Albery <span className="text-5xl md:text-7xl block md:inline font-sans italic text-v-text my-2 md:my-0">&</span> Rosalba
            </h1>

            <p className="mt-5 font-sans uppercase tracking-[0.15em] text-xs text-v-text mb-8">
                Tenemos una noticia que contarte ...
            </p>
            
            <div className="w-32 h-px bg-v-accent mx-auto my-12"></div>
            
            <p className="font-serif text-3xl md:text-4xl text-v-text">
            23 <span className="text-v-accent">.</span> Mayo <span className="text-v-accent">.</span> 2026
            </p>
            <p className="animate-pulse-slow mt-10 font-sans uppercase tracking-widest text-sm mt-4 text-v-text">
                ¡Toca para descubrirla!
            </p>
        </div>
      </button>
    </section>
  );
}