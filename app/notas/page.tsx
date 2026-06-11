import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import NotasArchivo from "@/components/sections/NotasArchivo";
import { columnas } from "@/lib/constants/columnas";

export const metadata: Metadata = {
  title: "Notas — Columnas de Andrea Churba",
  description: "Archivo completo de columnas y notas escritas por Andrea Churba para Infobae, La Nación y Ohlalá. Ideas sobre liderazgo, cambio cultural y relato identitario.",
  openGraph: {
    title: "Notas — Andrea Churba",
    description: "Columnas en Infobae, La Nación y Ohlalá.",
  },
};

export default function NotasPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg">
        <section className="container max-w-[1320px] py-12 md:py-20 border-b border-line">
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-light" />
            Archivo de columnas
          </p>
          <h1 className="text-light text-[clamp(36px,6vw,80px)] font-semibold tracking-tightest leading-[1.02] mb-6 max-w-3xl">
            Notas y columnas.
          </h1>
          <p className="text-[16.5px] md:text-[18px] text-light/80 leading-[1.55] max-w-2xl">
            Todas las columnas que escribí para <span className="text-light font-semibold">Infobae</span>, <span className="text-light font-semibold">La Nación</span> y <span className="text-light font-semibold">Ohlalá</span>. Filtrá por medio o categoría, y tocá cualquier nota para leerla acá mismo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-[12.5px] font-bold uppercase tracking-widewide text-light/65">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3F69BE]" />
              Infobae · {columnas.filter((c) => c.medio === "Infobae").length} notas
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-light" />
              La Nación · {columnas.filter((c) => c.medio === "La Nación").length} notas
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D43F86]" />
              Ohlalá · {columnas.filter((c) => c.medio === "Ohlalá").length} notas
            </span>
          </div>
        </section>

        <NotasArchivo />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
