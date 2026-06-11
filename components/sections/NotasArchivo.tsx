"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { columnas } from "@/lib/constants/columnas";
import { useColumnaModal } from "@/components/shared/ColumnaModal";

const PER_PAGE = 6;

const medioStyle: Record<string, { bg: string; text: string; tag: string }> = {
  Infobae: { bg: "bg-[#3F69BE]", text: "text-white", tag: "#3F69BE" },
  "La Nación": { bg: "bg-ink", text: "text-white", tag: "#1A1A1A" },
  Ohlalá: { bg: "bg-[#D43F86]", text: "text-white", tag: "#D43F86" },
};

const fondos: Record<string, string> = {
  Infobae: "/images/eventos/infobae.jpg",
  "La Nación": "/images/eventos/columna-ln.jpg",
  Ohlalá: "/images/eventos/toma-decisiones.jpg",
};

const filtros = ["Todas", "Infobae", "La Nación", "Ohlalá"] as const;
type Filtro = (typeof filtros)[number];

export default function NotasArchivo() {
  const { open } = useColumnaModal();
  const [filtro, setFiltro] = useState<Filtro>("Todas");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtradas = useMemo(() => {
    let list = columnas;
    if (filtro !== "Todas") list = list.filter((c) => c.medio === filtro);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) => c.titulo.toLowerCase().includes(q) || c.bajada.toLowerCase().includes(q),
      );
    }
    return list;
  }, [filtro, query]);

  const totalPages = Math.max(1, Math.ceil(filtradas.length / PER_PAGE));
  const pageItems = filtradas.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="container max-w-[1320px]">
        {/* Toolbar */}
        <div className="mb-12 grid md:grid-cols-2 gap-4 items-end">
          <div className="flex flex-wrap items-center gap-2">
            {filtros.map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFiltro(f);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-widewide transition-all ${
                  filtro === f
                    ? "bg-light text-ink"
                    : "bg-bgCard text-light/70 hover:bg-bgSoft hover:text-light border border-line"
                }`}
              >
                {f}
                <span className={`ml-2 text-[10px] opacity-65`}>
                  {f === "Todas" ? columnas.length : columnas.filter((c) => c.medio === f).length}
                </span>
              </button>
            ))}
          </div>

          <div className="relative md:justify-self-end w-full md:max-w-[360px]">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-light/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Buscar en notas..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-bgCard border border-line text-[14px] text-light placeholder:text-light/40 focus:border-light/40 focus:bg-bgSoft focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Resultados */}
        {pageItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-light/60 text-[16px] mb-4">No encontré columnas con ese filtro.</p>
            <button
              onClick={() => {
                setFiltro("Todas");
                setQuery("");
                setPage(1);
              }}
              className="inline-flex items-center px-5 py-2.5 rounded-full btn-pill-outline-light text-[12.5px]"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${filtro}-${page}-${query}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {pageItems.map((col, i) => {
                const style = medioStyle[col.medio];
                return (
                  <motion.button
                    key={col.titulo}
                    type="button"
                    onClick={() => open(col)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group text-left bg-bgCard hover:bg-bgSoft border border-line hover:border-violet/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    aria-label={`Leer ${col.titulo}`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={fondos[col.medio]}
                        alt={col.medio}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className={`absolute inset-0 ${style.bg} opacity-55 mix-blend-multiply`} />
                      <span className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded ${style.bg} ${style.text} text-[10px] font-bold uppercase tracking-widewide`}>
                        {col.medio}
                      </span>
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-bg/70 backdrop-blur text-light text-[10px] font-bold uppercase tracking-widewide border border-white/15">
                        <Clock size={10} />
                        {col.cuerpo.length} min
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-light text-[18px] md:text-[19px] font-semibold leading-[1.2] tracking-tightmid mb-3 line-clamp-2 group-hover:text-violetSoft transition-colors">
                        {col.titulo}
                      </h3>
                      <p className="text-[13.5px] text-light/65 leading-[1.55] line-clamp-3 mb-5">
                        {col.bajada}
                      </p>
                      <p className="inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-widewide text-violetSoft group-hover:text-light">
                        Leer columna
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widewide text-light border border-line hover:bg-bgCard transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-full text-[13px] font-bold transition-colors ${
                  page === i + 1 ? "bg-light text-ink" : "text-light/65 hover:bg-bgCard hover:text-light"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widewide text-light border border-line hover:bg-bgCard transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Siguiente →
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-[12px] text-light/55">
          Mostrando {pageItems.length} de {filtradas.length} {filtradas.length === 1 ? "columna" : "columnas"}
        </p>
      </div>
    </section>
  );
}
