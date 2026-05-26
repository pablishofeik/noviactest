// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#05070a] border-b border-white/5">
      
      {/* 1. Logo de la empresa */}
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="text-2xl font-bold tracking-wide text-white">NOVACTI</span>
        {/* Icono orbital SVG (Aproximación del logo de la imagen) */}
        <svg 
          className="w-8 h-8 text-cyan-500" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <circle cx="12" cy="4" r="2" fill="currentColor"/>
          <circle cx="20" cy="12" r="2" fill="currentColor"/>
          <circle cx="12" cy="20" r="2" fill="currentColor"/>
          <circle cx="4" cy="12" r="2" fill="currentColor"/>
        </svg>
      </div>

      {/* 2. 5 Opciones Desplegables (Links centrales) */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="#producto" className="hover:text-white transition-colors">Producto</Link>
        <Link href="#agentes" className="hover:text-white transition-colors">Agentes IA</Link>
        <Link href="#soluciones" className="hover:text-white transition-colors">Soluciones</Link>
        <Link href="#recursos" className="hover:text-white transition-colors">Recursos</Link>
        <Link href="#precios" className="hover:text-white transition-colors">Precios</Link>
      </div>

      {/* 3 & 4. Botones de Acción (Derecha) */}
      <div className="flex items-center gap-6">
        <Link 
          href="#login" 
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
        >
          Iniciar sesión
        </Link>
        <Link 
          href="#demo" 
          className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md hover:opacity-90 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
        >
          Agenda una demo
        </Link>
      </div>
      
    </nav>
  );
}