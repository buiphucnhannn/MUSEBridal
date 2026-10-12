"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import Lightbox from "@/components/ui/Lightbox";
import Button from "@/components/ui/Button";
import { offers, siteConfig } from "@/data/site";
import { Watermark } from "@/components/ui/Ornaments";

/**
 * Ưu đãi mùa cưới: hai dải poster chạy ngược chiều nhau, rê chuột dừng, bấm để phóng to.
 */
export default function Offers() {
  const [idx, setIdx] = useState(null);
  return (
    <section id="offers" className="screen relative flex flex-col justify-center overflow-hidden bg-cream py-16 lg:py-6 2xl:py-10">
      <Watermark text="season offer" className="absolute right-[6%] top-24 hidden text-[7rem] text-mocha/[0.07] 2xl:block" />
      <Container wide className="mb-8 flex flex-col gap-6 lg:mb-6 lg:flex-row lg:items-center lg:justify-between 2xl:mb-10">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">{offers.eyebrow}</p>
          <SplitText text={offers.title} className="h-display mt-4 text-[2.2rem] sm:text-[2.8rem] lg:text-[2.6rem] 2xl:text-[3.1rem]" />
          <p className="reveal mt-5 max-w-lg text-justify text-sm leading-relaxed text-ink-soft 2xl:mt-6" style={{ "--reveal-delay": "200ms" }}>
            {offers.desc}
          </p>
        </div>
        <div className="reveal flex gap-3" style={{ "--reveal-delay": "250ms" }}>
          <Button href={siteConfig.facebook} external variant="outline">
            Xem trên Facebook
          </Button>
        </div>
      </Container>

      {/* Lưới poster 5x2 trong khung lề — không ảnh nào bị cắt */}
      <Container wide className="reveal" style={{ "--reveal-delay": "300ms" }}>
        <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-ink-muted sm:hidden">Vuốt ngang để xem thêm →</p>
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-3 2xl:gap-4">
          {offers.posters.slice(0, 10).map((p, i) => (
            <button
              key={p.src}
              onClick={() => setIdx(i)}
              className="group relative aspect-square w-[72vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-sand shadow-card sm:w-auto"
              aria-label={p.alt}
            >
              <Pic src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 18vw, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </Container>

      <Lightbox images={offers.posters} index={idx} onClose={() => setIdx(null)} onChange={setIdx} />
    </section>
  );
}
