"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useVideoModal } from "@/components/shared/VideoModal";

export default function HumanQuoteSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { open } = useVideoModal();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setVideoReady(true);
    v.play().catch(() => {});
  }, []);

  return (
    <section className="bg-bg">
      <div className="container max-w-[1440px] py-4">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-violet">
          <div className="relative min-h-[520px] md:min-h-[640px]">
            {/* Fallback poster */}
            <Image
              src="/images/andrea/andrea-bw.jpg"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover object-center"
              style={{ opacity: videoReady ? 0 : 0.4, transition: "opacity 0.8s ease-out" }}
            />

            {/* Higgsfield AI video — Andrea retrato animado */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedData={() => setVideoReady(true)}
              onCanPlay={() => setVideoReady(true)}
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-55"
            >
              <source src="/videos/andrea-portrait-ai.mp4" type="video/mp4" />
            </video>

            {/* Color overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violetDeep/50 via-violet/15 to-transparent" />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, transparent 30%, rgba(122,79,176,0.4) 100%)",
              }}
            />

            <div className="relative p-7 md:p-12 lg:p-16 flex flex-col h-full justify-end min-h-[520px] md:min-h-[640px]">
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widewide text-light/90 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-light" />
                TEDxBarrioSanNicolas · 2022
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-light text-[clamp(26px,4.5vw,68px)] font-semibold tracking-tightest leading-[1.05] max-w-4xl mb-10"
                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
              >
                &ldquo;Nosotros somos los narradores del relato que nos contamos. Por eso tenemos el poder de modificarlo.&rdquo;
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex items-center justify-between flex-wrap gap-6 pt-6 border-t border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-light/15 backdrop-blur text-light text-[12px] font-bold border border-white/20">
                    AC
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-light leading-tight">Andrea Churba</p>
                    <p className="text-[12px] text-light/75 leading-tight mt-0.5">Identidad y Relato</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => open({ videoId: "WHAibWX22mw", title: "Identidad y Relato: Había una vez yo", subtitle: "TEDxBarrioSanNicolas · 2022 · 12 min" })}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-light text-violetDeep font-semibold text-[13px] hover:bg-light/90 transition-colors"
                >
                  <Play size={12} fill="currentColor" />
                  Mirar la charla completa
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
