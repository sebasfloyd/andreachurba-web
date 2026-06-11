"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const timeline = [
  { ano: "Hasta 2003", evento: "Coordinadora general de la División Empresas y Negocios de la Escuela Argentina de PNL y Coaching." },
  { ano: "2010", evento: "Publica Business Therapy, el método para liderar hacia mejores resultados (Aguilar · Santillana)." },
  { ano: "2017", evento: "Publica Lidera tu propio cambio (Granica), un modelo sobre los siete patrones de percepción." },
  { ano: "2020", evento: "Lanza el ebook Diez habilidades que llegaron para quedarse durante la cuarentena." },
  { ano: "2022", evento: "Da la charla TEDxBarrioSanNicolas: Identidad y Relato — Había una vez yo." },
  { ano: "2026", evento: "Está escribiendo Liderar los cambios, su quinto libro." },
];

const credenciales = [
  "Psicóloga",
  "Creadora del método Business Therapy",
  "Co-fundadora de Experiencia Tukuy",
  "Columnista en Infobae, La Nación y Ohlalá",
  "Autora de 4 libros publicados + 1 en escritura",
  "Idiomas: español, inglés, portugués",
];

export default function AcercaSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setVideoReady(true);
    v.play().catch(() => {});
  }, []);

  return (
    <section id="sobre-mi" className="bg-bg relative">
      {/* Hero portrait con video AI */}
      <div className="relative h-[60vh] md:h-[70vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/andrea/andrea-anteojos.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-center"
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
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1s ease-out" }}
        >
          <source src="/videos/andrea-warm-ai.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.80) 85%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        <div className="relative h-full container max-w-[1440px] flex flex-col items-center justify-end pb-12 md:pb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light mb-5 px-3 py-1.5 rounded-full bg-light/10 backdrop-blur border border-white/15"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            Sobre mí
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-light text-[clamp(26px,5.5vw,72px)] font-semibold tracking-tightest leading-[1.05] max-w-3xl mb-5 md:mb-6"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
          >
            No vine a darte herramientas. Vine a que las uses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-light/95 text-[14px] md:text-[clamp(15px,1.4vw,18px)] leading-[1.55] max-w-xl mb-7"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}
          >
            Trabajo desde la psicología clínica aplicada al universo laboral. Lo que vemos juntos se prueba afuera: en la próxima reunión, en la conversación difícil, en la decisión que venís postergando.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            href="#trabajemos"
            className="inline-flex items-center px-6 py-3 rounded-full btn-pill-light text-[13.5px]"
          >
            Trabajemos juntos
          </motion.a>
        </div>
      </div>

      {/* Bio + Credenciales + Timeline */}
      <div className="bg-bg py-16 md:py-28 border-t border-line">
        <div className="container max-w-[1320px]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-bgCard lg:sticky lg:top-28">
                <Image
                  src="/images/andrea/andrea-bw.jpg"
                  alt="Andrea Churba"
                  fill
                  sizes="(max-width: 1024px) 80vw, 540px"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 right-6 text-light">
                  <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-1">
                    Andrea Churba
                  </p>
                  <p className="font-serif italic text-[clamp(16px,1.8vw,24px)] leading-tight" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                    Buenos Aires
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:col-span-7 text-light"
            >
              <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/75 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-light" />
                Bio
              </p>
              <h3 className="text-light text-[clamp(24px,3.6vw,48px)] font-semibold tracking-tightest leading-[1.05] mb-7 text-balance">
                Soy psicóloga. Acompaño procesos de cambio donde lo organizacional y lo personal se cruzan.
              </h3>

              <div className="space-y-4 md:space-y-5 text-[15.5px] md:text-[17.5px] text-light/90 leading-[1.7] max-w-[640px]">
                <p>
                  Hace más de veinte años trabajo en el universo laboral: cuando algo en cómo trabajamos —o en cómo nos pensamos trabajando— ya no nos calza.
                </p>
                <p>
                  Creé el método <span className="text-light font-semibold">Business Therapy</span> porque me interesa lo profundo. No me defino como coach, aunque hago coaching. Me defino más como psicóloga, porque voy a fondo cuando trabajo y porque busco que los cambios sean sostenibles en el tiempo.
                </p>
                <p>
                  Lidero procesos de cambio cultural en empresas grandes. Acompaño a líderes —CEOs, directoras, fundadores— en sus puntos de inflexión. Y desde el voluntariado, trabajo con personas en situación de vulnerabilidad que están empezando a pensarse a sí mismas como trabajando.
                </p>
                <p>
                  El cruce entre la empresa grande y la realidad más vulnerable es lo que más me interesa del trabajo.
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-8 md:mt-10 pt-8 md:pt-10 border-t border-line">
                {credenciales.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[14px] md:text-[14.5px] text-light/90">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet text-light shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Timeline con mejor contraste */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="pt-12 border-t border-line"
          >
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/75 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-light" />
              Trayectoria
            </p>
            <h3 className="text-light text-[clamp(24px,3.5vw,44px)] font-semibold tracking-tightest leading-[1.05] mb-10 max-w-3xl">
              Hitos del recorrido.
            </h3>

            <ol className="relative space-y-0 border-l-2 border-violet/30 ml-3">
              {timeline.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative pl-7 md:pl-10 pb-7 md:pb-8 last:pb-0 group"
                >
                  <span className="absolute left-0 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-violet border-2 border-bg group-hover:scale-125 transition-transform" />
                  <p className="text-[10.5px] font-bold uppercase tracking-widewide text-violetSoft mb-2">
                    {t.ano}
                  </p>
                  <p className="text-[15px] md:text-[17px] text-light leading-[1.55] max-w-2xl">
                    {t.evento}
                  </p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
