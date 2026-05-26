// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Puedes cambiar a tu fuente preferida
import "./globals.css";
import Navbar from "@/components/Navbar";
import AntiCopy from "@/components/AntiCopy"; // <-- 1. Importamos la protección

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOVACTI | El futuro del trabajo ya está aquí",
  description: "Agentes IA inteligentes que trabajan 24/7 para impulsar tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 2. Añadimos 'select-none' al final de las clases del body*/}
      <body className={`${inter.className} bg-[#05070a] text-white min-h-screen select-none`}>
        <AntiCopy /> {/* <-- 3. Inyectamos el script invisible */}
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}