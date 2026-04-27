
import { ModalMaps } from './modalmaps';
import { useState } from 'react';



import nuestrafoto from '../assets/NuestraFoto.jpg';
import marcovintage from '../assets/vintage-frame-neutral.png';
import ampersandimg from '../assets/ampersand.png';
import divisorimg from '../assets/divisor.png';
import fotolugar from '../assets/al horno2.jpg';
import weddingicon from '../assets/wedding.png';
import ceremonyicon from '../assets/ceremony.png';
import postreicon from '../assets/postre.png';
import foodicon from '../assets/food.png';
import marriedicon from '../assets/married.png';
import confirmassisticon from '../assets/confirmar-asistencia.png';
import timericon from '../assets/timer.png';
import { ContadorTiempo } from './tiempo';
import { useCountdown } from '../hooks/useCountdown';
import { GaleriaVintage } from './galeriavintage';
import { ModalConfirmar } from './modalconfirmar';
import type { Invitado } from '../types/invitado';



export const Invitacion = ({ invitado, onUpdate }: { invitado: Invitado; onUpdate: () => void }) => {

    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
    const direccionBodaMaps = "Al Horno El Volcán, FPGH+FQC, Conacastal";
    const direccionBoda = "Al Horno El Volcán, Calle a Placitas, San Miguel, El Salvador";
    const { days, hours, minutes, seconds } = useCountdown('2026-05-23T10:00:00');

  return (
    <div className="w-full md:w-1/2 md:mx-auto block bg-white dark:bg-white text-[#353535] overflow-x-hidden text-lg relative w-full items-center justify-center min-h-screen text-center">
        <div className="container-nuestrafoto relative overflow-hidden group">
            {/* <div className='absolute top-0 z-10 w-full'>
                <img className='relative mr-auto mr-1.5 w-20 -scale-x-100' src={cintaimg} alt=""
                    style={{ translate: '0 20px' }} />
            </div>
            <div className='absolute bottom-0 z-10 w-full'>
                <img className='relative ml-auto mr-1.5 w-20 -translate-y-3 -scale-x-120' src={cintaimg} alt="" />
            </div> */}
            <div className="p-4 md:p-6">
                <img
                    className="w-full h-auto max-h-[500px] object-scale-down mx-auto"
                    src={nuestrafoto}
                    loading="lazy"
                    alt="Nuestra Foto"
                />
            </div>
            <div className='absolute inset-0 pointer-events-none'>
                <img
                    className='w-full h-full object-fill'
                    src={marcovintage}
                    alt="Marco"
                />
            </div>
        </div>
        <div className="container-nuestrosnombres relative my-8 text-6xl font-santacatalina" translate='no'>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-0 py-2'>
                <img className='mx-auto h-full w-auto' src={ampersandimg} alt=""
                    style={{ opacity: 1, filter: 'none' }} />
            </div>
            <div className="relative z-10">
                <div className='relative z-10 mb-5'>
                    <div className='overflow-visible whitespace-pre-wrap' style={{opacity: 1}}>
                        <div className='inline-block overflow-visible italic font-serif text-7xl notranslate'>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>R</span>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>o</span>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>s</span>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>a</span>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>l</span>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>b</span>
                            <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>a</span>
                        </div>
                    </div>
                </div>
                <div className='overflow-visible whitespace-pre-wrap relative z-20' style={{opacity: 1}}>
                    <div className='inline-block overflow-visible italic font-serif text-7xl notranslate'>
                        <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>A</span>
                        <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>l</span>
                        <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>b</span>
                        <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>e</span>
                        <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>r</span>
                        <span className='inline-block overflow-visible' style={{ opacity: 0.8, filter: 'none' }}>y</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fecha-boda relative my-8' translate='no'>
            <div className='mx-auto w-5/6 md:w-3/4'>
                <div style={{opacity: 1}}>
                    <div className='border-t border-[#bfd6ee] pt-2 text-xl tracking-widest notranslate'>
                        <span className='text-vc-text opacity-30'>El</span> <span className='inline-block animate-pulse-slow'>23</span> <span className='text-vc-text opacity-30'>de</span> <span className='inline-block animate-pulse-slow'>Mayo</span> <span className='text-vc-text opacity-30'>del</span> 2026
                    </div>
                </div>
                <div className='mt-2 border-b border-[#bfd6ee] pb-2 text-xl tracking-widest'>
                    <div style={{opacity: 1}}>
                        <div className='pt-2 text-2xl tracking-widest'>
                            <span className='text-black'>!NOS</span> <span className='text-black'>CASAMOS!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className='relative -bottom-0.5' src={divisorimg} alt="" />
        <div className='texto-motivacional relative z-20 overflow-visible'>
            <div className='relative px-4 bg-[#93b4d4] text-white'>
                <div className='relative px-4 text-xl text-center'>
                    <div className='text-center' style={{opacity: 1}}>
                        <p className='tracking-widest font-text-2 text-[18px]'>Queremos compartir este día tan especial contigo.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className='relative -top-0.5 -scale-y-100' src={divisorimg} alt="" />
        <div className='container-title-section px-4 relative py-4'>
            <span className='text-vc-text font-text-2 italic text-4xl font-bold italic'>Ceremonia</span>
        </div>
        <div className='px-6 text-lg text-[16px] font-bold tracking-wider text-[#252525] font-text-2'>
            <span className='whitespace-nowrap'>RESTAURANTE AL HORNO EL VOLCÁN 📍</span>
        </div>
        <div className="mt-2 container-foto-lugar relative overflow-hidden group">
            {/* <div className='absolute top-0 z-10 w-full'>
                <img className='relative mr-auto mr-1.5 w-20 -scale-x-100' src={cintaimg} alt=""
                    style={{ translate: '0 20px' }} />
            </div>
            <div className='absolute bottom-0 z-10 w-full'>
                <img className='relative ml-auto mr-1.5 w-20 -translate-y-3 -scale-x-120' src={cintaimg} alt="" />
            </div> */}
            <div className="p-2 md:p-6">
                <img
                    className="w-full h-auto max-h-[300px] object-cover mx-auto"
                    src={fotolugar}
                    loading="lazy"
                    alt="Lugar de la boda"
                />
            </div>
            <div className='absolute inset-0 pointer-events-none'>
                <img
                    className='w-full h-full object-fill'
                    src={marcovintage}
                    alt="Marco"
                />
            </div>
        </div>
        <div className="grid">
            <span className='font-text-2'>Calle a Placitas</span>
            <span className='font-text-2'>San Miguel, El Salvador</span>
            <span className='font-text-2'>10:00 a.m.</span>
        </div>
        <button 
            className="cursor-pointer animate-pulse-slow mt-10 font-text-2 tracking-widest text-sm mt-4 text-v-text"
            onClick={() => setIsMapOpen(true)}
        >
            ¡Toca para ver en Maps!
        </button>
        <img className='relative -bottom-0.5' src={divisorimg} alt="" />
        <div className='container-itinerario relative z-20 overflow-visible'>
            <div className="relative bg-[#93b4d4]">
                <div className='pb-4 pt-5 text-4xl text-white'>
                    <div className='overflow-visible whitespace-pre-wrap'>
                        <div className='inline-block overflow-visible'>
                            <span className='font-text-2 inline-block overflow-visible font-bold italic'>Itinerario</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative grid grid-cols-1 place-items-center justify-center gap-4 px-4 bg-[#93b4d4]'>
                <div className='relative grid w-full gap-y-7 py-5 pb-7'>
                    <div className='pointer-events-none absolute bottom-0 left-0 right-0 top-0 h-full w-full pb-11 pt-8'>
                        <div className='h-full w-1/2 border-r border-dashed border-[#1d7396]'></div>
                    </div>
                    <div className='welcome-container flex items-center gap-x-3'>
                        <div className='flex flex-1 flex-col items-end justify-end font-text-2'>
                            <p className='text-lg font-bold tracking-wider text-[#252525]'>10:00 a.m.</p>
                            <div className='flex gap-x-1.5 text-right'>
                                <span className='mr-[0.25em] inline-block whitespace-nowrap '>Bienvenida</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='relative z-10 flex size-7 items-center justify-center'>
                                <div className='size-[9px] rounded-full bg-[#1d7396]'></div>
                            </div>
                        </div>
                        <div className='flex flex-1 justify-start text-left'>
                            <img className='h-24 w-24 object-contain' loading="lazy" src={weddingicon} alt="" />
                        </div>
                    </div>
                    <div className='ceremony-container flex items-center gap-x-3'>
                        <div className='flex flex-1 justify-end text-end'>
                            <img className='h-24 w-24 object-contain' src={ceremonyicon} alt="" />
                        </div>
                        <div className='relative'>
                            <div className='relative z-10 flex size-7 items-center justify-center'>
                                <div className='size-[9px] rounded-full bg-[#1d7396]'></div>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col items-start justify-start font-text-2'>
                            <p className='text-lg font-bold tracking-wider text-[#252525]'>11:00 a.m.</p>
                            <div className='flex gap-x-1.5 text-right'>
                                <span className='mr-[0.25em] inline-block whitespace-nowrap '>Ceremonia</span>
                            </div>
                        </div>
                    </div>
                    <div className='food-container flex items-center gap-x-3'>
                        <div className='flex flex-1 flex-col items-end justify-end font-text-2'>
                            <p className='text-lg font-bold tracking-wider text-[#252525]'>12:00 m.d.</p>
                            <div className='flex gap-x-1.5 text-right'>
                                <span className='mr-[0.25em] inline-block whitespace-nowrap '>Almuerzo</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='relative z-10 flex size-7 items-center justify-center'>
                                <div className='size-[9px] rounded-full bg-[#1d7396]'></div>
                            </div>
                        </div>
                        <div className='flex flex-1 justify-start text-left'>
                            <img className='h-24 w-24 object-contain' src={foodicon} alt="" />
                        </div>
                    </div>
                    <div className='postre-container flex items-center gap-x-3'>
                        <div className='flex flex-1 justify-end text-end'>
                            <img className='h-24 w-24 object-contain' src={postreicon} alt="" />
                        </div>
                        <div className='relative'>
                            <div className='relative z-10 flex size-7 items-center justify-center'>
                                <div className='size-[9px] rounded-full bg-[#1d7396]'></div>
                            </div>
                        </div>
                        <div className='flex flex-1 flex-col items-start justify-start font-text-2'>
                            <p className='text-lg font-bold tracking-wider text-[#252525]'>1:00 p.m.</p>
                            <div className='flex gap-x-1.5 text-right'>
                                <span className='mr-[0.25em] inline-block whitespace-nowrap '>Postre</span>
                            </div>
                        </div>
                    </div>
                    <div className='married-container flex items-center gap-x-3'>
                        <div className='flex flex-1 flex-col items-end justify-end font-text-2'>
                            <p className='text-lg font-bold tracking-wider text-[#252525]'>2:00 p.m.</p>
                            <div className='flex gap-x-1.5 text-right'>
                                <span className='mr-[0.25em] inline-block whitespace-nowrap '>Nos despedimos</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='relative z-10 flex size-7 items-center justify-center'>
                                <div className='size-[9px] rounded-full bg-[#1d7396]'></div>
                            </div>
                        </div>
                        <div className='flex flex-1 justify-start text-left'>
                            <img className='h-30 w-32 object-cover' src={marriedicon} alt="" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className='relative -top-0.5 -scale-y-100' src={divisorimg} alt="" />

        <div className='container-asistencia overflow-hidden whitespace-pre-wrap'>
            {invitado.estado === 'pendiente' ? (
                <> 
                    <div className='inline-block pb-4 pt-5  overflow-visible'>
                        <span className='inline-block overflow-visible font-bold font-text-2 italic text-4xl text-vc-text'>Asistencia</span>
                    </div>
                    <div className='relative z-10 px-4 text-lg text-[#252525]'>
                        <div className='font-text-2 font-bold ' style={{ opacity: 1 }}>
                            <span className='mr-[0.5em] tracking-widerinline-block whitespace-nowrap'>¿NOS</span>
                            <span className='mr-[0.25em] tracking-widerinline-block whitespace-nowrap'>ACOMPAÑAS?</span>
                        </div>
                    </div>
                    <button onClick={() => setIsModalConfirmOpen(true)}>
                        <div style={{ opacity: 1, transform: 'none' }}>
                            <img className='mx-auto w-32 animate-lightrotation pt-4' src={confirmassisticon} alt="Confirmar Asistencia" />
                            <p className='animate-pulse-slow font-text-2 tracking-widest text-sm mt-4 text-v-text'>(Toca para confirmar)</p>
                        </div>
                    </button> 
                </>
            ) : (<></>)}

            <section className="p-8">
                {invitado.estado === 'pendiente' ? (
                    <div className="animate-fade-in">
                        <p className="text-sm font-text-2 text-gray-600 mb-6">
                            Por favor, confírmanos antes del 16 de mayo.
                        </p>
                    </div>
                ) : (
                    <div className="animate-fade-in py-4 bg-v-bg/50 rounded-lg border border-v-accent/10">
                        <h3 className="font-serif italic text-2xl mb-2 text-v-text">
                            {invitado.estado === 'confirmado' ? '¡Gracias por confirmar!' : 'Te extrañaremos'}
                        </h3>
                        
                        {invitado.estado === 'confirmado' ? (
                            <p className="text-sm font-text-2 text-gray-600">
                                Hemos registrado <span className="font-bold text-vc-bg">{invitado.confirmados}</span> {invitado.confirmados === 1 && invitado.pases_totales == 1 ? 'lugar para tí' : 'lugares para tu familia'}.
                            </p>
                        ) : (
                            <p className="text-sm font-text-2 text-gray-600">
                                Lamentamos que no puedas asistir, muchas gracias por notificar.
                            </p>
                        )}
                        <button 
                            onClick={() => setIsModalConfirmOpen(true)}
                            className="mt-6 text-[12px] uppercase tracking-tighter text-gray-400 hover:text-v-accent transition-colors underline underline-offset-4"
                            >
                                Modificar respuesta
                            </button><br />
                            <span className='text-[10px] text-gray-500'>(Antes del 16 de mayo)</span>
                        </div>
                )}
                
            </section>

        </div>
        
        <div className="container-galeria overflow-hidden">
            <GaleriaVintage></GaleriaVintage>
        </div>

        <img className='relative -bottom-0.5' src={divisorimg} alt="" />

        <div className="container-cuenta-regresiva overflow-hidden">
            
            <div className='bg-[#93b4d4] relative'>
                <div className='text-lg tracking-wider text-white pb-2'>
                    <div className='overflow-hidden whitespace-pre-wrap'>
                        <div className='inline-block overflow-visible font-text-2'>
                            <span className='inline-block overflow-visible' style={{ opacity: 1, filter: 'none' }}>
                                NOS 
                            </span>
                            <span className='ml-2 inline-block overflow-visible' style={{ opacity: 1, filter: 'none' }}>
                                VEMOS EN ...
                            </span>
                        </div>
                    </div>
                </div>
                <img className='mx-auto w-24 animate-lightrotation' src={timericon} alt="" />
                <div className='pt-2 relative grid grid-cols-1 place-items-center justify-center gap-4 px-4'>
                    <div className="flex justify-center pb-8 pt-4 font-atypewriter">
                        <ContadorTiempo label='Días' value={days}></ContadorTiempo>
                        <ContadorTiempo label='Horas' value={hours}></ContadorTiempo>
                        <ContadorTiempo label='Mins' value={minutes}></ContadorTiempo>
                        <ContadorTiempo label='Segs' value={seconds} hasBorder={false}></ContadorTiempo>
                    </div>

                </div>
            </div>
        </div>        

        <ModalConfirmar 
            isOpen={isModalConfirmOpen} 
            onClose={() => setIsModalConfirmOpen(false)} 
            invitado={invitado}
            onUpdate={onUpdate}
        />

        <ModalMaps 
            isOpen={isMapOpen} 
            onClose={() => setIsMapOpen(false)} 
            addressMaps={direccionBodaMaps} 
            address={direccionBoda}
        />
    </div>
  )
}
