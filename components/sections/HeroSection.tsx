"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setVideoReady(true);
    v.play().catch(() => {});
  }, []);

  return (
    <section id="top" className="bg-bg pb-6 md:pb-10 pt-4">
      <div className="container max-w-[1440px]">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-bgCard min-h-[560px] md:min-h-[640px] lg:min-h-[720px]">
          <Image
            src="/images/andrea/andrea-bw.jpg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-[58%_center] md:object-center z-0"
            style={{ opacity: videoReady ? 0 : 1, transition: "opacity 0.8s ease-out" }}
          />

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
            className="absolute inset-0 w-full h-full object-cover z-[1]"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Overlay sutil para legibilidad - mucho menos oscuro */}
          <div
            aria-hidden
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.40) 75%, rgba(0,0,0,0.75) 100%)",
            }}
          />

          {/* Overlay diagonal izquierda para zona texto - solo cubre 50% izq */}
          <div
            aria-hidden
            className="absolute inset-0 z-[3] pointer-events-none"
            style={{
              background:
                "linear-gradient(95deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.40) 35%, rgba(0,0,0,0.05) 60%, transparent 80%)",
            }}
          />

          <div className="relative z-[4] flex items-end p-7 md:p-12 lg:p-16 min-h-[560px] md:min-h-[640px] lg:min-h-[720px]">
            <div className="max-w-[680px]">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widewide text-light mb-6 px-3 py-1.5 rounded-full bg-light/10 backdrop-blur border border-white/15 w-fit"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                +20 años acompañando procesos de cambio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="text-light text-[clamp(38px,6vw,82px)] font-semibold tracking-tightest leading-[1.03] mb-7"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
              >
                Lidera tu propio cambio. Y el de tu organización.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-light/90 text-[clamp(15px,1.3vw,18.5px)] leading-[1.55] max-w-[560px] mb-8"
                style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
              >
                Soy psicóloga y creadora del método Business Therapy. Acompaño a personas, equipos y organizaciones en procesos de cambio cultural y de transformación laboral. Voy a fondo cuando trabajo.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full btn-pill-light text-[13.5px]"
                >
                  Trabajemos juntas
                </a>
                <a
                  href="#charlas"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full btn-pill-outline-light text-[13.5px]"
                >
                  Mirar charlas
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute top-6 right-6 md:top-8 md:right-8 hidden md:block z-[5]"
          >
            <p className="text-[11px] font-bold uppercase tracking-widewide text-light/85 mb-3 flex items-center gap-2 justify-end" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              Próximo libro
            </p>
            <div className="w-[180px] h-[220px] rounded-2xl overflow-hidden relative bg-violetDeep shadow-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-violet via-violetDeep to-blueTR" />
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widewide text-light/80">
                  Andrea Churba
                </p>
                <div>
                  <p className="font-semibold text-light text-[22px] leading-[1.05] tracking-tightmid">
                    Liderar los cambios
                  </p>
                  <p className="mt-2 text-[10.5px] text-light/80">
                    En escritura · 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
