"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Play, ArrowUpRight } from "lucide-react";
import { useVideoModal } from "@/components/shared/VideoModal";

const citas = [
  {
    text: "Voy muy a fondo, muy profundo cuando trabajo con las personas. Y logro cambios sostenibles en el tiempo.",
    fuente: "Programa 23 NEXXO",
    ano: "2025",
    contexto: "Sobre el método Business Therapy",
    videoId: "B2oudjMoTVE",
    accent: "violet",
  },
  {
    text: "El proceso de cambio necesita digestión. Y a veces esa digestión es lenta.",
    fuente: "NEXXO",
    ano: "2025",
    contexto: "Sobre los tiempos del cambio real",
    videoId: "B2oudjMoTVE",
    accent: "blueTR",
  },
  {
    text: "Antes de liderar a otros, hay un trabajo que es íntimo. Ese trabajo lo tenés que hacer vos, con vos.",
    fuente: "Lidera tu propio cambio",
    ano: "Granica",
    contexto: "Capítulo sobre liderazgo personal",
    accent: "orange",
  },
  {
    text: "El contexto cambia y nosotros seguimos contándonos lo de antes. El cambio empieza cuando se cierra ese desfasaje.",
    fuente: "TEDx Barrio San Nicolás",
    ano: "2022",
    contexto: "Identidad y relato — Había una vez yo",
    videoId: "WHAibWX22mw",
    accent: "ink",
  },
];

const apariciones = [
  {
    medio: "Infobae",
    seccion: "Liderazgo y Carrera",
    titulo: "Lidera tu propio cambio — Andrea Churba",
    fecha: "Columna mensual",
    url: "https://www.infobae.com/autor/andrea-churba/",
    tipo: "Columnista",
  },
  {
    medio: "La Nación",
    seccion: "Tendencias",
    titulo: "Cuando lo que te trajo hasta acá ya no alcanza",
    fecha: "2024",
    url: "https://www.lanacion.com.ar",
    tipo: "Nota de opinión",
  },
  {
    medio: "Ohlalá",
    seccion: "Trabajo y Liderazgo",
    titulo: "Cinco patrones que te trabajan en tu contra",
    fecha: "2024",
    url: "https://www.ohlala.com",
    tipo: "Columna",
  },
  {
    medio: "TEDx",
    seccion: "TEDxBarrioSanNicolás",
    titulo: "Identidad y Relato — Había una vez yo",
    fecha: "2022",
    url: "https://www.youtube.com/watch?v=WHAibWX22mw",
    tipo: "Charla",
    videoId: "WHAibWX22mw",
  },
];

const accentMap = {
  violet: { bg: "bg-violet" },
  blueTR: { bg: "bg-blueTR" },
  orange: { bg: "bg-orange" },
  ink: { bg: "bg-ink" },
};

