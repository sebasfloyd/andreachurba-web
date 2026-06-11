import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { libros, getLibroBySlug } from "@/lib/constants/libros";
import { siteConfig } from "@/lib/constants/site";

export function generateStaticParams() {
  return libros.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const libro = getLibroBySlug(slug);
  if (!libro) return { title: "Libro no encontrado" };

  return {
    title: `${libro.titulo} — Libro de Andrea Churba`,
    description: libro.sinopsis,
    openGraph: {
      type: "book",
      title: `${libro.titulo} — Andrea Churba`,
      description: libro.sinopsis,
      images: libro.tapa ? [{ url: libro.tapa, alt: libro.titulo }] : undefined,
    },
  };
}

export default async function LibroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const libro = getLibroBySlug(slug);
  if (!libro) notFound();

  const otrosLibros = libros.filter((l) => l.slug !== libro.slug).slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="bg-bg pt-8">
        <div className="container max-w-[1320px]">
          <Link
            href="/#libros"
            className="inline-flex items-center gap-2 text-[13px] text-light/65 hover:text-light mb-8 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Volver a todos los libros
          </Link>
        </div>

        {/* Hero del libro */}
        <section className="container max-w-[1320px] pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                {libro.tapa ? (
                  <div className="relative aspect-[2/3] w-full max-w-[380px] mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-bgCard shadow-hover">
                    <Image
                      src={libro.tapa}
                      alt={libro.titulo}
                      fill
                      priority
                      sizes="(max-width: 1024px) 80vw, 380px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className={`relative aspect-[2/3] w-full max-w-[380px] mx-auto lg:mx-0 rounded-2xl overflow-hidden ${libro.color || "bg-violet"} p-7 flex flex-col justify-between shadow-hover`}>
                    <p className="text-[11px] font-bold uppercase tracking-widewide text-light/85">
                      Andrea Churba
                    </p>
                    <div>
                      <p className="text-light text-[clamp(26px,2.8vw,32px)] font-semibold leading-[1.05] tracking-tightmid">
                        {libro.titulo}
                      </p>
                      <p className="mt-3 text-[12.5px] text-light/80">
                        {libro.subtitulo}
                      </p>
                      {libro.proximo && (
                        <span className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-orange">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                          Próximamente · 2026
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3 max-w-[380px] mx-auto lg:mx-0">
                  {libro.link ? (
                    <a
                      href={libro.link}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-pill-light text-[13.5px]"
                    >
                      Conseguir el libro
                      <ArrowUpRight size={15} />
                    </a>
                  ) : libro.proximo ? (
                    <a
                      href="/#newsletter"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-pill-light text-[13.5px]"
                    >
                      Avisame cuando salga
                    </a>
                  ) : (
                    <a
                      href="/#contacto"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-pill-light text-[13.5px]"
                    >
                      Consultar disponibilidad
                    </a>
                  )}
                  <a
                    href="/#libros"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-pill-outline-light text-[13.5px]"
                  >
                    Ver todos los libros
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 text-light">
              {libro.badges && libro.badges.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {libro.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-bgCard text-light/85 text-[10.5px] font-bold uppercase tracking-widewide border border-line"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-[10.5px] font-bold uppercase tracking-widewide text-violet mb-4">
                {libro.editorial} · {libro.ano}
              </p>

              <h1 className="text-light text-[clamp(34px,5.5vw,72px)] font-semibold tracking-tightest leading-[1.02] mb-5">
                {libro.titulo}
              </h1>

              {libro.subtitulo && (
                <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-light/80 leading-[1.4] mb-10 max-w-2xl">
                  {libro.subtitulo}
                </p>
              )}

              <p className="text-[18px] md:text-[19px] text-light/85 leading-[1.65] mb-10 max-w-[640px] pb-10 border-b border-line">
                {libro.sinopsis}
              </p>

              <div className="space-y-6 max-w-[640px]">
                {libro.cuerpo.map((p, i) => (
                  <p key={i} className="text-[16.5px] md:text-[17px] text-light/80 leading-[1.7]">
                    {p}
                  </p>
                ))}
              </div>

              {/* Author card */}
              <div className="mt-12 pt-10 border-t border-line flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet text-light text-[13px] font-bold">
                  AC
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-light">Andrea Churba</p>
                  <p className="text-[12.5px] text-light/65 mt-0.5">Psicóloga · Coach de líderes · Autora</p>
                </div>
                <a
                  href="/#sobre-mi"
                  className="ml-auto inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widewide text-violetSoft hover:text-light"
                >
                  Sobre Andrea
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Otros libros */}
        <section className="bg-light text-ink py-20 md:py-28">
          <div className="container max-w-[1320px]">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-ink2 mb-5">
              <BookOpen size={12} />
              También de Andrea
            </p>
            <h2 className="text-ink text-[clamp(26px,3.6vw,44px)] font-semibold tracking-tightest leading-[1.05] mb-10">
              Otros libros y proyectos.
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otrosLibros.map((l) => (
                <Link
                  key={l.slug}
                  href={`/libros/${l.slug}`}
                  className="group flex flex-col bg-lightSoft rounded-2xl overflow-hidden border border-lineLight hover:border-violet/40 hover:-translate-y-1 hover:shadow-card transition-all duration-500"
                >
                  {l.tapa ? (
                    <div className="relative aspect-[3/4] overflow-hidden bg-lightWarm">
                      <Image
                        src={l.tapa}
                        alt={l.titulo}
                        fill
                        sizes="(max-width: 1024px) 50vw, 280px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ) : (
                    <div className={`aspect-[3/4] ${l.color || "bg-violet"} flex items-center justify-center p-5 text-center`}>
                      <p className="text-light text-[18px] font-semibold leading-[1.05] tracking-tightmid">
                        {l.titulo}
                      </p>
                    </div>
                  )}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <p className="text-[10.5px] font-bold uppercase tracking-widewide text-violet mb-2">
                      {l.editorial} · {l.ano}
                    </p>
                    <h3 className="text-ink text-[17px] font-semibold leading-[1.15] tracking-tightmid mb-2 text-balance group-hover:text-violet transition-colors">
                      {l.titulo}
                    </h3>
                    <p className="text-[13.5px] text-ink2 leading-relaxed line-clamp-2 flex-1">
                      {l.sinopsis}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
