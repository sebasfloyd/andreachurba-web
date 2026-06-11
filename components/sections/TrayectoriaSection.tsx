"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { title: "Cambio cultural", subtitle: "Mercado Libre", img: "/images/eventos/workshop-techint.jpg", tag: "Workshop" },
  { title: "Coaching grupal", subtitle: "Edrans", img: "/images/eventos/workshop-edrans.jpg", tag: "Equipo directivo" },
  { title: "Construyendo el rol del supervisor", subtitle: "Edenor", img: "/images/eventos/workshop-edenor.jpg", tag: "Liderazgo" },
  { title: "Liderar el cambio", subtitle: "Dell EMC", img: "/images/eventos/workshop-dell.jpg", tag: "Cambio" },
  { title: "Cambio y proactividad", subtitle: "COGA", img: "/images/eventos/workshop-coga.jpg", tag: "Cultura" },
  { title: "Mujeres en liderazgo", subtitle: "Lenovo", img: "/images/eventos/workshop-lenovo.jpg", tag: "Workshop" },
];

export default function TrayectoriaSection() {
  const ref = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  }

  return (
    <section id="trayectoria" className="bg-bg py-14 md:py-20">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-8 md:mb-10"
        >
          <div>
            <h2 className="text-light text-[clamp(26px,3.4vw,40px)] font-semibold tracking-tightest leading-[1.05]">
              Procesos que acompañé
              <a href="#mundos" className="text-light/60 hover:text-light text-[15px] font-normal ml-2 align-middle">
                Ver clientes →
              </a>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll(-1)} aria-label="Anterior" className="w-10 h-10 rounded-full btn-pill-outline-light inline-flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} aria-label="Siguiente" className="w-10 h-10 rounded-full btn-pill-outline-light inline-flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div ref={ref} className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          {items.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative shrink-0 w-[260px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden bg-bgCard snap-start group"
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-light">
                <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/80 mb-3">
                  {c.tag}
                </p>
                <p className="text-[22px] font-semibold leading-[1.1] tracking-tightmid">{c.title}</p>
                <p className="mt-1 text-[12.5px] text-light/70">{c.subtitle}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
