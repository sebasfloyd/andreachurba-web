"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const libros = [
  {
    titulo: "Business Therapy",
    subtitulo: "El método para liderar hacia mejores resultados",
    ano: "2010",
    editorial: "Aguilar · Santillana",
    tapa: "/images/libros/business-therapy.jpg",
    link: "https://www.cuspide.com/9789870414414/Business+Therapy",
    badge: "1er libro",
  },
  {
    titulo: "Lidera tu propio cambio",
    subtitulo: "Siete patrones de percepción",
    ano: "2017",
    editorial: "Granica",
    tapa: "/images/libros/lidera.jpg",
    link: "https://www.amazon.com/Lidera-propio-cambio-Sim%C3%BAltaneo-Organizaciones/dp/950641906X",
    badge: null,
  },
  {
    titulo: "Recursos y Herramientas",
    subtitulo: "Caja de herramientas para el cambio",
    ano: "2017",
    editorial: "Business Therapy",
    tapa: null,
    color: "bg-violet",
    link: null,
    badge: null,
  },
  {
    titulo: "Diez habilidades",
    subtitulo: "Lo que llegó para quedarse",
    ano: "2020",
    editorial: "Ebook · Business Therapy",
    tapa: "/images/libros/cuarentena.jpg",
    link: null,
    badge: "Ebook",
  },
  {
    titulo: "Liderar los cambios",
    subtitulo: "Próximo libro 2026",
    ano: "2026",
    editorial: "En escritura",
    tapa: null,
    color: "bg-ink",
    link: null,
    proximo: true,
  },
];

export default function LibrosSection() {
  return (
    <section id="libros" className="bg-light text-ink py-24 md:py-32">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            Libros
          </p>
          <h2 className="text-ink text-[clamp(38px,5.5vw,72px)] font-semibold tracking-tightest leading-[1.05] text-balance">
            Cuatro libros publicados. El quinto, en escritura.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {libros.map((libro, i) => (
            <motion.article
              key={libro.titulo}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <a
                href={libro.link || "#"}
                target={libro.link ? "_blank" : undefined}
                rel={libro.link ? "noopener" : undefined}
                className="block"
              >
                {libro.tapa ? (
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-lightWarm shadow-card group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-500">
                    <Image
                      src={libro.tapa}
                      alt={libro.titulo}
                      fill
                      sizes="(max-width: 1024px) 50vw, 280px"
                      className="object-cover"
                    />
                    {libro.badge && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-light/95 backdrop-blur text-ink text-[10px] font-bold uppercase tracking-widewide">
                        {libro.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${libro.color || "bg-violet"} shadow-card group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-500 p-6 flex flex-col justify-between`}>
                    <p className="text-[10px] font-bold uppercase tracking-widewide text-light/85">
                      Andrea Churba
                    </p>
                    <div>
                      <p className="text-light text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.05] tracking-tightmid">
                        {libro.titulo}
                      </p>
                      <p className="mt-2 text-[11px] text-light/75">
                        {libro.subtitulo}
                      </p>
                      {libro.proximo && (
                        <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widewide text-orange">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                          Próximamente
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-4 px-1">
                  <p className="text-[10.5px] font-bold uppercase tracking-widewide text-ink3 mb-1.5">
                    {libro.editorial} · {libro.ano}
                  </p>
                  <h3 className="text-ink text-[17px] font-semibold leading-[1.15] mb-1.5 group-hover:text-violet transition-colors">
                    {libro.titulo}
                  </h3>
                  <p className="text-[13.5px] text-ink2 leading-[1.4] mb-3">
                    {libro.subtitulo}
                  </p>
                  {libro.link && (
                    <p className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-widewide text-violet group-hover:text-violetDeep">
                      Conseguir
                      <ArrowUpRight size={12} />
                    </p>
                  )}
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