export default function EditorialEssaySection() {
  const { open } = useVideoModal();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % citas.length);
    }, 7500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, idx]);

  const c = citas[idx];
  const accent = accentMap[c.accent as keyof typeof accentMap];

  function go(dir: 1 | -1) {
    setIdx((i) => (i + dir + citas.length) % citas.length);
  }

  return (
    <section className="bg-light text-ink py-20 md:py-32">
      <div className="container max-w-[1440px]">
        {/* CITA EDITORIAL — card hero rotativa */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mb-16 md:mb-24"
        >
          <div className="max-w-3xl mb-10 md:mb-14">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              En sus propias palabras
            </p>
            <h2 className="text-ink text-[clamp(26px,4.5vw,56px)] font-semibold tracking-tightest leading-[1.04]">
              Ideas que repite porque las sostiene.
            </h2>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            <div className="lg:col-span-4 relative rounded-2xl md:rounded-3xl overflow-hidden bg-lightWarm aspect-[4/3] lg:aspect-auto lg:min-h-[460px]">
              <Image
                src="/images/andrea/andrea-bw.jpg"
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={`accent-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  aria-hidden
                  className={`absolute inset-0 ${accent.bg} mix-blend-multiply opacity-60`}
                />
              </AnimatePresence>
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
              />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-light">
                <div className="flex items-start justify-between">
                  <Quote size={36} className="text-light/80" strokeWidth={1.5} />
                  <span className="text-[10.5px] font-bold uppercase tracking-widewide text-light/85">
                    {String(idx + 1).padStart(2, "0")} / {String(citas.length).padStart(2, "0")}
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`meta-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-1.5">
                      {c.fuente} · {c.ano}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-light/90 leading-[1.4] max-w-[280px]" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
                      {c.contexto}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-8 relative rounded-2xl md:rounded-3xl bg-lightSoft border border-lineLight p-7 md:p-12 lg:p-16 flex flex-col justify-between min-h-[360px] lg:min-h-[460px] overflow-hidden">
              <div className="flex-1 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={`q-${idx}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif italic text-ink text-[clamp(22px,3.4vw,46px)] leading-[1.18] tracking-tightmid text-balance"
                  >
                    &ldquo;{c.text}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="mt-8 md:mt-10 pt-6 border-t border-lineLight flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Cita anterior"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-lineLight hover:bg-light hover:border-ink text-ink transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Cita siguiente"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-lineLight hover:bg-light hover:border-ink text-ink transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <div className="flex items-center gap-1.5 ml-3">
                    {citas.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIdx(i)}
                        aria-label={`Cita ${i + 1}`}
                        className="group relative h-1.5 transition-all"
                        style={{ width: i === idx ? 32 : 14 }}
                      >
                        <span
                          className={`block w-full h-full rounded-full transition-colors ${
                            i === idx ? "bg-ink" : "bg-ink/25 group-hover:bg-ink/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {c.videoId && (
                  <button
                    onClick={() => open({ videoId: c.videoId!, title: c.fuente })}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-light text-[11.5px] font-bold uppercase tracking-widewide hover:bg-violetDeep transition-colors"
                  >
                    <Play size={12} fill="currentColor" strokeWidth={0} />
                    Mirar la charla
                  </button>
                )}
              </div>

              <div className="absolute left-0 right-0 bottom-0 h-[3px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {!paused && (
                    <motion.span
                      key={`progress-${idx}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 7.5, ease: "linear" }}
                      className={`block h-full ${accent.bg} origin-left`}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* APARICIONES EN PRENSA — estética magazine, no grid de thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-end justify-between mb-8 md:mb-10 flex-wrap gap-3">
            <div>
              <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                En medios
              </p>
              <h3 className="text-ink text-[clamp(22px,3.4vw,40px)] font-semibold tracking-tightest leading-[1.05]">
                Apariciones en prensa.
              </h3>
            </div>
            <p className="text-[12.5px] text-ink3 max-w-xs">
              Columnista en tres medios. Charlas, entrevistas, notas de opinión.
            </p>
          </div>

          <ul className="border-y border-lineLight divide-y divide-lineLight">
            {apariciones.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
              >
                {a.videoId ? (
                  <button
                    onClick={() => open({ videoId: a.videoId!, title: a.titulo })}
                    className="w-full text-left grid grid-cols-[80px_1fr_auto] md:grid-cols-[180px_1fr_auto_auto] gap-4 md:gap-8 items-center py-6 md:py-8 group hover:bg-lightSoft transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
                  >
                    <ApariciónFila a={a} />
                  </button>
                ) : (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[180px_1fr_auto_auto] gap-4 md:gap-8 items-center py-6 md:py-8 group hover:bg-lightSoft transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
                  >
                    <ApariciónFila a={a} />
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ApariciónFila({ a }: { a: (typeof apariciones)[number] }) {
  return (
    <>
      {/* Medio — tipografía editorial grande */}
      <div className="min-w-0">
        <p className="font-serif italic text-ink text-[clamp(18px,2.4vw,30px)] leading-none truncate group-hover:text-violet transition-colors">
          {a.medio}
        </p>
        <p className="hidden md:block text-[10.5px] font-bold uppercase tracking-widewide text-ink3 mt-2">
          {a.seccion}
        </p>
      </div>

      {/* Título + tipo */}
      <div className="min-w-0">
        <p className="text-[10.5px] font-bold uppercase tracking-widewide text-violet mb-1.5 md:hidden">
          {a.tipo} · {a.fecha}
        </p>
        <p className="text-ink text-[14px] md:text-[18px] font-semibold leading-[1.25] text-balance">
          {a.titulo}
        </p>
        <p className="hidden md:block text-[12.5px] text-ink3 mt-1.5">
          {a.seccion}
        </p>
      </div>

      {/* Tipo desktop */}
      <div className="hidden md:flex flex-col items-end">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violetSoft/40 text-violetDeep text-[10px] font-bold uppercase tracking-widewide whitespace-nowrap">
          {a.tipo}
        </span>
        <p className="text-[11px] text-ink3 mt-2">{a.fecha}</p>
      </div>

      {/* Arrow */}
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-lineLight text-ink2 group-hover:bg-ink group-hover:text-light group-hover:border-ink group-hover:rotate-[-12deg] transition-all">
        <ArrowUpRight size={16} />
      </span>
    </>
  );
}
