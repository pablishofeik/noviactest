// components/MidBodySection.tsx
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';

// --- ICONOS VECTORIALES REFINADOS ---
const ScalesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

// Actualizado a círculo con borde y check interno (como en la referencia)
const CheckCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 12.5l2 2 5-5" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// --- DATOS DE LAS TARJETAS ESTILIZADAS ---
interface AgentCard {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: ReactNode;
  theme: {
    text: string;
    border: string;
    bgFocus: string;
    cardBg: string;
    glow: string;
    innerShadow: string;
  };
}

const agentsData: AgentCard[] = [
  {
    id: 'abogado',
    title: 'Abogado IA',
    description: 'Tu asistente legal que investiga, redacta, analiza y encuentra información jurídica al instante.',
    features: [
      'Análisis de documentos',
      'Búsqueda jurisprudencial',
      'Redacción de contratos',
      'Resumen de casos'
    ],
    // Imagen de robot estilo IA azul
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    icon: <ScalesIcon />,
    theme: {
      text: 'text-[#3b82f6]', // Blue
      border: 'border-[#3b82f6]/40',
      bgFocus: 'bg-[#3b82f6]/10',
      cardBg: 'from-[#3b82f6]/10 to-transparent',
      glow: 'shadow-[0_0_35px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_45px_rgba(59,130,246,0.25)]',
      innerShadow: 'shadow-[inset_0_0_20px_rgba(59,130,246,0.3)]'
    }
  },
  {
    id: 'rh',
    title: 'Agente de RH',
    description: 'Automatiza procesos de talento humano y enfócate en lo que realmente importa: tu equipo.',
    features: [
      'Reclutamiento inteligente',
      'Evaluaciones y filtros',
      'Onboarding automatizado',
      'Consultas de colaboradores'
    ],
    // Imagen de robot estilo IA cyan
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop',
    icon: <UsersIcon />,
    theme: {
      text: 'text-[#06b6d4]', // Cyan
      border: 'border-[#06b6d4]/40',
      bgFocus: 'bg-[#06b6d4]/10',
      cardBg: 'from-[#06b6d4]/10 to-transparent',
      glow: 'shadow-[0_0_35px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_45px_rgba(6,182,212,0.25)]',
      innerShadow: 'shadow-[inset_0_0_20px_rgba(6,182,212,0.3)]'
    }
  },
  {
    id: 'ventas',
    title: 'Coach de Ventas',
    description: 'Entrena a tu equipo, analiza oportunidades y cierra más ventas con inteligencia comercial.',
    features: [
      'Análisis de oportunidades',
      'Guiones y objeciones',
      'Seguimiento inteligente',
      'Reportes de rendimiento'
    ],
    // Imagen de robot estilo IA morado
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    icon: <ChartIcon />,
    theme: {
      text: 'text-[#a855f7]', // Purple
      border: 'border-[#a855f7]/40',
      bgFocus: 'bg-[#a855f7]/10',
      cardBg: 'from-[#a855f7]/10 to-transparent',
      glow: 'shadow-[0_0_35px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]',
      innerShadow: 'shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]'
    }
  }
];

interface MidBodySectionProps {
  className?: string;
}

const MidBodySection: FC<MidBodySectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#020408] text-white py-24 px-6 lg:px-16 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        
        {/* === HEADER DE LA SECCIÓN === */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#06b6d4] text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            AGENTES INTELIGENTES PARA CADA ÁREA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Agentes IA que trabajan para ti
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            Especialistas digitales entrenados para cada función de tu empresa.
          </p>
        </div>

        {/* === GRID DE LAS 3 COLUMNAS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsData.map((agent) => (
            <div 
              key={agent.id}
              className={`relative bg-[#05070a] rounded-3xl overflow-hidden border ${agent.theme.border} transition-all duration-300 group flex flex-col ${agent.theme.glow}`}
            >
              {/* Resplandor de fondo interno de la tarjeta (Tinte de color superior) */}
              <div className={`absolute inset-0 bg-gradient-to-b ${agent.theme.cardBg} z-0 pointer-events-none`} />
              
              {/* Parte Superior: Imagen y Capas */}
              <div className="relative w-full h-64 shrink-0 z-10">
                <Image 
                  src={agent.image}
                  alt={agent.title}
                  fill
                  className="object-cover opacity-80 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                {/* Degradado fuerte inferior para fundir con el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/60 to-transparent" />
                
                {/* === ICONO PROFUNDO (Efecto Portal) === */}
                <div className="absolute top-8 left-8 p-1.5 rounded-full border border-white/10 bg-[#020408]/40 backdrop-blur-md shadow-2xl">
                  {/* Anillo interior brillante */}
                  <div className={`w-[68px] h-[68px] rounded-full border ${agent.theme.border} ${agent.theme.bgFocus} flex items-center justify-center ${agent.theme.text} ${agent.theme.innerShadow} backdrop-blur-lg`}>
                    {agent.icon}
                  </div>
                </div>
              </div>

              {/* Parte Inferior: Contenido de Texto */}
              <div className="px-8 pb-10 flex-grow flex flex-col relative z-20 -mt-4">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                  {agent.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 min-h-[60px]">
                  {agent.description}
                </p>
                
                {/* Lista de Características */}
                <ul className="space-y-3.5 mb-8 flex-grow">
                  {agent.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                      <div className={`shrink-0 ${agent.theme.text}`}>
                        <CheckCircleIcon />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón Ver Más */}
                <button className={`flex items-center text-sm font-semibold ${agent.theme.text} hover:brightness-125 transition-all group/link mt-auto w-fit`}>
                  Ver más
                  <ArrowRightIcon />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MidBodySection;