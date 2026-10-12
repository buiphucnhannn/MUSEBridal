"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

/**
 * Lưới ảnh album (masonry bằng CSS columns) + lightbox.
 * images: [{src, alt}]
 */
export default function AlbumGallery({ images, name }) {
  const [idx, setIdx] = useState(null);

  return (
    <>
      {/* Lưới đều 3 cột (flex-wrap) — hàng cuối lẻ ảnh tự căn giữa */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIdx(i)}
            className={cn(
              "group reveal relative block aspect-[4/5] overflow-hidden rounded-xl bg-sand",
              "w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.7rem)] lg:w-[calc(33.333%-0.85rem)]"
            )}
            style={{ "--reveal-delay": `${(i % 3) * 80}ms` }}
            aria-label={`Xem ảnh ${i + 1} của ${name}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/15" />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/80 px-2 py-0.5 text-[10px] tracking-widest text-ink opacity-0 backdrop-blur transition group-hover:opacity-100">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <Lightbox images={images} index={idx} onClose={() => setIdx(null)} onChange={setIdx} />
    </>
  );
}
