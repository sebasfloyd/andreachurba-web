"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const libros = [
  {
    slug: "business-therapy",
    titulo: "Business Therapy",
    subtitulo: "El método para liderar hacia mejores resultados",
    ano: "2010",
    editorial: "Aguilar · Santillana",
    tapa: "/images/libros/business-therapy.jpg",
    badge: "1er libro",
  },
  {
    slug: "lidera-tu-propio-cambio",
    titulo: "Lidera tu propio cambio",
    subtitulo: "Siete patrones de percepción",
    ano: "2017",
    editorial: "Granica",
    tapa: "/images/libros/lidera.jpg",
    badge: null,
  },
  {
    slug: "recursos-y-herramientas",
    titulo: "Recursos y Herramientas",
    subtitulo: "Caja de herramientas para el cambio",
    ano: "2017",
    editorial: "Business Therapy",
    tapa: null,
    color: "bg-violet",
    badge: null,
  },
  {
    slug: "diez-habilidades",
    titulo: "Diez habilidades",
    subtitulo: "Lo que llegó para quedarse",
    ano: "2020",
    editorial: "Ebook · Business Therapy",
    tapa: "/images/libros/cuarentena.jpg",
    badge: "Ebook",
  },
  {
    slug: "liderar-los-cambios",
    titulo: "Liderar los cambios",
    subtitulo: "Próximo libro 2026",
    ano: "2026",
    editorial: "En escritura",
    tapa: null,
    color: "bg-ink",
    proximo: true,
  },
];

export default function LibrosSection() {
  return (
    <section id="libros" className="bg-light text-ink py-20 md:py-32">
      <div className="container max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10 md:mb-16 max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            Libros
          </p>
          <h2 className="text-ink text-[clamp(30px,5.5vw,72px)] font-semibold tracking-tightest leading-[1.05] text-balance">
            Cuatro libros publicados. El quinto, en escritura.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {libros.map((libro, i) => (
            <motion.article
              key={libro.titulo}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <Link href={`/libros/${libro.slug}`} className="block">
                {libro.tapa ? (
                  <div className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden bg-lightWarm shadow-card group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-500">
                    <Image
                      src={libro.tapa}
                      alt={libro.titulo}
                      fill
                      sizes="(max-width: 768px) 50vw, 280px"
                      className="object-cover"
                    />
                    {libro.badge && (
                      <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-light/95 backdrop-blur text-ink text-[9px] md:text-[10px] font-bold uppercase tracking-widewide">
                        {libro.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className={`relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden ${libro.color || "bg-violet"} shadow-card group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-500 p-4 md:p-6 flex flex-col justify-between`}>
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widewide text-light/85">
                      Andrea Churba
                    </p>
                    <div>
                      <p className="text-light text-[clamp(15px,2.4vw,26px)] font-semibold leading-[1.05] tracking-tightmid">
                        {libro.titulo}
                      </p>
                      <p className="mt-1.5 text-[9.5px] md:text-[11px] text-light/75 line-clamp-2">
                        {libro.subtitulo}
                      </p>
                      {libro.proximo && (
                        <span className="mt-3 inline-flex items-center gap-1.5 text-[8.5px] md:text-[10px] font-bold uppercase tracking-widewide text-orange">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-orange animate-pulse" />
                          Próx.
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-3 md:mt-4 px-0.5">
                  <p className="text-[9px] md:text-[10.5px] font-bold uppercase tracking-widewide text-ink3 mb-1 line-clamp-1">
                    {libro.editorial} · {libro.ano}
                  </p>
                  <h3 className="text-ink text-[14px] md:text-[17px] font-semibold leading-[1.15] mb-1.5 group-hover:text-violet transition-colors text-balance line-clamp-2">
                    {libro.titulo}
                  </h3>
                  <p className="text-[12px] md:text-[13.5px] text-ink2 leading-[1.4] line-clamp-2 mb-2 md:mb-3">
                    {libro.subtitulo}
                  </p>
                  <p className="inline-flex items-center gap-1 text-[10.5px] md:text-[12px] font-bold uppercase tracking-widewide text-violet group-hover:text-violetDeep">
                    Ver detalle
                    <ArrowUpRight size={11} />
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
