"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Users2, GraduationCap, MessageCircle, Search, Sparkles, ArrowUpRight, Clock, MapPin } from "lucide-react";

type Tab = "mundos" | "proceso";

const mundos = [
  {
    icon: Compass,
    intro: "Para empresas que necesitan cambio profundo",
    titulo: "Organizaciones y Cultura",
    bajada: "Acompaño a equipos directivos en procesos de cambio cultural. Diagnóstico, intervención, facilitación y medición. Trabajo largo y profundo para que la transformación se sostenga.",
    color: "bg-blueTR",
    accent: "bg-blueTRSoft",
    ejemplos: ["Cambio cultural", "Liderazgo de equipos", "Facilitación", "Coaching ejecutivo"],
    duracion: "6-18 meses",
    formato: "Presencial + online",
  },
  {
    icon: Users2,
    intro: "Para líderes en un punto de inflexión",
    titulo: "Personas que trabajan",
    bajada: "Coaching uno a uno con personas en puntos de inflexión: nuevos roles, escalas distintas, decisiones de carrera, transiciones. Trabajo sobre el relato identitario.",
    color: "bg-violet",
    accent: "bg-violetSoft",
    ejemplos: ["Coaching 1:1", "3-9 meses", "Relato identitario", "Patrón de percepción"],
    duracion: "3-9 meses",
    formato: "Sesiones quincenales",
  },
  {
    icon: GraduationCap,
    intro: "Para audiencias que quieren pensar distinto",
    titulo: "Experiencias de Aprendizaje",
    bajada: "Keynotes para eventos, workshops in-company, jornadas, talleres en escuelas de negocio. Para equipos que quieren pensar el cambio desde otro lugar.",
    color: "bg-orange",
    accent: "bg-orangeBright",
    ejemplos: ["Keynotes", "Workshops", "Programas in-company", "Charlas TEDx"],
    duracion: "1-3 sesiones",
    formato: "Presencial · BA o ciudad",
  },
];

const pasos = [
  {
    n: "01",
    icon: MessageCircle,
    titulo: "Conversación inicial",
    duracion: "30-45 min · Sin compromiso",
    desc: "Nos juntamos a charlar. Vos contás lo que está pasando, yo escucho. Si hay match, seguimos. Si no, te oriento a otra persona.",
  },
  {
    n: "02",
    icon: Search,
    titulo: "Diagnóstico profundo",
    duracion: "1-3 semanas",
    desc: "Trabajo con vos o con tu equipo para entender qué está pasando realmente. Entrevistas, observación, análisis. Acá vamos a fondo.",
  },
  {
    n: "03",
    icon: Compass,
    titulo: "Diseño de la intervención",
    duracion: "1-2 semanas",
    desc: "Armo una propuesta a medida: frecuencia, formato, plazos, indicadores. No vendo paquetes cerrados. Cada proceso es único.",
  },
  {
    n: "04",
    icon: Sparkles,
    titulo: "Proceso acompañado",
    duracion: "3-12 meses",
    desc: "El trabajo real. Sesiones, espacios de equipo, lecturas, herramientas. Te acompaño hasta que el cambio pueda sostenerse sin mí.",
  },
];

