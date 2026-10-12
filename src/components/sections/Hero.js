"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import { hero } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";

const TICK = 2600; // mỗi 2.6s đổi ảnh ở 1 cột (lần lượt các cột)

/**
 * Hero "bộ ba" (triptych): 3 cột ảnh dọc kín màn hình trên desktop — ảnh dọc gốc gần như không bị cắt
 * nên sắc nét tối đa. Mobile dùng cột giữa phủ toàn màn hình.
 */
export default function Hero() {
  const cols = hero.columns;
  const [idx, setIdx] = useState(cols.map(() => 0));
  const [ready, setReady] = useState(false); // màn chào đã kéo lên?
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (document.documentElement.classList.contains("is-ready")) return setReady(true);
    const on = () => setReady(true);
    window.addEventListener("muse:ready", on);
    const fallback = setTimeout(on, 4000); // phòng khi không có preloader
    return () => {
      window.removeEventListener("muse:ready", on);
      clearTimeout(fallback);
    };
  }, []);
  // Trước khi màn chào kéo lên: ẩn; khi ready mới gắn class animation (delay tính từ lúc đó)
  const anim = (cls) => (ready ? cls : "opacity-0");
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // Parallax: khi cuộn xuống, ảnh hero trôi theo chậm hơn trang (depth), nội dung chữ trôi nhanh hơn và mờ dần
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y > vh * 1.2) return;
      if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${(y * 0.28).toFixed(1)}px, 0)`;
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${(y * 0.12).toFixed(1)}px, 0)`;
        textRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.7)));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Chỉ bắt đầu xoay vòng ảnh sau khi màn chào đã kéo lên (không tính thời gian chờ)
  useEffect(() => {
    if (!ready) return;
    const t = setInterval(() => setTick((v) => v + 1), TICK);
    return () => clearInterval(t);
  }, [ready]);

  useEffect(() => {
    if (tick === 0) return;
    const col = tick % cols.length;
    setIdx((prev) => prev.map((v, c) => (c === col ? (v + 1) % cols[c].length : v)));
  }, [tick, cols]);

  return (
    <section id="top" data-nav-theme="dark" className="relative h-[var(--screen)] min-h-[640px] w-full overflow-hidden bg-ink" aria-label="Giới thiệu Muse Bridal">
      {/* 3 cột ảnh */}
      <div ref={imgRef} className="absolute inset-0 grid grid-cols-1 will-change-transform lg:grid-cols-3">
        {cols.map((col, c) => (
          <div
            key={c}
            className={cn("relative h-full overflow-hidden", ready ? "hero-panel" : "opacity-0", c !== 1 && "hidden lg:block")}
            style={{ animationDelay: `${c * 120}ms` }}
          >
            {col.map((s, i) => (
              <div
                key={s.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-[1500ms] ease-out",
                  i === idx[c] ? "opacity-100" : "opacity-0"
                )}
                aria-hidden={i !== idx[c]}
              >
                <Pic
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className={cn("object-cover", i === idx[c] && "animate-kenburns")}
                  style={{ objectPosition: s.pos }}
                />
              </div>
            ))}
            {/* vệt sáng mảnh giữa các cột */}
            {c > 0 && <span className="absolute inset-y-0 left-0 hidden w-px bg-white/15 lg:block" />}
          </div>
        ))}
      </div>

      {/* Overlay: tối dần ở đáy để đọc chữ, giữ phần trên ảnh trong và sắc */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/5" />

      {/* Nội dung giữa – dưới */}
      <div ref={textRef} className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-24 text-center text-white will-change-transform sm:pb-[max(7rem,calc(var(--screen)*0.12))] [@media(min-height:1000px)]:pb-[calc(var(--screen)*0.22)]">
        <p className={cn("eyebrow mb-5 text-white/80", anim("[animation:fadeUp_1s_.8s_both]"))}>{hero.eyebrow}</p>
        <SplitText
          as="h1"
          mode="char"
          text={hero.title}
          accent={hero.titleAccent}
          accentClass="italic text-blush-200"
          visible={ready}
          manual
          step={26}
          baseDelay={950}
          className="h-display max-w-5xl text-[2.9rem] leading-[1.02] text-white sm:text-[4.2rem] lg:text-[5.4rem] xl:text-[6.2rem]"
        />
        <p className={cn("mt-6 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-base", anim("[animation:fadeUp_1s_1.7s_both]"))}>
          {hero.desc}
        </p>
        <div className={cn("mt-8 flex flex-wrap items-center justify-center gap-3", anim("[animation:fadeUp_1s_1.95s_both]"))}>
          <Link
            href="/bo-suu-tap"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-medium text-ink transition hover:bg-blush"
          >
            Khám phá bộ sưu tập
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mocha text-white transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      {/* Dải nhãn dưới cùng (desktop) */}
      <ul className={cn("absolute inset-x-0 bottom-6 z-10 hidden items-center justify-center gap-6 text-[11px] uppercase tracking-[0.25em] text-white/70 lg:flex", anim("[animation:fadeUp_1s_2.2s_both]"))}>
        {hero.badges.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-blush-200" />
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}
