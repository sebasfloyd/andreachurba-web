"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VideoCard from "@/components/shared/VideoCard";

const citasReales = [
  {
    text: "Voy muy a fondo, muy profundo cuando trabajo con las personas. Y logro cambios sostenibles en el tiempo.",
    fuente: "Programa 23 NEXXO 2025",
    color: "bg-violet",
  },
  {
    text: "El proceso de cambio necesita digestión. Y a veces esa digestión es lenta.",
    fuente: "NEXXO 2025",
    color: "bg-blueTR",
  },
  {
    text: "Antes de liderar a otros, hay un trabajo que es íntimo. Ese trabajo lo tenés que hacer vos, con vos.",
    fuente: "Lidera tu propio cambio · Granica",
    color: "bg-orange",
  },
  {
    text: "El contexto cambia y nosotros seguimos contándonos lo de antes. El cambio empieza cuando se cierra ese desfasaje.",
    fuente: "TEDxBarrioSanNicolas",
    color: "bg-ink",
  },
];

const videos = [
  { videoId: "WHAibWX22mw", titulo: "Identidad y relato", tag: "TEDxBSAN" },
  { videoId: "B2oudjMoTVE", titulo: "Lidera tu propio cambio", tag: "NEXXO 2025" },
  { videoId: "1AcjNFdK2XE", titulo: "Resistencia al cambio", tag: "Entrevista" },
  { videoId: "OmnOdXRsy9k", titulo: "CEO Leadership Summit", tag: "Liderazgo" },
];

function MarqueeCita({ cita, reverse = false, speed = 60 }: { cita: typeof citasReales[0]; reverse?: boolean; speed?: number }) {
  return (
    <div className="overflow-hidden py-1 mask-fade-x">
      <motion.div
        className="flex items-center gap-8 md:gap-12 whitespace-nowrap w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="inline-flex items-center gap-8 md:gap-12">
            <span className="font-serif italic text-ink text-[clamp(20px,4vw,68px)] leading-[1.1] tracking-tightmid">
              &ldquo;{cita.text}&rdquo;
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-ink/30 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function EditorialEssaySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="bg-light text-ink py-20 md:py-32">
      <div className="container max-w-[1440px] mb-16 md:mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {videos.map((v, i) => (
            <VideoCard
              key={v.videoId}
              videoId={v.videoId}
              title={v.titulo}
              tag={v.tag}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Bloque de citas animadas */}
      <div ref={containerRef} className="relative">
        <div className="container max-w-[1440px] mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              En sus propias palabras
            </p>
            <h2 className="text-ink text-[clamp(24px,4vw,52px)] font-semibold tracking-tightest leading-[1.05]">
              Frases que repito porque las sostengo.
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ y }} className="relative space-y-3 md:space-y-6">
          <MarqueeCita cita={citasReales[0]} speed={60} />
          <MarqueeCita cita={citasReales[1]} reverse speed={70} />
          <MarqueeCita cita={citasReales[2]} speed={55} />
          <MarqueeCita cita={citasReales[3]} reverse speed={65} />
        </motion.div>

        <div className="container max-w-[1440px] mt-10 md:mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {citasReales.map((c, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full ${c.color} text-light text-[10px] md:text-[11px] font-bold uppercase tracking-widewide`}
              >
                {c.fuente}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
