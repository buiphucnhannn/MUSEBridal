"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import { servicesPage } from "@/data/site";
import { cn } from "@/lib/utils";
import { Amp } from "@/components/sections/Experience";

/**
 * Hành trình 4 bước: hàng số 01→04 nối bằng đường kẻ; bước đang chọn nở rộng thành thẻ ảnh + mô tả.
 * Rê chuột/chạm để đổi bước; tự chạy không cần (giữ tĩnh để người xem kiểm soát).
 */
export default function Journey() {
  const j = servicesPage.journey;
  const [i, setI] = useState(0);

  return (
    <section data-nav-theme="dark" className="screen relative flex items-center overflow-hidden bg-ink py-16 text-white lg:py-16">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full bg-mocha/35 blur-[150px]" />
      <Container wide className="relative">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow reveal text-blush-200">{j.eyebrow}</p>
            <SplitText text={j.title} className="h-display mt-4 text-[2.2rem] text-white sm:text-[2.8rem] lg:text-[3.1rem]" />
          </div>
          <p className="reveal hidden max-w-xs text-sm text-white/60 lg:block" style={{ "--reveal-delay": "200ms" }}>
            Rê chuột vào từng bước để xem chi tiết.
          </p>
        </div>

        {/* Desktop: 4 cột, cột đang chọn rộng hơn */}
        <div className="reveal mt-10 hidden gap-4 lg:flex" style={{ "--reveal-delay": "250ms" }}>
          {j.steps.map((s, idx) => {
            const on = i === idx;
            return (
              <button
                key={s.n}
                type="button"
                onPointerEnter={(e) => e.pointerType === "mouse" && setI(idx)}
                onFocus={() => setI(idx)}
                onClick={() => setI(idx)}
                className={cn(
                  "group relative h-[calc(var(--screen)*0.62)] overflow-hidden rounded-[1.75rem] text-left transition-[flex] duration-[800ms] ease-out",
                  on ? "flex-[2.6]" : "flex-[1]"
                )}
              >
                <Pic src={s.image} alt={s.title} fill sizes="(min-width:1024px) 50vw, 100vw" className={cn("object-cover transition-transform duration-[1400ms] ease-out", on ? "scale-100" : "scale-110")} style={{ objectPosition: s.pos }} />
                <div className={cn("absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10 transition-opacity duration-700", on ? "opacity-100" : "opacity-90")} />
                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-ink/30 font-serif text-lg text-white backdrop-blur">
                  {s.n}
                </span>
                {/* tên bước (dọc khi thu gọn) */}
                <span className={cn("absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-2xl text-white transition-all duration-500 [writing-mode:vertical-rl] rotate-180", on ? "pointer-events-none opacity-0" : "opacity-100")}>
                  {s.title}
                </span>
                <div className={cn("absolute inset-x-0 bottom-0 p-7 transition-all duration-700", on ? "translate-y-0 opacity-100 delay-200" : "translate-y-6 opacity-0")}>
                  <h3 className="font-serif text-3xl"><Amp text={s.title} ampClass="text-blush-200" /></h3>
                  <p className="mt-2 max-w-md text-justify text-sm leading-relaxed text-white/80">{s.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile: danh sách dọc có đường nối */}
        <ol className="relative mt-10 space-y-6 border-l border-white/15 pl-8 lg:hidden">
          {j.steps.map((s) => (
            <li key={s.n} className="reveal relative">
              <span className="absolute -left-[2.45rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-ink font-serif text-sm">{s.n}</span>
              <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-2xl">
                <Pic src={s.image} alt={s.title} fill sizes="90vw" className="object-cover" style={{ objectPosition: s.pos }} />
              </div>
              <h3 className="font-serif text-2xl"><Amp text={s.title} ampClass="text-blush-200" /></h3>
              <p className="mt-1 text-justify text-sm text-white/75">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
