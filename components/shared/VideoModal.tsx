"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Video = {
  videoId: string;
  title?: string;
  subtitle?: string;
};

type Ctx = {
  open: (v: Video) => void;
  close: () => void;
};

const VideoModalContext = createContext<Ctx | null>(null);

export function useVideoModal() {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error("useVideoModal must be used within VideoModalProvider");
  return ctx;
}

export default function VideoModalProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (!video) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setVideo(null);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      const y = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(y || "0", 10) * -1);
      window.removeEventListener("keydown", onKey);
    };
  }, [video]);

  return (
    <VideoModalContext.Provider value={{ open: setVideo, close: () => setVideo(null) }}>
      {children}

      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            style={{
              background: "rgba(0, 0, 0, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            onClick={() => setVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label={video.title || "Reproducir video"}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[1280px] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={video.title || "Video"}
                className="w-full h-full rounded-xl md:rounded-2xl shadow-hover"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

              {video.title && (
                <div className="absolute -top-12 left-0 right-0 flex items-end justify-between gap-4 text-light pointer-events-none">
                  <div className="pointer-events-auto">
                    {video.subtitle && (
                      <p className="text-[10.5px] font-bold uppercase tracking-widewide text-light/70 mb-1.5">
                        {video.subtitle}
                      </p>
                    )}
                    <p className="text-[15px] md:text-[17px] font-semibold leading-tight">
                      {video.title}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setVideo(null)}
              aria-label="Cerrar video"
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-ink hover:bg-light/90 hover:scale-105 transition-all inline-flex items-center justify-center shadow-card"
            >
              <X size={20} strokeWidth={2.4} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </VideoModalContext.Provider>
  );
}
