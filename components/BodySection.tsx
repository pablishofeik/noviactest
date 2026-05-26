// components/BodyTopSection.tsx
import React, { FC } from 'react';
import Image from 'next/image';

// --- ICONOS DE INTEGRACIONES EN SVG PURO ---
const WhatsAppLogo = () => (
  <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.528 1.975 14.061.947 11.5.947c-5.438 0-9.864 4.37-9.868 9.801-.001 1.77.463 3.5 1.34 5.032L1.87 22.13l6.516-1.704l-1.74-.272z"/></svg>
);
const GmailLogo = () => (
  <svg className="w-5 h-5 text-[#EA4335] fill-current" viewBox="0 0 24 24"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.5L12 14L3 7.5V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.85.65-1.5 1.5-1.5H3l9 6.5l9-6.5h1.5c.85 0 1.5.65 1.5 1.5z"/></svg>
);
const SlackLogo = () => (
  <svg className="w-5 h-5 text-[#4A154B] fill-current" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM15.165 5.042a2.528 2.528 0 0 1 2.523-2.52 2.528 2.528 0 0 1 2.523 2.522v2.52h-2.523a2.528 2.528 0 0 1-2.523-2.522zm0 1.261a2.528 2.528 0 0 1 2.523 2.52v5.043a2.528 2.528 0 0 1-2.523 2.522H10.12a2.528 2.528 0 0 1-2.522-2.522V8.823a2.528 2.528 0 0 1 2.522-2.52h5.043z"/></svg>
);
const CRMLogo = () => (
  <svg className="w-5 h-5 text-[#00A1E0] fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
);
const DriveLogo = () => (
  <svg className="w-5 h-5 text-[#34A853] fill-current" viewBox="0 0 24 24"><path d="M19.43 12.98l-6.73-11.53c-.32-.56-.92-.9-1.57-.9h-1.4c-.65 0-1.25.34-1.57.9L1.44 12.98c-.32.56-.32 1.24 0 1.8l3.12 5.34c.32.56.92.9 1.57.9h11.41c.65 0 1.25-.34 1.57-.9l3.12-5.34c.32-.56.32-1.24 0-1.8z"/></svg>
);
const NotionLogo = () => (
  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M4.222 2.111v19.778H19.78V2.111H4.222zm1.412 1.412h12.734v3.313l-2.01-.893-3.791 5.674l3.155 4.604h-1.713l-2.502-3.882-2.316 3.882H7.203l3.525-5.362L6.877 6.643l1.83.693l2.457-3.813H5.634z"/></svg>
);
const CalendarLogo = () => (
  <svg className="w-5 h-5 text-[#4285F4] fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

interface BodyTopSectionProps {
  className?: string;
}

const BodyTopSection: FC<BodyTopSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-[#05070a] text-white py-20 px-6 lg:px-16 ${className}`}>
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
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.2)]">
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

              {/* SUB-COLUMNA 2 (Centro vacío para respetar la imagen de los robots) */}
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
          
          {/* ================= BARRA INFERIOR DE INTEGRACIONES (Alineación exacta) ================= */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs border-t border-gray-800/80 pt-6">
            <div className="flex items-center gap-2 text-gray-400"><WhatsAppLogo /> <span className="text-gray-300 font-medium">WhatsApp</span></div>
            <div className="flex items-center gap-2 text-gray-400"><GmailLogo /> <span className="text-gray-300 font-medium">Gmail</span></div>
            <div className="flex items-center gap-2 text-gray-400"><SlackLogo /> <span className="text-gray-300 font-medium">Slack</span></div>
            <div className="flex items-center gap-2 text-gray-400"><CRMLogo /> <span className="text-gray-300 font-medium">CRM</span></div>
            <div className="flex items-center gap-2 text-gray-400"><DriveLogo /> <span className="text-gray-300 font-medium">Google Drive</span></div>
            <div className="flex items-center gap-2 text-gray-400"><NotionLogo /> <span className="text-gray-300 font-medium">Notion</span></div>
            <div className="flex items-center gap-2 text-gray-400"><CalendarLogo /> <span className="text-gray-300 font-medium">Calendarios</span></div>
            
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