export default function TrabajemosSection() {
  const [tab, setTab] = useState<Tab>("mundos");

  return (
    <section id="trabajemos" className="bg-bg py-20 md:py-28 overflow-hidden">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-light" />
              Trabajemos juntas
            </p>
            <h2 className="text-light text-[clamp(34px,5vw,72px)] font-semibold tracking-tightest leading-[1.02] text-balance">
              Tres mundos. Cuatro pasos. <span className="text-light/55">Una sola obsesión:</span> que el cambio quede.
            </h2>
          </div>

          {/* Tabs */}
          <div className="inline-flex p-1 rounded-full bg-bgCard border border-line shrink-0">
            <button
              onClick={() => setTab("mundos")}
              className={`px-5 py-2.5 rounded-full text-[12.5px] font-bold uppercase tracking-widewide transition-all ${
                tab === "mundos" ? "bg-light text-ink" : "text-light/65 hover:text-light"
              }`}
            >
              Cómo lo hacemos
            </button>
            <button
              onClick={() => setTab("proceso")}
              className={`px-5 py-2.5 rounded-full text-[12.5px] font-bold uppercase tracking-widewide transition-all ${
                tab === "proceso" ? "bg-light text-ink" : "text-light/65 hover:text-light"
              }`}
            >
              Proceso paso a paso
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {tab === "mundos" ? (
            <motion.div
              key="mundos"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-3 gap-5"
            >
              {mundos.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.article
                    key={m.titulo}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative rounded-3xl overflow-hidden ${m.color} text-light cursor-pointer hover:-translate-y-2 transition-transform duration-700`}
                  >
                    <motion.div
                      aria-hidden
                      className={`absolute -top-32 -right-32 w-80 h-80 rounded-full ${m.accent} opacity-30 blur-3xl`}
                      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 6 + i, ease: "easeInOut", repeat: Infinity }}
                    />

                    <div className="relative p-8 md:p-10 min-h-[520px] md:min-h-[560px] flex flex-col">
                      <div className="flex items-start justify-between mb-8">
                        <motion.span
                          whileHover={{ rotate: -10, scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-light/15 backdrop-blur border border-white/25 text-light"
                        >
                          <Icon size={24} strokeWidth={2.2} />
                        </motion.span>
                        <span className="text-[10.5px] font-bold uppercase tracking-widewide text-light/65">
                          0{i + 1} / {mundos.length}
                        </span>
                      </div>

                      <p className="text-[11.5px] font-bold uppercase tracking-widewide text-light/80 mb-3">
                        {m.intro}
                      </p>
                      <h3 className="text-[clamp(26px,3vw,38px)] font-semibold leading-[1.02] tracking-tightest mb-5 text-balance">
                        {m.titulo}
                      </h3>
                      <p className="text-[14.5px] text-light/85 leading-[1.6] mb-7">
                        {m.bajada}
                      </p>

                      <ul className="mt-auto pt-6 border-t border-white/20 grid grid-cols-2 gap-x-3 gap-y-2 mb-6">
                        {m.ejemplos.map((e) => (
                          <li key={e} className="text-[12.5px] font-medium text-light/80 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-light/60 shrink-0" />
                            {e}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-widewide text-light/65">
                          <span className="inline-flex items-center gap-1.5"><Clock size={11} />{m.duracion}</span>
                          <span className="inline-flex items-center gap-1.5"><MapPin size={11} />{m.formato}</span>
                        </div>
                        <a
                          href="#contacto"
                          className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-widewide text-light group-hover:gap-3 transition-all"
                        >
                          Conversar
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="proceso"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {pasos.map((paso, i) => {
                const Icon = paso.icon;
                return (
                  <motion.article
                    key={paso.n}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative bg-bgCard hover:bg-bgSoft border border-line hover:border-violet/40 rounded-2xl p-7 md:p-8 transition-all duration-500 hover:-translate-y-1"
                  >
                    {i < pasos.length - 1 && (
                      <div
                        aria-hidden
                        className="hidden lg:block absolute top-12 left-full w-full h-px bg-line z-0"
                        style={{ width: "calc(100% + 20px)" }}
                      />
                    )}

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet text-light">
                          <Icon size={24} strokeWidth={2.2} />
                        </span>
                        <span className="text-light/20 text-[48px] font-semibold tracking-tightest leading-none">
                          {paso.n}
                        </span>
                      </div>

                      <p className="text-[10.5px] font-bold uppercase tracking-widewide text-violet mb-2">
                        {paso.duracion}
                      </p>
                      <h3 className="text-light text-[20px] md:text-[22px] font-semibold tracking-tightmid leading-[1.1] mb-3">
                        {paso.titulo}
                      </h3>
                      <p className="text-[14.5px] text-light/75 leading-[1.55]">
                        {paso.desc}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-pill-light text-[13.5px]"
          >
            {tab === "mundos" ? "Empezar la conversación" : "Empezar por el paso 1"} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
