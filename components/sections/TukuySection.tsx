import Image from "next/image";
import { tukuy, voluntariados } from "@/lib/constants/proyectos-sociales";

export default function TukuySection() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container max-w-[1440px]">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-light" />
            Proyectos sociales
          </p>
          <h2 className="text-light text-[clamp(32px,4.5vw,56px)] font-semibold tracking-tightest leading-[1.05]">
            Procesos que no se cobran. Los que más enseñan.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <article className="relative lg:col-span-7 rounded-2xl overflow-hidden bg-bgCard min-h-[420px] group">
            <Image
              src="/images/andrea/lamroth.jpg"
              alt="Lamroth Hakol"
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.88) 100%)" }}
            />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-light">
              <span className="inline-flex items-center w-fit gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                Co-fundadora
              </span>
              <h3 className="text-[clamp(28px,3.8vw,48px)] font-semibold tracking-tightest leading-[1.05] mb-3">
                Experiencia Tukuy
              </h3>
              <p className="text-[15px] text-light/80 leading-[1.6] max-w-xl">
                {tukuy.bajada}
              </p>
            </div>
          </article>

          <article className="lg:col-span-5 rounded-2xl bg-bgCard p-8 md:p-10 border border-line">
            <span className="inline-flex items-center w-fit gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-light/70" />
              Voluntariado
            </span>
            <h3 className="text-light text-[clamp(20px,2.4vw,28px)] font-semibold tracking-tightest leading-[1.1] mb-7 text-balance">
              Acompañar a personas que están encontrando su trabajo.
            </h3>

            <ul className="divide-y divide-line">
              {voluntariados.map((v) => (
                <li key={v.nombre} className="py-4">
                  <p className="font-semibold text-light text-[14.5px] mb-1">{v.nombre}</p>
                  <p className="text-[13px] text-light/65 leading-[1.5]">{v.descripcion}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
