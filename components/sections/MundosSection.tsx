"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { logosClientes } from "@/lib/constants/logos";

const rowA = logosClientes.slice(0, Math.ceil(logosClientes.length / 3));
const rowB = logosClientes.slice(Math.ceil(logosClientes.length / 3), Math.ceil((logosClientes.length / 3) * 2));
const rowC = logosClientes.slice(Math.ceil((logosClientes.length / 3) * 2));

function Row({ items, reverse = false, duration = 50 }: { items: typeof logosClientes; reverse?: boolean; duration?: number }) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden mask-fade-x py-3">
      <motion.div
        className="flex items-center gap-4 md:gap-5 w-max"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.slug}-${i}`}
            className="shrink-0 group relative w-[148px] md:w-[200px] h-[88px] md:h-[110px] bg-light rounded-2xl border border-lineLight flex items-center justify-center p-5 md:p-7 hover:shadow-card hover:border-violet/30 hover:-translate-y-0.5 transition-all duration-500 cursor-default"
            title={logo.nombre}
          >
            <Image
              src={logo.src}
              alt={logo.nombre}
              fill
              sizes="220px"
              className="object-contain p-5 md:p-7"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MundosSection() {
  return (
    <section id="mundos" className="bg-lightSoft text-ink py-24 md:py-32 overflow-hidden">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-14 md:mb-20 grid lg:grid-cols-12 gap-10 items-end"
        >
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              Nuestros mundos
            </p>
            <h2 className="text-ink text-[clamp(34px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] text-balance">
              Empresas e instituciones que eligieron acompañarse con nosotros.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-5">
            <p className="text-[16px] text-ink2 leading-[1.6] max-w-md">
              Desde Mercado Libre, Techint, BASF y Aeropuertos Argentina 2000 hasta organizaciones sociales en territorio. Diversos tamaños, industrias y geografías. Una misma obsesión.
            </p>
            <div className="flex items-baseline gap-3">
              <p className="font-semibold text-[clamp(48px,6vw,72px)] tracking-tightest leading-none text-violet">
                {logosClientes.length}+
              </p>
              <p className="text-[13px] font-bold uppercase tracking-widewide text-ink2 leading-tight">
                organizaciones
                <br />
                que confiaron
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <Row items={rowA} duration={55} />
        <Row items={rowB} reverse duration={65} />
        <Row items={rowC} duration={75} />
      </div>

      <div className="container max-w-[1440px]">
        <p className="mt-12 text-center text-[13.5px] text-ink3 italic">
          + organizaciones sociales, escuelas de negocio y equipos en transición.
        </p>
      </div>
    </section>
  );
}
