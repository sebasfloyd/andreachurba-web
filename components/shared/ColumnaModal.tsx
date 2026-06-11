"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, ExternalLink, Clock, Calendar } from "lucide-react";
import type { Columna } from "@/lib/constants/columnas";

type Ctx = {
  open: (c: Columna) => void;
  close: () => void;
};

const ColumnaModalContext = createContext<Ctx | null>(null);

export function useColumnaModal() {
  const ctx = useContext(ColumnaModalContext);
  if (!ctx) throw new Error("useColumnaModal must be used within ColumnaModalProvider");
  return ctx;
}

const medioStyle: Record<string, string> = {
  Infobae: "bg-[#3F69BE] text-white",
  "La Nación": "bg-ink text-white",
  Ohlalá: "bg-[#D43F86] text-white",
};

export default function ColumnaModalProvider({ children }: { children: ReactNode }) {
  const [col, setCol] = useState<Columna | null>(null);

  useEffect(() => {
    if (!col) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setCol(null);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [col]);

  return (
    <ColumnaModalContext.Provider value={{ open: setCol, close: () => setCol(null) }}>
      {children}

      <AnimatePresence>
        {col && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-6"
            style={{
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            onClick={() => setCol(null)}
            role="dialog"
            aria-modal="true"
            aria-label={col.titulo}
          >
            <motion.article
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[880px] max-h-[94vh] md:max-h-[90vh] bg-light text-ink rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col shadow-hover"
            >
              {/* Header sticky */}
              <div className="px-7 md:px-10 py-5 border-b border-lineLight flex items-center justify-between gap-4 sticky top-0 bg-light/95 backdrop-blur-md z-10">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[10.5px] font-bold uppercase tracking-widewide ${medioStyle[col.medio]}`}>
                    {col.medio}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink3">
                    <Clock size={11} />
                    {col.cuerpo.length}-{col.cuerpo.length + 1} min
                  </span>
                  {col.fecha && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink3">
                      <Calendar size={11} />
                      {col.fecha}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setCol(null)}
                  aria-label="Cerrar"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lightWarm hover:bg-lineLight text-ink transition-colors"
                >
                  <X size={18} strokeWidth={2.4} />
                </button>
              </div>

              <div className="overflow-y-auto px-7 md:px-12 py-8 md:py-12">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-semibold text-[clamp(28px,4vw,52px)] tracking-tightest leading-[1.05] mb-6 text-balance"
                >
                  {col.titulo}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  className="font-serif italic text-[19px] md:text-[22px] text-ink2 leading-[1.5] mb-10 max-w-2xl pb-8 border-b border-lineLight"
                >
                  {col.bajada}
                </motion.p>

                <div className="space-y-6 max-w-[680px]">
                  {col.cuerpo.map((parrafo, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                      className="text-[16.5px] md:text-[17.5px] text-ink leading-[1.75]"
                    >
                      {parrafo}
                    </motion.p>
                  ))}
                </div>

                {/* Andrea signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-10 pt-7 border-t border-lineLight flex items-center gap-3"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink text-light text-[12px] font-bold">
                    AC
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-ink leading-tight">Andrea Churba</p>
                    <p className="text-[11.5px] text-ink3 mt-0.5">Psicóloga · Coach de líderes · Autora</p>
                  </div>
                </motion.div>

                {/* Footer con CTA al medio externo */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-10 p-6 md:p-8 rounded-2xl bg-lightSoft border border-lineLight"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widewide text-ink3 mb-1">
                        ¿Querés ver la versión original?
                      </p>
                      <p className="text-[15px] text-ink leading-tight">
                        Esta columna fue publicada en <span className="font-semibold">{col.medio}</span>
                        {col.fecha && <span> · {col.fecha}</span>}.
                      </p>
                    </div>
                    <a
                      href={col.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-pill-dark text-[13px] shrink-0"
                    >
                      Ver en {col.medio}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>

                {/* Bottom CTAs */}
                <div className="mt-10 grid sm:grid-cols-2 gap-3">
                  <a
                    href="#contacto"
                    onClick={() => setCol(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-violet text-light hover:bg-violetDeep text-[13.5px] font-semibold transition-colors"
                  >
                    Trabajemos juntas
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href="#libros"
                    onClick={() => setCol(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-lineLight text-ink hover:bg-lightSoft text-[13.5px] font-semibold transition-colors"
                  >
                    Ver mis libros
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </ColumnaModalContext.Provider>
  );
}
