"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Pilar = {
  numero: string;
  titulo: string;
  bajada: string;
  color: string;
  imagen: string;
};

const pilares: Pilar[] = [
  {
    numero: "01",
    titulo: "Relato identitario",
    bajada: "Lo que te contás sobre vos no es la verdad. Es un relato. Y los narradores somos nosotros. Por eso tenemos el poder de modificarlo.",
    color: "bg-blueTR",
    imagen: "/images/andrea/andrea-anteojos.jpg",
  },
  {
    numero: "02",
    titulo: "Patrón de percepción",
    bajada: "Hay quienes apagan incendios y hay quienes ven el sistema. La diferencia no es talento: es hábito. Y los hábitos de percepción se entrenan.",
    color: "bg-violet",
    imagen: "/images/andrea/andrea-azul.jpg",
  },
  {
    numero: "03",
    titulo: "Liderazgo personal",
    bajada: "Antes de liderar a otros, hay un trabajo íntimo que es indelegable. Ese trabajo lo tenés que hacer vos, con vos.",
    color: "bg-orange",
    imagen: "/images/andrea/andrea-bw.jpg",
  },
  {
    numero: "04",
    titulo: "Cambio cultural",
    bajada: "Las organizaciones no cambian por arriba. Cambian cuando las personas cambian. Y eso se trabaja con tiempo y profundidad.",
    color: "bg-green",
    imagen: "/images/andrea/andrea-cielo.jpg",
  },
  {
    numero: "05",
    titulo: "Decisiones que sostienen",
    bajada: "Hay decisiones que necesitan velocidad. Y hay decisiones que necesitan reposo. Saber distinguir es una competencia que se entrena.",
    color: "bg-ink",
    imagen: "/images/andrea/bbva.jpg",
  },
  {
    numero: "06",
    titulo: "Transformación que dura",
    bajada: "Que el cambio quede. Que no vuelva al punto cero. Que se integre. Esa es la obsesión de todo mi trabajo, desde hace más de 20 años.",
    color: "bg-violetDeep",
    imagen: "/images/andrea/somosjefas.jpg",
  },
];

export default function PilaresSection() {
  const [active, setActive] = useState(0);
  const current = pilares[active];

  return (
    <section id="pensamiento" className="bg-light text-ink py-20 md:py-32 overflow-hidden">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10 md:mb-20 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            Pilares del método
          </p>
          <h2 className="text-ink text-[clamp(26px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] text-balance">
            Seis ideas con las que trabajo.{" "}
            <span className="text-ink4 hidden md:inline">Movete sobre cada una.</span>
            <span className="text-ink4 md:hidden">Tocá cada una.</span>
          </h2>
        </motion.div>

        {/* MOBILE: carrusel horizontal de pilares, cada uno con su foto */}
        <div className="lg:hidden -mx-4">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 px-4">
            {pilares.map((p, i) => (
              <motion.article
                key={p.numero}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="snap-start shrink-0 w-[80%] sm:w-[60%]"
              >
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-lightWarm shadow-card">
                  <Image
                    src={p.imagen}
                    alt={p.titulo}
                    fill
                    sizes="80vw"
                    className="object-cover object-center"
                  />
                  <div
                    aria-hidden
                    className={`absolute inset-0 ${p.color} opacity-40 mix-blend-multiply`}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.75) 100%)" }}
                  />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-light">
                    <div className="flex items-start justify-between">
                      <span className="text-[clamp(38px,8vw,60px)] font-semibold tracking-tightest leading-none">
                        {p.numero}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-light/15 backdrop-blur text-light text-[9.5px] font-bold uppercase tracking-widewide border border-white/25">
                        {parseInt(p.numero)} / {pilares.length}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[22px] tracking-tightest leading-[1.05] mb-2.5">
                        {p.titulo}
                      </h3>
                      <p className="text-[13px] text-light/85 leading-[1.5]">
                        {p.bajada}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-4 px-4 text-[11px] font-bold uppercase tracking-widewide text-ink3">
            ← Deslizá para ver los 6 pilares
          </p>
        </div>

        {/* DESKTOP: layout 5/7 con foto sticky + lista interactiva */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-lightWarm shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.numero}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.imagen}
                    alt={current.titulo}
                    fill
                    sizes="580px"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                aria-hidden
                className={`absolute inset-0 ${current.color} opacity-40 mix-blend-multiply transition-colors duration-700`}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }}
              />

              <div className="absolute inset-0 p-10 flex flex-col justify-between text-light">
                <div className="flex items-center justify-between">
                  <motion.span
                    key={`num-${current.numero}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[clamp(48px,7vw,120px)] font-semibold tracking-tightest leading-none"
                  >
                    {current.numero}
                  </motion.span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-light/15 backdrop-blur text-light text-[10.5px] font-bold uppercase tracking-widewide border border-white/25">
                    {parseInt(current.numero)} de {pilares.length}
                  </span>
                </div>
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.titulo}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h3 className="font-semibold text-[clamp(28px,3.5vw,42px)] tracking-tightest leading-[1.02] mb-3">
                        {current.titulo}
                      </h3>
                      <p className="text-[15px] text-light/85 leading-[1.5] max-w-md">
                        {current.bajada}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <ul className="lg:col-span-7 divide-y divide-lineLight border-y border-lineLight">
            {pilares.map((p, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={p.numero}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-left py-7 px-2 transition-colors duration-300 ${
                      isActive ? "bg-lightSoft" : "hover:bg-lightSoft/40"
                    }`}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-baseline gap-7">
                      <span className={`shrink-0 font-mono text-[12px] font-bold tracking-tight transition-all duration-500 ${isActive ? "text-violet scale-110" : "text-ink4"}`}>
                        {p.numero}
                      </span>

                      <div className="flex-1 min-w-0">
                        <motion.h3
                          animate={{
                            color: isActive ? "#1A1A1A" : "#3D3D3D",
                            x: isActive ? 6 : 0,
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="text-[clamp(24px,3.4vw,44px)] font-semibold tracking-tightest leading-[1.05] mb-2"
                        >
                          {p.titulo}
                        </motion.h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <span className="block text-[15px] text-ink2 leading-[1.55] max-w-2xl">
                                {p.bajada}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <motion.span
                        animate={{
                          rotate: isActive ? 45 : 0,
                          backgroundColor: isActive ? "#9E6FCD" : "transparent",
                          borderColor: isActive ? "#9E6FCD" : "rgba(0,0,0,0.18)",
                          color: isActive ? "#FFFFFF" : "#666666",
                        }}
                        transition={{ duration: 0.4 }}
                        className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border text-[18px] font-light"
                      >
                        +
                      </motion.span>
                    </div>
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
