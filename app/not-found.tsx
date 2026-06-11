import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg text-light flex items-center justify-center px-6 py-20">
      <div className="container max-w-[960px] grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/65 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            Error 404
          </p>
          <h1 className="text-[clamp(36px,6vw,80px)] font-semibold tracking-tightest leading-[1.02] mb-5 text-balance">
            Esta página no existe. O ya no.
          </h1>
          <p className="text-[15px] md:text-[17px] text-light/80 leading-[1.6] max-w-xl mb-8">
            A veces el cambio incluye soltar contenido viejo. Si llegaste hasta acá por un link, contame para arreglarlo.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-pill-light text-[13.5px]"
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </Link>
            <Link
              href="/notas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-pill-outline-light text-[13.5px]"
            >
              Leer columnas
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden bg-bgCard order-first lg:order-last max-w-[280px] lg:max-w-none mx-auto">
          <Image
            src="/images/andrea/andrea-bw.jpg"
            alt="Andrea Churba"
            fill
            sizes="(max-width: 1024px) 280px, 400px"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </main>
  );
}
