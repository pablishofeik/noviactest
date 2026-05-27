// components/Banner.tsx
"use client";

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { Clock, Shield, BrainCircuit, Activity, Crosshair, Star } from 'lucide-react'; // Cambié algunos iconos para mayor fidelidad

// Interfaces
interface Metric {
  icon: ReactNode;
  value: string;
  label: string;
}

interface Testimonial {
  avatar: string; 
}

// Iconos métricos usando un ID de gradiente definido en el componente
const metrics: Metric[] = [
  { icon: <Clock className="w-8 h-8" stroke="url(#metric-gradient)" strokeWidth={1.5} />, value: '24/7', label: 'Disponibilidad' },
  { icon: (
      <div className="relative flex items-center justify-center">
        {/* Recreación del escudo con elemento central */}
        <Shield className="w-9 h-9" stroke="url(#metric-gradient)" strokeWidth={1.5} />
        <div className="absolute w-2 h-3 border border-cyan-400 rounded-sm" /> 
      </div>
    ), value: '-70%', label: 'Reducción de costos' },
  { icon: <BrainCircuit className="w-9 h-9" stroke="url(#metric-gradient)" strokeWidth={1.5} />, value: '+90%', label: 'Tareas automatizadas' },
  { icon: <Activity className="w-9 h-9" stroke="url(#metric-gradient)" strokeWidth={1.5} />, value: '+3x', label: 'Productividad' },
  { icon: (
      <div className="relative flex items-center justify-center">
        <Crosshair className="w-9 h-9" stroke="url(#metric-gradient)" strokeWidth={1.5} />
        <div className="absolute w-full h-[1px] bg-cyan-400 rotate-45" />
      </div>
    ), value: '100%', label: 'Escalabilidad' },
];

const testimonials: Testimonial[] = [
  { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const Banner: FC = () => {
  return (
    <>
      <Head>
        <title>NOVACTI | Entrena. Integra. Automatiza. Escala.</title>
      </Head>

      {/* Definición de gradiente SVG global para los iconos */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="metric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#3b82f6" offset="0%" />  {/* blue-500 */}
            <stop stopColor="#22d3ee" offset="50%" /> {/* cyan-400 */}
            <stop stopColor="#a855f7" offset="100%" />{/* purple-500 */}
          </linearGradient>
        </defs>
      </svg>

      {/* SECCIÓN PRINCIPAL */}
      <section className="relative bg-[#020408] text-white pt-8 pb-16 px-6 lg:px-20 overflow-hidden">
        
        {/* Degradados de fondo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-3/4 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020408]/80 to-[#020408] pointer-events-none" />
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Columna de Texto */}
          <div className="space-y-6 lg:col-span-5">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
              Entrena.<br />
              Integra.<br />
              Automatiza.<br />
              <span className="text-[#22d3ee] drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">Escala.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg font-light">
              Agentes IA inteligentes que trabajan 24/7 para impulsar tu negocio.
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-semibold py-3.5 px-10 rounded-lg text-base hover:opacity-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-95">
                Agenda una demo
              </button>
              <button className="flex items-center justify-center gap-2.5 group bg-transparent text-gray-100 border border-gray-700/80 font-medium py-3.5 px-10 rounded-lg text-base hover:border-gray-500 transition-all active:scale-95">
                <svg className="w-5 h-5 text-[#2563eb] group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Ver cómo funciona
              </button>
            </div>
            
            {/* Testimonios */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-10 text-sm text-gray-400 border-t border-gray-800/60 mt-10">
              <div className="flex -space-x-3.5">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="relative w-11 h-11 rounded-full border-2 border-[#020408] overflow-hidden shadow-md">
                    <Image src={testimonial.avatar} alt={`User ${index + 1}`} fill sizes="44px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex text-[#facc15] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-gray-300">+200 empresas confían en Novacti</span>
              </div>
            </div>
          </div>
          
          {/* CONFIGURACIÓN DE IMAGEN */}
          <div className="relative lg:col-span-7 h-[300px] sm:h-[400px] lg:h-[600px] lg:-mr-20 flex items-center justify-center">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                maskImage: 'radial-gradient(ellipse 70% 70% at 60% 50%, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 60% 50%, black 20%, transparent 80%)',
              }}
            >
              <Image 
                src="https://blog.servitalent.com/hubfs/baja%20inesperada-2.jpg" 
                alt="Interacción entre mano humana y robótica" 
                fill
                priority
                sizes="(max-w-1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
          </div>
          
        </div>
      </section>
      
      {/* SECCIÓN DE MÉTRICAS MINIMALISTA RECREADA */}
      <section className="bg-[#020408] px-6 lg:px-20 pb-20 relative z-10">
        <div className="container mx-auto">
          {/* Contenedor apaisado (Banner horizontal) */}
          <div className="bg-[#0b1016]/80 backdrop-blur-md border border-gray-800/60 rounded-2xl shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
            
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className={`flex-1 flex items-center justify-center gap-4 py-8 px-6 w-full md:w-auto
                  ${index !== metrics.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-800/60' : ''}
                `}
              >
                {/* Contenedor del icono (sin fondo circular, más limpio) */}
                <div className="shrink-0">
                  {metric.icon}
                </div>
                
                {/* Textos alineados a la izquierda del icono */}
                <div className="flex flex-col text-left">
                  <p className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                    {metric.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Brillo sutil de fondo */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;