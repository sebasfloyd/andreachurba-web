"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Check, Eye, X } from "lucide-react";

const ejemploNota = {
  fecha: "Última edición · 2026",
  titulo: "Cuando lo que antes funcionaba ya no alcanza",
  bajada: "Te pasa: usás las mismas herramientas, las mismas estrategias, el mismo discurso. Y los resultados ya no son los mismos.",
  parrafos: [
    "Es uno de los momentos más incómodos de cualquier carrera. Algo que te funcionó durante años deja de funcionar. Y no entendés qué pasó.",
    "La respuesta es simple y compleja al mismo tiempo: el contexto cambió. La gente con la que trabajás cambió. Tu rol probablemente cambió, aunque vos no te diste cuenta. Y seguís usando el mismo set de herramientas.",
    "El delay es ese desfasaje entre lo que el contexto pide y lo que vos seguís contándote sobre cómo se hacen las cosas. Vivimos con ese delay todo el tiempo. La diferencia entre quienes lo cierran y quienes no, es la conciencia.",
  ],
};

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const r = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setStatus("error");
        setErrorMsg(data.error || "No pude suscribirte. Probá de nuevo.");
        return;
      }
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Error de red. Probá de nuevo.");
    }
  }

  const beneficios = [
    "Ideas frescas sobre cambio, liderazgo y relato",
    "Anticipo del próximo libro Liderar los cambios",
    "Avisos de charlas y workshops abiertos",
    "Reflexiones que no salen en los diarios",
  ];

  return (
    <>
      <section id="newsletter" className="bg-bg py-4">
        <div className="container max-w-[1440px]">
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-violetDeep min-h-[480px]">
            <Image
              src="/images/andrea/andrea-azul.jpg"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover object-center opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-violet/30 via-violetDeep/40 to-bg/20" />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 p-7 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9 }}
              >
                <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/85 mb-5">
                  <Mail size={12} />
                  Newsletter de Andrea
                </p>
                <h2 className="text-light text-[clamp(26px,5vw,64px)] font-semibold tracking-tightest leading-[1.02] mb-5 text-balance">
                  Recibí lo que voy pensando, directo a tu inbox.
                </h2>
                <p className="text-[15px] md:text-[16px] text-light/85 leading-[1.55] max-w-md mb-5">
                  Cada tanto, una idea sobre cambio, liderazgo o relato identitario. Sin frecuencia fija. Sin spam.
                </p>

                <button
                  type="button"
                  onClick={() => setPreviewOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-light/90 hover:text-light underline underline-offset-4 decoration-light/30 hover:decoration-light transition-all mb-8"
                >
                  <Eye size={13} />
                  Mirar un ejemplo
                </button>

                <ul className="space-y-2.5">
                  {beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13.5px] md:text-[14.5px] text-light/90">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-light/15 text-light shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="flex flex-col justify-center"
              >
                {status === "ok" ? (
                  <div className="rounded-2xl bg-light/10 backdrop-blur p-7 md:p-8 border border-white/15 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-light text-violet mb-5">
                      <Check size={24} strokeWidth={2.5} />
                    </span>
                    <h3 className="text-light text-[20px] md:text-[22px] font-semibold mb-2">¡Listo!</h3>
                    <p className="text-[14px] text-light/85">
                      Revisá tu email para confirmar la suscripción.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="newsletter-email" className="block text-[10.5px] font-bold uppercase tracking-widewide text-light/65 mb-2.5">
                        Tu email
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hola@ejemplo.com"
                        className="w-full rounded-xl border border-white/25 bg-light/10 backdrop-blur px-4 py-3.5 text-[15px] text-light placeholder:text-light/45 focus:border-light focus:bg-light/15 focus:outline-none transition-all"
                        disabled={status === "loading"}
                      />
                    </div>
                    {status === "error" && errorMsg && (
                      <p className="text-[12.5px] text-orangeBright bg-orange/15 border border-orange/30 rounded-lg px-3 py-2">
                        {errorMsg}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center px-7 py-4 rounded-full btn-pill-light text-[13.5px] disabled:opacity-60"
                    >
                      {status === "loading" ? "Suscribiendo…" : "Suscribirme"}
                    </button>
                    <p className="text-[12px] text-light/55 text-center">
                      Salís cuando quieras. Tu mail no se comparte.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal preview newsletter */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setPreviewOpen(false)}
            className="fixed inset-0 z-[80] flex items-end md:items-center justify-center md:p-6"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Ejemplo del newsletter de Andrea Churba"
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:max-w-[680px] h-[92vh] md:h-auto md:max-h-[88vh] bg-light text-ink rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="md:hidden flex justify-center pt-3 pb-1">
                <span className="block w-10 h-1 rounded-full bg-ink/15" />
              </div>

              <header className="px-6 md:px-10 py-4 md:py-5 border-b border-lineLight flex items-center justify-between gap-4 bg-light z-10 shrink-0">
                <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-violet">
                  <Mail size={11} />
                  Ejemplo · Newsletter Andrea Churba
                </span>
                <button
                  onClick={() => setPreviewOpen(false)}
                  aria-label="Cerrar"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-lightWarm hover:bg-lineLight text-ink transition-colors"
                >
                  <X size={17} strokeWidth={2.4} />
                </button>
              </header>

              <div className="overflow-y-auto overscroll-contain flex-1 px-6 md:px-10 py-8 md:py-10" style={{ WebkitOverflowScrolling: "touch" }}>
                <p className="text-[10.5px] font-bold uppercase tracking-widewide text-ink3 mb-4">
                  {ejemploNota.fecha}
                </p>
                <h3 className="text-ink text-[clamp(22px,3vw,38px)] font-semibold leading-[1.05] tracking-tightest mb-5 text-balance">
                  {ejemploNota.titulo}
                </h3>
                <p className="font-serif italic text-[16px] md:text-[18px] text-ink2 leading-[1.5] mb-7 pb-7 border-b border-lineLight">
                  {ejemploNota.bajada}
                </p>
                <div className="space-y-4 text-[15.5px] md:text-[16.5px] text-ink leading-[1.7]">
                  {ejemploNota.parrafos.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 pt-7 border-t border-lineLight flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink text-light text-[12px] font-bold">
                    AC
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-ink leading-tight">Andrea Churba</p>
                    <p className="text-[11.5px] text-ink3 mt-0.5">Psicóloga · Coach de líderes</p>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    onClick={() => {
                      setPreviewOpen(false);
                      setTimeout(() => {
                        document.getElementById("newsletter-email")?.focus();
                      }, 300);
                    }}
                    className="w-full inline-flex items-center justify-center px-7 py-3.5 rounded-full btn-pill-dark text-[13px]"
                  >
                    Suscribirme al newsletter
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
