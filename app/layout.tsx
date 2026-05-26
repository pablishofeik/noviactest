// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Puedes cambiar a tu fuente preferida
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      {/* Aplicamos el color de fondo oscuro global a la etiqueta body */}
      <body className={`${inter.className} bg-[#05070a] text-white min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}