"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

type FAQ = { q: string; a: string; categoria: "Trabajo" | "Logística" | "Inversión" };

const faqs: FAQ[] = [
  {
    categoria: "Trabajo",
    q: "¿Trabajás solo con CEOs o también con personas que recién arrancan?",
    a: "Las dos cosas. Acompaño a CEOs y directoras de empresas grandes en sus puntos de inflexión. Y desde el voluntariado, acompaño a mujeres en su primera experiencia laboral. Ese cruce es lo que más me interesa del trabajo. Lo que importa es que estés en un punto de inflexión real.",
  },
  {
    categoria: "Trabajo",
    q: "¿Cómo sé si tu enfoque es para mí?",
    a: "Mi enfoque es para personas y equipos que quieren ir a fondo. No es coaching motivacional ni de high performance. Es trabajo psicológico aplicado al universo laboral. Si lo tuyo es revisar el relato identitario, los patrones de percepción, las decisiones que venís postergando: probablemente sí. Si buscás trucos rápidos: probablemente no.",
  },
  {
    categoria: "Trabajo",
    q: "¿Hacés solo coaching o también workshops y charlas?",
    a: "Hago las tres cosas. Procesos largos de cambio cultural en organizaciones. Coaching uno a uno con líderes. Y keynotes / workshops para eventos corporativos, jornadas y escuelas de negocio. Todo desde el mismo método: Business Therapy.",
  },
  {
    categoria: "Logística",
    q: "¿Cuánto dura un proceso típico?",
    a: "Los procesos individuales suelen ir entre 3 y 9 meses, con sesiones quincenales. Los procesos organizacionales son más largos: entre 6 y 18 meses, según la escala de la transformación. No vendo paquetes cerrados. La duración se acuerda según lo que necesite tu situación específica.",
  },
  {
    categoria: "Logística",
    q: "¿Trabajás presencial u online?",
    a: "Las dos cosas. Vivo en Buenos Aires y atiendo presencial acá. También trabajo online con líderes y equipos de toda Latinoamérica y Europa. Para procesos organizacionales muchas veces combinamos: kickoff presencial, seguimiento online, jornadas presenciales clave.",
  },
  {
    categoria: "Logística",
    q: "¿En qué idiomas trabajás?",
    a: "Español, inglés y portugués. He acompañado procesos en Argentina, Brasil, Chile, Colombia, Perú, México, Venezuela y otros países de la región.",
  },
  {
    categoria: "Logística",
    q: "¿Cómo empezamos?",
    a: "Por una conversación inicial de 30-45 minutos sin compromiso. Me escribís por el formulario, por mail o por WhatsApp y agendamos. Vos contás lo que está pasando, yo escucho. Si hay match, seguimos a un diagnóstico. Si no, te oriento a otra persona que pueda ayudarte mejor.",
  },
  {
    categoria: "Inversión",
    q: "¿Cuánto cuesta un proceso?",
    a: "Depende del tipo, la duración y la escala. Después de la conversación inicial te paso una propuesta concreta con todo detallado: alcance, frecuencia, formato, honorarios. No publico precios genéricos porque no creo en paquetes cerrados. Cada propuesta es a medida.",
  },
  {
    categoria: "Inversión",
    q: "¿Cómo se factura y qué métodos de pago aceptás?",
    a: "Para clientes corporativos, facturo a la empresa con factura A en Argentina o invoice internacional según corresponda. Para personas, puedo facturar en pesos o dólares según el caso, con transferencia bancaria, Mercado Pago o Stripe. Si necesitás un esquema en cuotas para procesos individuales, lo conversamos.",
  },
  {
    categoria: "Inversión",
    q: "¿Hay alguna garantía de resultados?",
    a: "Lo que puedo garantizarte es mi compromiso y mi método: voy a fondo, te acompaño con la profundidad que el proceso necesite, y trabajo para que el cambio sea sostenible. Pero los resultados dependen también de tu compromiso. No vendo magia. Vendo trabajo serio.",
  },
];

const categorias: Array<FAQ["categoria"] | "Todas"> = ["Todas", "Trabajo", "Logística", "Inversión"];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [cat, setCat] = useState<(typeof categorias)[number]>("Todas");

  const visibles = cat === "Todas" ? faqs : faqs.filter((f) => f.categoria === cat);

  return (
    <section className="bg-bg text-light py-20 md:py-32">
      <div className="container max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-10 text-center"
        >
          <p className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-light" />
            Preguntas frecuentes
          </p>
          <h2 className="text-light text-[clamp(30px,5vw,64px)] font-semibold tracking-tightest leading-[1.05] text-balance max-w-3xl mx-auto">
            Las dudas que más recibo.
          </h2>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-10"
        >
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setOpen(0);
              }}
              className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-widewide transition-all ${
                cat === c ? "bg-light text-ink" : "bg-bgSoft text-light/70 hover:bg-bgCard hover:text-light border border-line"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        <div className="space-y-2">
          {visibles.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={`${cat}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "bg-bgCard border-violet/40" : "bg-bgSoft border-line hover:border-light/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full px-5 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 text-left"
                >
                  <span className="flex-1">
                    <span className="block text-[9.5px] font-bold uppercase tracking-widewide text-violetSoft mb-1.5">
                      {f.categoria}
                    </span>
                    <span className="text-light text-[15.5px] md:text-[18px] font-semibold leading-[1.3] tracking-tightmid">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border transition-all duration-500 ${
                      isOpen ? "bg-violet border-violet text-light rotate-45" : "border-line text-light/70"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-8 pb-6 md:pb-7 text-[14.5px] md:text-[15.5px] text-light/80 leading-[1.65] max-w-3xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-[15px] text-light/70 mb-5">
            ¿Tu pregunta no está acá?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-7 py-3.5 rounded-full btn-pill-light text-[13.5px]"
          >
            Escribime directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
