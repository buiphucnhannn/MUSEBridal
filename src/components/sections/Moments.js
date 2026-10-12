"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import Lightbox from "@/components/ui/Lightbox";
import useScrollProgress from "@/hooks/useScrollProgress";
import { moments } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";
import { Calla } from "@/components/ui/Ornaments";

/**
 * Khoảnh khắc — 3 biến thể, cùng một bộ ảnh:
 * 1. Desktop, viewport ≤ 1080px (.pin-only): section ghim, dải ảnh chạy NGANG theo chiều cuộn dọc.
 * 2. Desktop, viewport cao hơn 1080px (.stack-only, zoom nhỏ / màn 1440p+): cùng bố cục với panel ghim
 *    (section cao 1 "màn hình", thẻ giới thiệu bên trái, ảnh cùng kích thước) nhưng không ghim — kéo chuột
 *    hoặc cuộn ngang để lướt; dải tự căn giữa nếu vừa màn.
 * 3. Mobile (<1024px): tiêu đề trên, dải vuốt ngang bên dưới.
 */
export default function Moments() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const scrollerRef = useRef(null);
  const drag = useRef({ on: false, x: 0, left: 0, moved: false });
  const [max, setMax] = useState(0);
  const [idx, setIdx] = useState(null);
  const p = useScrollProgress(ref);

  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      if (!t) return;
      setMax(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  // Kéo chuột để lướt dải (biến thể 2). Chạm/trackpad dùng cuộn ngang native.
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { on: true, x: e.clientX, left: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.on) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) d.moved = true;
    scrollerRef.current.scrollLeft = d.left - dx;
  };
  const endDrag = (e) => {
    const d = drag.current;
    if (!d.on) return;
    d.on = false;
    try {
      scrollerRef.current?.releasePointerCapture?.(e.pointerId);
    } catch {}
    setTimeout(() => (drag.current.moved = false), 0);
  };

  const sizeCls = (s) =>
    s === "tall" ? "h-[calc(var(--screen)*0.62)] aspect-[2/3]" : "h-[calc(var(--screen)*0.44)] aspect-square";

  // Hàm render dùng chung cho biến thể 1 & 2 (gọi như hàm, KHÔNG dùng như component: component khai báo trong
  // thân hàm sẽ bị React tạo lại mỗi lần render → cả dải remount liên tục khi cuộn ở bản ghim)
  const cardEl = (m, i) => (
    <button
      key={m.src}
      onClick={() => {
        if (drag.current.moved) return;
        setIdx(i);
      }}
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-[1.5rem] bg-sand shadow-card",
        sizeCls(m.size),
        i % 3 === 1 ? "translate-y-10" : i % 3 === 2 ? "-translate-y-8" : ""
      )}
      aria-label={m.alt}
    >
      <Pic src={m.src} alt={m.alt} fill sizes="34vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
      <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/70 to-transparent p-4 text-left text-xs text-white transition-transform duration-500 group-hover:translate-y-0">
        {m.alt}
      </span>
    </button>
  );

  const introEl = (hint, widthCls = "w-[30vw] max-w-[560px]") => (
    <div className={cn("relative shrink-0 pr-10", widthCls)}>
      <Calla className="absolute -top-32 right-16 w-24 text-mocha/35" />
      <p className="eyebrow reveal">{moments.eyebrow}</p>
      <h2 className="h-display reveal mt-4 text-[3rem] xl:text-[3.6rem]" style={{ "--reveal-delay": "100ms" }}>
        {moments.title}
      </h2>
      <p className="reveal mt-5 max-w-sm text-justify text-sm text-ink-soft" style={{ "--reveal-delay": "200ms" }}>
        {hint} — bấm vào ảnh để xem rõ hơn.
      </p>
      <div className="reveal mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink-muted" style={{ "--reveal-delay": "300ms" }}>
        Cuộn <span className="block h-px w-16 bg-ink/20" /> <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
  const endCardEl = () => (
    <Link
      href="/bo-suu-tap"
      className="group flex h-[calc(var(--screen)*0.44)] w-[24vw] max-w-[340px] shrink-0 flex-col items-center justify-center rounded-[1.5rem] border border-ink/10 bg-cream-200 text-center transition hover:bg-mocha hover:text-white"
    >
      <p className="font-serif text-3xl">Xem tất cả</p>
      <p className="mt-1 text-xs opacity-70">4 bộ sưu tập theo concept</p>
      <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-current">
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );

  return (
    <div id="moments">
      {/* 1. Desktop ghim (viewport ≤ 1080px) */}
      <section ref={ref} className="pin-only relative h-[calc(var(--screen)*3.2)] bg-cream">
        <div className="sticky top-0 flex h-[var(--screen)] items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-6 pl-10 pr-10 will-change-transform"
            style={{ transform: `translate3d(${(-p * max).toFixed(1)}px,0,0)` }}
          >
            {introEl("Cuộn tiếp để lướt qua những khung hình được Muse ghi lại")}
            {moments.items.map((m, i) => cardEl(m, i))}
            {endCardEl()}
          </div>
        </div>
      </section>

      {/* 2. Desktop không ghim (viewport cao hơn 1080px): cùng bố cục panel ghim nhưng nằm trong khung lề 1440px
          (hai mép đối xứng như các section khác), kéo chuột để lướt. Track có đệm dọc để thẻ lệch dòng không bị clip. */}
      <section className="stack-only screen hidden items-center bg-cream py-16 lg:flex">
        <Container wide>
          <div
            ref={scrollerRef}
            className="no-scrollbar w-full cursor-grab select-none overflow-x-auto active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
          >
            <div className="mx-auto flex w-max items-center gap-6 py-12">
              {introEl("Kéo ngang để lướt qua những khung hình được Muse ghi lại", "w-[26vw] max-w-[460px]")}
              {moments.items.map((m, i) => cardEl(m, i))}
              {endCardEl()}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mobile: tiêu đề trên, dải vuốt ngang */}
      <section className="bg-cream py-16 lg:hidden">
        <div className="px-5">
          <p className="eyebrow reveal">{moments.eyebrow}</p>
          <h2 className="h-display reveal mt-3 text-[2.1rem]" style={{ "--reveal-delay": "100ms" }}>
            {moments.title}
          </h2>
        </div>
        <p className="mt-3 px-5 text-[11px] uppercase tracking-[0.25em] text-ink-muted">Vuốt ngang để xem thêm →</p>
        <div className="no-scrollbar mt-5 flex snap-x gap-4 overflow-x-auto px-5">
          {moments.items.map((m, i) => (
            <button
              key={m.src}
              onClick={() => setIdx(i)}
              className={cn("relative shrink-0 snap-center overflow-hidden rounded-2xl bg-sand", m.size === "tall" ? "h-[calc(var(--screen)*0.52)] aspect-[2/3]" : "h-[calc(var(--screen)*0.52)] aspect-[4/5]")}
              aria-label={m.alt}
            >
              <Pic src={m.src} alt={m.alt} fill sizes="70vw" className="object-cover" />
            </button>
          ))}
        </div>
        <div className="mt-6 px-5">
          <Link href="/bo-suu-tap" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-mocha hover:text-mocha">
            Xem tất cả bộ sưu tập <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Lightbox images={moments.items} index={idx} onClose={() => setIdx(null)} onChange={setIdx} />
    </div>
  );
}
