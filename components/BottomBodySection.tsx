// components/BottomBodySection.tsx
import React, { FC } from 'react';
import Image from 'next/image';

interface BottomBodySectionProps {
  className?: string;
}

const BottomBodySection: FC<BottomBodySectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#020408] py-12 px-6 lg:px-16 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Contenedor principal: Más delgado, bordes sutiles, fondo ultra oscuro */}
        <div className="relative w-full rounded-[24px] border border-[#1e3a8a]/40 bg-[#030712] overflow-hidden flex flex-col lg:flex-row items-center shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)]">
          
          {/* ================= FONDO DE RED (Constellation/Network) ================= */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            {/* Imagen abstracta de nodos/red tecnológica. Usando mix-blend para que solo el brillo azul sobreviva */}
            <Image 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
              alt="Network Background"
              fill
              className="object-cover mix-blend-screen"
            />
            {/* Máscara de gradiente: Oscurece los bordes y el lado de la laptop para que no estorbe */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/50 via-[#030712]/80 to-[#030712]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
          </div>

          {/* Luz de acento sutil detrás del texto */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/5 blur-[120px] pointer-events-none z-0" />

          {/* ================= COLUMNA IZQUIERDA: CONTENIDO Y CTA ================= */}
          {/* Reducción de padding para un banner más esbelto */}
          <div className="relative z-10 w-full lg:w-[55%] p-8 md:p-12 lg:p-14 flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-4">
              Tu próximo gran avance empieza hoy.
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-8 max-w-[420px] font-light leading-relaxed">
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
          {/* Ajuste de altura a 350px para mantener la tarjeta delgada. */}
          <div className="relative z-10 w-full lg:w-[45%] h-[250px] md:h-[300px] lg:h-[350px]">
            {/* NOTA IMPORTANTE: Aquí estoy usando una imagen PNG con fondo 100% transparente de Wikimedia.
              Esto es exactamente lo que debes hacer con tu render de "Laptop + Taza".
              El `object-contain` y `object-right-bottom` asegura que se asiente en la base de la tarjeta.
            */}
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default BottomBodySection;