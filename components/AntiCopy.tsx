// components/AntiCopy.tsx
"use client";

import { useEffect } from 'react';

export default function AntiCopy() {
  useEffect(() => {
    // Bloquear clic derecho (menú contextual)
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    
    // Bloquear atajos de teclado comunes para DevTools y ver código fuente
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' || // F12 normal
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Windows/Linux: Ctrl+Shift+I
        (e.ctrlKey && e.key === 'U') || // Windows/Linux: Ctrl+U (Ver código fuente)
        (e.metaKey && e.altKey && e.key === 'I') || // Mac: Cmd+Option+I
        (e.metaKey && e.altKey && e.key === 'U')    // Mac: Cmd+Option+U
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Limpieza del evento si el componente se desmonta
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // Es un componente invisible, no renderiza nada en el DOM
}