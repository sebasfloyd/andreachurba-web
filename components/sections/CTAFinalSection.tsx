import Image from "next/image";

export default function CTAFinalSection() {
  return (
    <section className="bg-bg pb-6 pt-10">
      <div className="container max-w-[1440px]">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden min-h-[520px] md:min-h-[640px] bg-bgCard">
          <Image
            src="/images/andrea/andrea-anteojos.jpg"
            alt="Andrea Churba"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.95) 100%)" }}
          />

          <div className="relative h-full container max-w-[1440px] flex flex-col items-center justify-end pb-12 md:pb-20 text-center min-h-[520px] md:min-h-[640px]">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              Empezamos por una conversación
            </p>
            <h2 className="text-light text-[clamp(36px,6vw,84px)] font-semibold tracking-tightest leading-[1.02] max-w-4xl mb-6">
              Si llegaste hasta acá, probablemente estés en un punto de inflexión.
            </h2>
            <p className="text-light/85 text-[clamp(15px,1.4vw,18px)] leading-[1.5] max-w-xl mb-8">
              Procesos de cambio cultural, coaching de líderes, charlas y workshops. Empezamos por una conversación sin compromiso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center px-7 py-3.5 rounded-full btn-pill-light text-[13.5px]"
              >
                Escribime
              </a>
              <a
                href="https://wa.me/5491149980733"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center px-7 py-3.5 rounded-full btn-pill-outline-light text-[13.5px]"
              >
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
