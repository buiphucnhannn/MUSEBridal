"use client";

import { useRef } from "react";
import Link from "next/link";
import Pic from "@/components/ui/Pic";
import useScrollProgress from "@/hooks/useScrollProgress";
import { packages } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Hai gói chụp — section "ghim" (sticky): cuộn xuống, ảnh nền và nội dung chuyển từ gói 01 sang gói 02.
 * Mobile: hai thẻ xếp dọc.
 */
export default function Packages() {
  const ref = useRef(null);
  const p = useScrollProgress(ref);
  const active = p < 0.5 ? 0 : 1;

  const goTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const total = el.offsetHeight - window.innerHeight;
    const y = top + total * (i === 0 ? 0.12 : 0.88);
    if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.2 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div id="packages" data-nav-theme="dark">
      {/* Desktop: pinned */}
      <section ref={ref} className="pin-only relative h-[calc(var(--screen)*2.3)] bg-ink">
        <div className="sticky top-0 h-[var(--screen)] overflow-hidden">
          {packages.map((pk, i) => (
            <div
              key={pk.id}
              className={cn("absolute inset-0 transition-opacity duration-[1100ms] ease-out", active === i ? "opacity-100" : "opacity-0")}
              style={{ transform: `scale(${1 + Math.abs(p - (i === 0 ? 0.2 : 0.8)) * 0.06})` }}
            >
              <Pic src={pk.image} alt={`${pk.name} – ${pk.sub}`} fill sizes="100vw" className={cn("object-cover", pk.imageFx)} style={{ objectPosition: pk.imagePos }} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

          <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-center px-10">
            <p className="eyebrow text-white/70">Gói chụp ảnh cưới</p>
            <div className="mt-6 space-y-10">
              {packages.map((pk, i) => {
                const on = active === i;
                return (
                  <button
                    key={pk.id}
                    onClick={() => goTo(i)}
                    className={cn("block max-w-xl text-left transition-all duration-700", on ? "opacity-100" : "opacity-35 hover:opacity-60")}
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-serif text-2xl text-blush-200">{pk.index}</span>
                      <h3 className={cn("font-serif text-white transition-all duration-700", on ? "text-6xl xl:text-7xl" : "text-4xl")}>
                        {pk.name}
                      </h3>
                    </div>
                    <div className={cn("grid transition-[grid-template-rows,opacity] duration-700", on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/70">{pk.sub}</p>
                        <p className="mt-3 max-w-md text-justify text-[15px] leading-relaxed text-white/85">{pk.desc}</p>
                        <div className="mt-6 flex gap-3">
                          <Link href="/#pricing" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-medium text-ink transition hover:bg-blush">
                            Xem quyền lợi & giá <ArrowRight className="h-4 w-4" />
                          </Link>
                          <Link href={`/bo-suu-tap/${pk.collectionSlug}`} className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-[13px] font-medium text-white transition hover:bg-white/15">
                            Xem album
                          </Link>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* thanh tiến độ dọc bên phải */}
          <div className="absolute right-10 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 text-white/70">
            <span className="text-[11px] tracking-[0.3em]">01</span>
            <span className="relative block h-40 w-px bg-white/25">
              <span className="absolute left-0 top-0 w-px bg-white transition-[height] duration-200" style={{ height: `${p * 100}%` }} />
            </span>
            <span className="text-[11px] tracking-[0.3em]">02</span>
          </div>
          <p
            className={cn(
              "absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-white/60 transition-opacity duration-500",
              p > 0.42 ? "opacity-0" : "opacity-100"
            )}
          >
            Cuộn để xem gói tiếp theo
          </p>
        </div>
      </section>

      {/* Mobile (và desktop khi viewport cao hơn 1080px): 2 panel xếp chồng, mỗi panel đúng 1 "màn hình" */}
      <section className="stack-only grid">
        {packages.map((pk, i) => (
          <article key={pk.id} className="reveal relative h-[78svh] min-h-[520px] overflow-hidden bg-ink lg:h-[var(--screen)]" style={{ "--reveal-delay": `${i * 100}ms` }}>
            <Pic src={pk.image} alt={`${pk.name} – ${pk.sub}`} fill sizes="100vw" className={cn("object-cover", pk.imageFx)} style={{ objectPosition: pk.imagePos }} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/40 lg:to-transparent" />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/60 via-transparent to-ink/20 lg:block" />
            <div className="absolute inset-0 flex flex-col justify-end p-7 lg:mx-auto lg:max-w-[1440px] lg:justify-center lg:px-10">
              <p className="font-serif text-2xl text-blush-200 lg:text-3xl">{pk.index}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/70">{pk.sub}</p>
              <h3 className="mt-1 font-serif text-4xl text-white lg:text-6xl xl:text-7xl">{pk.name}</h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-white/85 lg:max-w-md lg:text-[15px]">{pk.desc}</p>
              <div className="mt-5 flex flex-wrap gap-3 lg:mt-6">
                <Link href="/#pricing" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-medium text-ink">
                  Xem gói chụp <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={`/bo-suu-tap/${pk.collectionSlug}`} className="inline-flex items-center rounded-full border border-white/50 px-5 py-3 text-[13px] font-medium text-white">
                  Xem album
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
