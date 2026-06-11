"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { columnas } from "@/lib/constants/columnas";
import { useColumnaModal } from "@/components/shared/ColumnaModal";

const medioStyle: Record<string, { bg: string; text: string }> = {
  Infobae: { bg: "bg-[#3F69BE]", text: "text-white" },
  "La Nación": { bg: "bg-ink", text: "text-white" },
  Ohlalá: { bg: "bg-[#D43F86]", text: "text-white" },
};

const fondos: Record<string, string> = {
  Infobae: "/images/eventos/infobae.jpg",
  "La Nación": "/images/eventos/columna-ln.jpg",
  Ohlalá: "/images/eventos/toma-decisiones.jpg",
};

export default function ColumnasSection() {
  const { open } = useColumnaModal();
  const destacada = columnas[0];
  const resto = columnas.slice(1);

  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10 md:mb-14 grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-light" />
              En los medios
            </p>
            <h2 className="text-light text-[clamp(32px,4.5vw,56px)] font-semibold tracking-tightest leading-[1.05]">
              Lo que escribo en los diarios.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15.5px] text-light/75 leading-[1.6] max-w-md">
            Columnas regulares en <span className="text-light font-semibold">Infobae</span>, <span className="text-light font-semibold">La Nación</span> y <span className="text-light font-semibold">Ohlalá</span>. Tocá cualquiera para leerla acá mismo.
          </p>
        </motion.div>

        {/* Columna destacada — formato landscape grande */}
        <motion.button
          type="button"
          onClick={() => open(destacada)}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative block w-full rounded-2xl md:rounded-3xl overflow-hidden mb-5 bg-bgCard text-left"
          aria-label={`Leer ${destacada.titulo}`}
        >
          <div className="grid md:grid-cols-12 min-h-[280px] md:min-h-[340px]">
            <div className="relative md:col-span-5 aspect-[16/10] md:aspect-auto overflow-hidden">
              <Image
                src={fondos[destacada.medio]}
                alt={destacada.medio}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className={`object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000`}
              />
              <div className={`absolute inset-0 ${medioStyle[destacada.medio].bg} opacity-60 mix-blend-multiply`} />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-md ${medioStyle[destacada.medio].bg} ${medioStyle[destacada.medio].text} text-[10.5px] font-bold uppercase tracking-widewide`}>
                  {destacada.medio}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-light/15 backdrop-blur text-light text-[10.5px] font-bold uppercase tracking-widewide border border-white/20">
                  ★ Destacada
                </span>
              </div>
            </div>

            <div className="md:col-span-7 p-7 md:p-10 lg:p-12 flex flex-col justify-between text-light">
              <div>
                <h3 className="text-[clamp(22px,3vw,40px)] font-semibold tracking-tightest leading-[1.05] text-balance mb-5 group-hover:text-violetSoft transition-colors">
                  {destacada.titulo}
                </h3>
                <p className="text-[15px] text-light/75 leading-[1.6] max-w-2xl line-clamp-3 md:line-clamp-4">
                  {destacada.bajada}
                </p>
              </div>
              <div className="mt-7 flex items-center justify-between pt-6 border-t border-light/15 flex-wrap gap-3">
                <div className="flex items-center gap-3 text-light/65 text-[12.5px]">
                  <Clock size={13} />
                  <span>{destacada.cuerpo.length}-{destacada.cuerpo.length + 1} min de lectura</span>
                  {destacada.fecha && <span>· {destacada.fecha}</span>}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widewide text-light">
                  Leer columna
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Resto — formato horizontal compacto en 2 columnas */}
        <div className="grid sm:grid-cols-2 gap-5">
          {resto.map((col, i) => (
            <motion.button
              key={col.titulo}
              type="button"
              onClick={() => open(col)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-stretch gap-4 p-4 rounded-2xl bg-bgCard hover:bg-bgSoft border border-line hover:border-violet/30 transition-all duration-500 text-left"
              aria-label={`Leer ${col.titulo}`}
            >
              <div className="relative shrink-0 w-[120px] sm:w-[140px] rounded-xl overflow-hidden bg-bgSoft">
                <Image
                  src={fondos[col.medio]}
                  alt={col.medio}
                  fill
                  sizes="160px"
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className={`absolute inset-0 ${medioStyle[col.medio].bg} opacity-55 mix-blend-multiply`} />
                <span className={`absolute bottom-2 left-2 inline-flex items-center px-2 py-1 rounded ${medioStyle[col.medio].bg} ${medioStyle[col.medio].text} text-[9px] font-bold uppercase tracking-widewide`}>
                  {col.medio}
                </span>
              </div>

              <div className="flex flex-col flex-1 min-w-0 py-1">
                <h3 className="text-light text-[16px] md:text-[17px] font-semibold leading-[1.2] tracking-tightmid mb-2 line-clamp-2 group-hover:text-violetSoft transition-colors">
                  {col.titulo}
                </h3>
                <p className="text-[13px] text-light/65 leading-[1.5] line-clamp-2 mb-auto">
                  {col.bajada}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-bold uppercase tracking-widewide text-light/55">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={11} />
                    {col.cuerpo.length} min
                  </span>
                  <ArrowUpRight size={14} className="text-light/55 group-hover:text-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
