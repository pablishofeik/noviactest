// components/BodyTopSection.tsx
import React, { FC } from 'react';
import Image from 'next/image';

// --- DATOS DE LAS INTEGRACIONES CON LOGOS ORIGINALES (A TODO COLOR) ---
const integrationTools = [
  { name: 'WhatsApp', icon: 'https://www.svgrepo.com/show/354560/whatsapp.svg' },
  { name: 'Gmail', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
  { name: 'Slack', icon: 'https://www.svgrepo.com/show/448248/slack.svg' },
  { name: 'CRM', icon: 'https://www.svgrepo.com/show/303235/salesforce-2-logo.svg' },
  { name: 'Google Drive', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png' },
  // Notion es naturalmente negro, le aplicamos un filtro invertido en el renderizado para que sea blanco puro
  { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Calendarios', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
];

interface BodyTopSectionProps {
  className?: string;
}

const BodyTopSection: FC<BodyTopSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#05070a] text-white py-8 px-6 lg:px-10 ${className}`}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ================= COLUMNA IZQUIERDA: TEXTO Y BENEFICIOS ================= */}
        <div className="space-y-6 lg:col-span-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#06b6d4]">AGENTES IA</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            El futuro del trabajo ya está aquí
          </h2>
          <p className="text-gray-400 font-light text-base leading-relaxed">
            Entrena agentes inteligentes con los procesos de tu empresa y deja que trabajen contigo. No son chatbots. Son tu nuevo equipo.
          </p>
          
          <ul className="space-y-3.5 pt-2 text-gray-300 text-sm font-medium">
            {[
              "Entrenados con tus documentos y procesos",
              "Se integran con tus herramientas",
              "Aprenden, mejoran y escalan contigo",
              "Trabajan 24/7 sin interrupciones",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.2)] shrink-0">
                  <svg className="w-3 h-3 text-[#2563eb]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-4">
            <button className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-semibold py-3.5 px-8 rounded-xl text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
              Conoce más
            </button>
          </div>
        </div>
        
        {/* ================= COLUMNA DERECHA: MONITOR INTELIGENTE CON REJILLA ================= */}
        <div className="lg:col-span-8 w-full">
          {/* Contenedor Principal del Monitor */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-auto lg:h-[480px] bg-[#090d14] border border-gray-800 rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
            
            {/* Imagen del Render de Oficina e Inteligencias en el centro */}
            <div className="absolute inset-0 z-0">
             <Image 
                src="https://marketplace.innovaciondespachos.com/community/blog/media/marketplace-tecnologico-para-despachos-profesionales.myshopify.com/Post/featured_img/Gemini_Generated_Image_ufbl8fufbl8fufbl.png" 
                alt="Oficina moderna"
                fill
                className="object-cover w-full h-full rounded-2xl" 
                sizes="(max-w-1024px) 100vw, 60vw"
              />
              {/* Capas de degradado reforzadas para oscurecer los laterales y que los textos se lean perfectos sobre imagen 100% visible */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#090d14] via-[#090d14]/80 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#090d14] via-[#090d14]/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#090d14] to-transparent" />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* REJILLA DE REVESTIMIENTO: Divide el área en 3 columnas perfectas */}
            <div className="absolute inset-0 z-10 grid grid-cols-12 p-6 md:p-8 h-full">
              
              {/* SUB-COLUMNA 1 (Métricas Azules - Izquierda) */}
              <div className="col-span-4 md:col-span-3 flex flex-col justify-between items-start h-full text-[#3b82f6]">
                {[
                  { text: "Disponibles 24/7", path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { text: "Más eficiencia", path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                  { text: "Menos costos", path: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" },
                  { text: "Escalabilidad ilimitada", path: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" },
                  { text: "Consistencia y calidad", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-900/20 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.3)] shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                      </svg>
                    </div>
                    <span className="text-[11px] md:text-xs font-semibold text-gray-200 tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* SUB-COLUMNA 2 (Centro vacío) */}
              <div className="col-span-4 md:col-span-6" />

              {/* SUB-COLUMNA 3 (Departamentos Verdes - Derecha) */}
              <div className="col-span-4 md:col-span-3 flex flex-col justify-between items-end h-full text-[#10b981]">
                {[
                  { text: "Legal", path: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2" },
                  { text: "RRHH", path: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" },
                  { text: "Atención al cliente", path: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536" },
                  { text: "Ventas", path: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6" },
                  { text: "Operaciones", path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066" },
                  { text: "Marketing", path: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 flex-row-reverse">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-900/20 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.3)] shrink-0">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                      </svg>
                    </div>
                    <span className="text-[11px] md:text-xs font-semibold text-gray-200 tracking-wide text-right">{item.text}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
          
          {/* ================= BARRA INFERIOR DE INTEGRACIONES (Nuevos Logos Oficiales) ================= */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs border-t border-gray-800/80 pt-6">
            {integrationTools.map((tool, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} Logo`} 
                  className={`w-5 h-5 object-contain `} 
                  loading="lazy"
                />
                <span className="text-gray-300 font-medium">{tool.name}</span>
              </div>
            ))}
            
            <a href="#integraciones" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors ml-2">
              + Más integraciones
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BodyTopSection;