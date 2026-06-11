"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { equipo } from "@/lib/constants/equipo";

export default function EquipoSection() {
  return (
    <section id="equipo" className="bg-light text-ink py-24 md:py-32">
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
            Desde adentro
          </p>
          <h2 className="text-ink text-[clamp(34px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] mb-6 text-balance">
            El equipo de Business Therapy.
          </h2>
          <p className="text-[17px] text-ink2 leading-[1.6] max-w-xl">
            Junto con mi equipo, acompañamos a empresas e instituciones en sus procesos de cambio. Cada proyecto se arma con quien suma para esa historia específica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipo.map((m, i) => (
            <motion.article
              key={m.nombre}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-lightWarm mb-5 shadow-card group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-500">
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
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-light/95 backdrop-blur text-ink text-[10px] font-bold uppercase tracking-widewide">
                  {m.rol}
                </div>
                <div className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-light/95 backdrop-blur text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[14px]">→</span>
                </div>
              </div>
              <h3 className="text-ink text-[22px] font-semibold tracking-tightmid leading-[1.05] mb-3 group-hover:text-violet transition-colors">
                {m.nombre}
              </h3>
              <p className="text-[14px] text-ink2 leading-[1.55]">
                {m.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
