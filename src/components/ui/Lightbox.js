"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Close } from "@/components/ui/Icons";
import { lockScroll } from "@/lib/utils";

/**
 * Lightbox xem ảnh toàn màn hình.
 * props: images [{src, alt}], index (number|null), onClose, onChange(index)
 */
export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null && index !== undefined;
  const touchX = useRef(null);
  const total = images.length;

  const prev = useCallback(() => onChange((index - 1 + total) % total), [index, total, onChange]);
  const next = useCallback(() => onChange((index + 1) % total), [index, total, onChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    lockScroll(true);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [open, onClose, prev, next]);

  if (!open) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Đóng"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
      >
        <Close />
      </button>

      <div className="absolute left-5 top-5 text-xs tracking-[0.3em] text-white/60">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Ảnh trước"
            className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:flex"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Ảnh sau"
            className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:flex"
          >
            <ChevronRight />
          </button>
        </>
      )}

      <div
        className="relative h-[82vh] w-[92vw] max-w-5xl touch-pan-y select-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        }}
      >
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt || ""}
          fill
          sizes="92vw"
          className="object-contain"
          priority
        />
      </div>

      {img.alt && (
        <p className="absolute bottom-5 left-1/2 w-[90%] -translate-x-1/2 text-center text-xs text-white/70 sm:text-sm">
          {img.alt}
        </p>
      )}

      {/* vuốt trên mobile: 2 nút nhỏ dưới */}
      {total > 1 && (
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3 sm:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white"
            aria-label="Ảnh sau"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
