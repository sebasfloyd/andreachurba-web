"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useVideoModal } from "./VideoModal";
import { cn } from "@/lib/utils";

type Props = {
  videoId: string;
  title: string;
  subtitle?: string;
  tag?: string;
  aspect?: "video" | "portrait" | "square";
  size?: "sm" | "md" | "lg";
  className?: string;
  index?: number;
};

export default function VideoCard({
  videoId,
  title,
  subtitle,
  tag,
  aspect = "portrait",
  size = "md",
  className,
  index = 0,
}: Props) {
  const { open } = useVideoModal();

  const aspectClass = aspect === "video" ? "aspect-video" : aspect === "square" ? "aspect-square" : "aspect-[3/4]";
  const playSize = size === "lg" ? "w-20 h-20 md:w-24 md:h-24" : size === "sm" ? "w-12 h-12" : "w-14 h-14 md:w-16 md:h-16";
  const playIcon = size === "lg" ? 26 : size === "sm" ? 16 : 20;
  const titleSize =
    size === "lg" ? "text-[clamp(22px,3vw,40px)]" : size === "sm" ? "text-[14px]" : "text-[18px]";

  return (
    <motion.button
      type="button"
      onClick={() => open({ videoId, title, subtitle })}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative block overflow-hidden bg-bgCard text-left w-full rounded-2xl",
        aspectClass,
        className,
      )}
      aria-label={`Reproducir ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/${size === "lg" ? "maxresdefault" : "hqdefault"}.jpg`}
        alt={title}
        fill
        sizes={size === "lg" ? "(max-width: 1024px) 100vw, 1280px" : "360px"}
        className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.85) 100%)" }}
      />

      {tag && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-light/15 backdrop-blur text-light text-[10px] font-bold uppercase tracking-widewide border border-white/20">
          {tag}
        </span>
      )}

      <span
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-light text-ink transition-all duration-500 group-hover:scale-110 shadow-card",
          playSize,
        )}
      >
        <Play size={playIcon} fill="currentColor" className="ml-0.5" />
      </span>

      <div className="absolute inset-0 p-5 flex flex-col justify-end text-light">
        <p className={cn("font-semibold leading-[1.1] tracking-tightmid text-balance", titleSize)}>
          {title}
        </p>
        {subtitle && (
          <p className="mt-1 text-[12px] text-light/70">
            {subtitle}
          </p>
        )}
      </div>
    </motion.button>
  );
}
