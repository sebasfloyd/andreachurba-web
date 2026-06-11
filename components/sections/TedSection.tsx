"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useVideoModal } from "@/components/shared/VideoModal";
import VideoCard from "@/components/shared/VideoCard";

const charlas = [
  { titulo: "Identidad y relato: Había una vez yo", evento: "TEDxBarrioSanNicolas", año: "2022", videoId: "WHAibWX22mw", tag: "TED Talk" },
  { titulo: "Lidera tu propio cambio", evento: "NEXXO Programa 23", año: "2025", videoId: "B2oudjMoTVE", tag: "Entrevista" },
  { titulo: "Quedarse con resistencia, enferma", evento: "Entrevista en vivo", año: "2020", videoId: "1AcjNFdK2XE", tag: "Cambio" },
  { titulo: "CEO Leadership Summit", evento: "Con Patricio Fedio", año: "2020", videoId: "OmnOdXRsy9k", tag: "Liderazgo" },
  { titulo: "OHLALÁ Santander Maker", evento: "Emprendedoras", año: "2019", videoId: "uUThe53ke2k", tag: "Mujeres" },
];

export default function TedSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { open } = useVideoModal();
  const destacada = charlas[0];
  const otras = charlas.slice(1);

  function scroll(dir: 1 | -1) {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  }

  return (
    <section id="charlas" className="bg-bg py-20 md:py-28">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="flex items-end justify-between mb-8 md:mb-12 gap-4"
        >
          <div>
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-light" />
              En escena
            </p>
            <h2 className="text-light text-[clamp(28px,3.8vw,48px)] font-semibold tracking-tightest leading-[1.05]">
              Charlas y entrevistas
              <a
                href="https://www.youtube.com/channel/UC4KdKuK2LO_uhGYLfIGM-Xg"
                target="_blank"
                rel="noopener"
                className="text-light/60 hover:text-light text-[15px] font-normal ml-2 align-middle"
              >
                Ver canal →
              </a>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button onClick={() => scroll(-1)} aria-label="Anterior" className="w-11 h-11 rounded-full btn-pill-outline-light inline-flex items-center justify-center transition-transform hover:-translate-x-0.5">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} aria-label="Siguiente" className="w-11 h-11 rounded-full btn-pill-outline-light inline-flex items-center justify-center transition-transform hover:translate-x-0.5">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.button
          type="button"
          onClick={() =>
            open({
              videoId: destacada.videoId,
              title: destacada.titulo,
              subtitle: `${destacada.evento} · ${destacada.año}`,
            })
          }
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative block w-full aspect-video rounded-2xl md:rounded-[28px] overflow-hidden bg-bgCard mb-6"
          aria-label={`Reproducir ${destacada.titulo}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${destacada.videoId}/maxresdefault.jpg`}
            alt={destacada.titulo}
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-[1.4s] ease-out"
          />
          <div
            aria-hidden
            className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.85) 100%)" }}
          />

          <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-light/15 backdrop-blur text-light text-[10.5px] font-bold uppercase tracking-widewide border border-white/20">
            ★ Destacada · {destacada.tag}
          </span>

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-light text-ink group-hover:scale-110 transition-transform duration-500 shadow-hover">
            <Play size={32} fill="currentColor" className="ml-1.5" />
          </span>

          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-light">
            <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-3">
              {destacada.evento} · {destacada.año}
            </p>
            <p className="text-[clamp(22px,3.4vw,46px)] font-semibold tracking-tightest leading-[1] max-w-2xl">
              {destacada.titulo}
            </p>
          </div>
        </motion.button>

        <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          {otras.map((c, i) => (
            <div key={c.videoId} className="shrink-0 w-[280px] md:w-[340px] snap-start">
              <VideoCard
                videoId={c.videoId}
                title={c.titulo}
                subtitle={`${c.evento} · ${c.año}`}
                tag={c.tag}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
