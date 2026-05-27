// components/BottomBodySection.tsx
import React, { FC } from 'react';
import Image from 'next/image';

interface BottomBodySectionProps {
  className?: string;
}

const BottomBodySection: FC<BottomBodySectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#020408] py-6 px-3 lg:px-16 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Contenedor principal */}
        <div className="relative w-full rounded-[24px] border border-[#1e3a8a]/40 bg-[#030712] overflow-hidden flex flex-col lg:flex-row items-center shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)]">
          
          {/* ================= FONDO DE RED (Constellation/Network) ================= */}
          {/* Cambié a opacity-100 para que la red brille al máximo */}
          <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
            {/* Nota: Agregué una "/" al inicio del src para que Next.js la lea correctamente desde la carpeta public */}
            <Image 
              src="/Gemini_Generated_Image_jgo1fgjgo1fgjgo1.png"
              alt="Network Background"
              fill
              className="object-cover mix-blend-screen"
            />
            {/* NUEVO GRADIENTE PROTECTOR DE TEXTO:
              Empieza muy oscuro en la izquierda (from-[#030712]), 
              se difumina en el centro (via-[#030712]/70) 
              y desaparece en la derecha (to-transparent) dejando la red 100% visible.
            */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
            
            {/* Gradiente sutil abajo para asentar la base */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#030712] to-transparent" />
          </div>

          {/* Luz de acento sutil azul detrás del texto */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600/10 blur-[100px] pointer-events-none z-0" />

          {/* ================= COLUMNA IZQUIERDA: CONTENIDO Y CTA ================= */}
          <div className="relative z-10 w-full lg:w-[55%] p-8 md:p-12 lg:p-14 flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
              Tu próximo gran avance empieza hoy.
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 max-w-[420px] font-light leading-relaxed drop-shadow-md">
              Agenda una demo y descubre cómo los Agentes IA de Novacti pueden transformar tu empresa.
            </p>
            
            <div className="flex flex-col items-start gap-3">
              <button className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-semibold py-3 px-8 rounded-lg text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
                Agenda una demo
              </button>
              <span className="text-[11px] md:text-xs text-gray-500 font-medium ml-1">
                Sin compromiso. 100% personalizado.
              </span>
            </div>
          </div>

          {/* ================= COLUMNA DERECHA: LAPTOP (PNG TRANSPARENTE) ================= */}
          <div className="relative z-10 w-full lg:w-[45%] h-[250px] md:h-[300px] lg:h-[350px]">
            {/* Aquí irá tu imagen de la laptop PNG */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BottomBodySection;