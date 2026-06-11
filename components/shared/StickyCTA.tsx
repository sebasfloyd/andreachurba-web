"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = h > 0 ? y / h : 0;
      setShow(ratio > 0.22 && ratio < 0.92);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 pointer-events-none pb-4 px-4 hidden md:flex justify-center"
        >
          <div className="pointer-events-auto inline-flex items-center gap-4 px-5 py-3 rounded-full bg-light text-ink shadow-hover border border-lineLight">
            <span className="text-[13px] font-medium pl-2">
              ¿Estás en un punto de inflexión?
            </span>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ink text-light text-[12px] font-bold uppercase tracking-widewide hover:bg-violetDeep transition-colors"
            >
              Hablemos
              <ArrowRight size={13} />
            </a>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Cerrar"
              className="inline-flex items-center justify-center w-7 h-7 rounded-full text-ink3 hover:text-ink hover:bg-lightWarm transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
