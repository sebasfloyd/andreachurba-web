"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }
    setDisplay("0" + suffix);
    const dur = 1800;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(target * eased) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-light text-ink py-20 md:py-32">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            Trayectoria comprobada
          </p>
          <h2 className="text-ink text-[clamp(28px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] text-balance">
            Más de 20 años trabajando con líderes que querían que el cambio quede.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-4 md:gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden bg-violet min-h-[280px]"
          >
            <Image
              src="/images/andrea/andrea-cielo.jpg"
              alt="Andrea Churba"
              fill
              sizes="(max-width: 1024px) 100vw, 580px"
              className="object-cover object-center mix-blend-luminosity opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-transparent to-violetDeep/30" />
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-light">
              <p className="font-serif italic text-[clamp(16px,2vw,28px)] leading-[1.3] text-balance" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                &ldquo;Voy a fondo cuando trabajo. Y busco que los cambios sean sostenibles en el tiempo.&rdquo;
              </p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-widewide text-light/85" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                Andrea Churba
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3">
            <Stat n="20+" l="Años acompañando procesos de cambio" color="bg-blueTR" />
            <Stat n="50+" l="Organizaciones que eligieron acompañarse" color="bg-violet" />
            <Stat n="4+1" l="Libros publicados más uno en escritura" color="bg-orange" />
            <Stat n="3" l="Medios donde Andrea es columnista regular" color="bg-ink" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-6 md:gap-14 flex-wrap pt-10 border-t border-lineLight"
        >
          <p className="text-[11px] font-bold uppercase tracking-widewide text-ink3 w-full md:w-auto">
            Columnista en:
          </p>
          <p className="font-semibold text-[16px] md:text-[22px] text-ink/80 hover:text-ink transition-colors cursor-default">Infobae</p>
          <p className="font-semibold text-[16px] md:text-[22px] text-ink/80 hover:text-ink transition-colors cursor-default">La Nación</p>
          <p className="font-semibold text-[16px] md:text-[22px] text-ink/80 hover:text-ink transition-colors cursor-default">Ohlalá</p>
          <p className="font-semibold text-[16px] md:text-[22px] text-ink/80 hover:text-ink transition-colors cursor-default">TEDx</p>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ n, l, color }: { n: string; l: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6 }}
      className={`relative aspect-[4/3] rounded-2xl ${color} text-light p-5 md:p-7 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 0% 100%, rgba(255,255,255,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="relative">
        <p className="text-[clamp(38px,7vw,96px)] font-semibold tracking-tightest leading-none">
          <Counter value={n} />
        </p>
      </div>
      <p className="relative text-[11px] md:text-[13.5px] font-bold uppercase tracking-widewide opacity-90 leading-tight max-w-[22ch]">
        {l}
      </p>
    </motion.div>
  );
}
