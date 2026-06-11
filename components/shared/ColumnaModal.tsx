"use client";

import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react";
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
  const [readProgress, setReadProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!col) {
      setReadProgress(0);
      return;
    }

    // Lock body scroll while preserving position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setCol(null);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(y || "0", 10) * -1);
      window.removeEventListener("keydown", onKey);
    };
  }, [col]);

  function onScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setReadProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
  }

  return (
    <ColumnaModalContext.Provider value={{ open: setCol, close: () => setCol(null) }}>
      {children}

      <AnimatePresence>
        {col && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-end md:items-center justify-center md:p-6"
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
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:max-w-[880px] h-[92vh] md:h-auto md:max-h-[90vh] bg-light text-ink rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col shadow-hover"
            >
              {/* Drag handle mobile */}
              <div className="md:hidden flex justify-center pt-3 pb-1 bg-light">
                <span className="block w-10 h-1 rounded-full bg-ink/15" />
              </div>

              {/* Header sticky */}
              <header className="px-5 md:px-10 py-4 md:py-5 border-b border-lineLight flex items-center justify-between gap-4 bg-light/95 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[10.5px] font-bold uppercase tracking-widewide ${medioStyle[col.medio]}`}>
                    {col.medio}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-ink3">
                    <Clock size={11} />
                    {col.cuerpo.length}-{col.cuerpo.length + 1} min
                  </span>
                  {col.fecha && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-ink3">
                      <Calendar size={11} />
                      {col.fecha}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setCol(null)}
                  aria-label="Cerrar"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lightWarm hover:bg-lineLight text-ink transition-colors shrink-0"
                >
                  <X size={18} strokeWidth={2.4} />
                </button>
              </header>

              {/* Reading progress bar */}
              <div className="relative h-0.5 bg-lineLight shrink-0">
                <div
                  className="absolute inset-y-0 left-0 bg-violet origin-left"
                  style={{ transform: `scaleX(${readProgress})`, transition: "transform 0.15s linear" }}
                />
              </div>

              {/* Scrollable body */}
              <div
                ref={scrollRef}
                onScroll={onScroll}
                className="overflow-y-auto overscroll-contain flex-1 px-5 md:px-12 py-8 md:py-12"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-semibold text-[clamp(24px,4vw,52px)] tracking-tightest leading-[1.05] mb-5 md:mb-6 text-balance"
                >
                  {col.titulo}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  className="font-serif italic text-[17px] md:text-[22px] text-ink2 leading-[1.5] mb-8 md:mb-10 max-w-2xl pb-6 md:pb-8 border-b border-lineLight"
                >
                  {col.bajada}
                </motion.p>

                <div className="space-y-5 md:space-y-6 max-w-[680px]">
                  {col.cuerpo.map((parrafo, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                      className="text-[16px] md:text-[17.5px] text-ink leading-[1.75]"
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
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink text-light text-[12px] font-bold shrink-0">
                    AC
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-ink leading-tight">Andrea Churba</p>
                    <p className="text-[11.5px] text-ink3 mt-0.5">Psicóloga · Coach de líderes · Autora</p>
                  </div>
                </motion.div>

                {/* CTA para ver original */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 md:mt-10 p-5 md:p-7 rounded-2xl bg-lightSoft border border-lineLight"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widewide text-ink3 mb-1">
                        ¿Querés ver la versión original?
                      </p>
                      <p className="text-[14.5px] md:text-[15px] text-ink leading-tight">
                        Esta columna fue publicada en <span className="font-semibold">{col.medio}</span>
                        {col.fecha && <span> · {col.fecha}</span>}.
                      </p>
                    </div>
                    <a
                      href={col.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-fit px-5 py-3 rounded-full btn-pill-dark text-[12.5px]"
                    >
                      Ver en {col.medio}
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </motion.div>

                {/* Bottom CTAs */}
                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  <a
                    href="/#contacto"
                    onClick={() => setCol(null)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-violet text-light hover:bg-violetDeep text-[13px] font-semibold transition-colors"
                  >
                    Trabajemos juntos
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="/#libros"
                    onClick={() => setCol(null)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl border border-lineLight text-ink hover:bg-lightSoft text-[13px] font-semibold transition-colors"
                  >
                    Ver mis libros
                  </a>
                </div>

                {/* Spacer bottom for breathing room */}
                <div className="h-6" />
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </ColumnaModalContext.Provider>
  );
}
