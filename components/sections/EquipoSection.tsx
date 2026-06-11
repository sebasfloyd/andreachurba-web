"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { equipo } from "@/lib/constants/equipo";

export default function EquipoSection() {
  return (
    <section id="equipo" className="bg-light text-ink py-20 md:py-32">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10 md:mb-16 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            Desde adentro
          </p>
          <h2 className="text-ink text-[clamp(28px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] mb-5 text-balance">
            El equipo de Business Therapy.
          </h2>
          <p className="text-[15px] md:text-[17px] text-ink2 leading-[1.6] max-w-xl">
            Junto con mi equipo, acompañamos a empresas e instituciones en sus procesos de cambio. Cada proyecto se arma con quien suma para esa historia específica.
          </p>
        </motion.div>

        {/* 2x2 mobile, 4x1 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {equipo.map((m, i) => (
            <motion.article
              key={m.nombre}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-lightWarm mb-3 md:mb-5 shadow-card group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-500">
                <Image
                  src={m.foto}
                  alt={m.nombre}
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700"
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 inline-flex items-center gap-1.5 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-light/95 backdrop-blur text-ink text-[8.5px] md:text-[10px] font-bold uppercase tracking-widewide max-w-[90%] truncate">
                  {m.rol}
                </div>
              </div>
              <h3 className="text-ink text-[16px] md:text-[22px] font-semibold tracking-tightmid leading-[1.05] mb-2 group-hover:text-violet transition-colors">
                {m.nombre}
              </h3>
              <p className="text-[12.5px] md:text-[14px] text-ink2 leading-[1.5] md:leading-[1.55] line-clamp-4 md:line-clamp-none">
                {m.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
