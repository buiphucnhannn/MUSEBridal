"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import Button from "@/components/ui/Button";
import { experience } from "@/data/site";
import { iconMap } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { Bloom } from "@/components/ui/Ornaments";

// Dấu "&" trong tiêu đề serif khó đọc → đổi sang sans mảnh màu mocha
export const Amp = ({ text, ampClass = "text-mocha" }) =>
  text.split("&").map((part, i, arr) => (
    <span key={i}>
      {part}
      {i < arr.length - 1 && <span className={"font-sans font-light text-[0.85em] " + ampClass}>&amp;</span>}
    </span>
  ));

// Vị trí các ảnh trong "xấp ảnh": 0 = trên cùng
const DECK = [
  { r: 0, x: 0, y: 0, s: 1, o: 1 },
  { r: 6, x: 44, y: 18, s: 0.96, o: 0.95 },
  { r: -7, x: -44, y: 28, s: 0.93, o: 0.9 },
  { r: 10, x: 60, y: 44, s: 0.9, o: 0.85 },
];

/**
 * Dịch vụ: bên trái là xấp ảnh lệch góc, mục đang chọn trượt lên trên cùng;
 * bên phải danh sách dịch vụ kiểu biên tập, rê chuột/chạm để đổi.
 */
export default function Experience() {
  const [i, setI] = useState(0);
  const items = experience.services;
  const n = items.length;

  return (
    <section id="experience" className="screen relative flex items-center overflow-hidden bg-cream py-16 lg:py-14">
      <Bloom className="absolute bottom-8 right-[7%] hidden w-28 text-mocha/20 lg:block" />

      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          {/* Xấp ảnh */}
          <div className="relative order-last mx-auto aspect-[4/5] h-[50svh] max-w-[calc(100%-2.5rem)] [--deck-k:0.45] lg:order-none lg:ml-0 lg:mr-0 lg:h-[calc(var(--screen)*0.61)] lg:w-auto lg:max-w-full lg:[--deck-k:0.4] xl:ml-16 xl:[--deck-k:0.75] 2xl:[--deck-k:1]">
            {items.map((s, idx) => {
              const pos = DECK[(idx - i + n) % n];
              const top = idx === i;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={s.title}
                  className="absolute inset-0 overflow-hidden rounded-[1.75rem] bg-sand shadow-[0_30px_60px_-30px_rgba(43,36,32,0.45)] transition-all duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{
                    transform: `translate3d(calc(${pos.x}px * var(--deck-k, 1)), calc(${pos.y}px * var(--deck-k, 1)), 0) rotate(${pos.r}deg) scale(${pos.s})`,
                    opacity: pos.o,
                    zIndex: 40 - ((idx - i + n) % n) * 10,
                  }}
                >
                  <Pic src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" style={{ objectPosition: s.imagePos }} />
                  <span className={cn("absolute inset-0 bg-ink/0 transition-colors duration-500", !top && "bg-cream/20")} />
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 pt-16 text-left text-white transition-opacity duration-500",
                      top ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-white/70">
                      {String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block font-serif text-2xl">
                      <Amp text={s.title} ampClass="text-blush-200" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Danh sách */}
          <div>
            <p className="eyebrow reveal">{experience.eyebrow}</p>
            <SplitText text={experience.title} className="h-display mt-4 text-[2.1rem] sm:text-[2.6rem] lg:text-[2.7rem] xl:text-[2.9rem]" />
            <ul className="reveal mt-6 divide-y divide-ink/10 border-y border-ink/10" style={{ "--reveal-delay": "200ms" }}>
              {items.map((s, idx) => {
                const Icon = iconMap[s.icon];
                const on = i === idx;
                return (
                  <li
                    key={s.title}
                    // Chỉ đổi mục khi rê CHUỘT ở bố cục desktop (≥1024px). Ở mobile (kể cả khi dùng chuột trên cửa sổ hẹp)
                    // chỉ bấm mới chuyển — tránh việc cuộn làm nội dung trôi dưới con trỏ rồi tự đổi mục.
                    onPointerEnter={(e) => e.pointerType === "mouse" && window.matchMedia("(min-width: 1024px)").matches && setI(idx)}
                    onClick={() => setI(idx)}
                    className={cn("group flex cursor-pointer items-start gap-4 py-3.5 transition-all duration-500 lg:py-4", on ? "opacity-100" : "opacity-55 hover:opacity-90")}
                  >
                    <span className={cn("mt-0.5 font-serif text-xl transition-colors", on ? "text-mocha" : "text-ink-muted")}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className={cn("flex h-8 w-8 items-center justify-center rounded-full transition-colors", on ? "bg-mocha text-white" : "bg-blush text-mocha")}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="font-serif text-xl text-ink lg:text-[1.5rem]">
                          <Amp text={s.title} />
                        </h3>
                      </div>
                      <div className={cn("grid transition-[grid-template-rows,opacity] duration-500", on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                        <p className="overflow-hidden pl-11 pt-1.5 text-justify text-[13.5px] leading-relaxed text-ink-soft">{s.desc}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="reveal mt-5" style={{ "--reveal-delay": "300ms" }}>
              <Button href="/dich-vu" variant="ghost" arrow className="hidden lg:inline-flex">
                Xem đầy đủ dịch vụ <span className="font-sans font-light text-mocha">&amp;</span> gói chụp
              </Button>
              <Button href="/dich-vu" variant="outline" arrow className="lg:hidden">
                Xem đầy đủ dịch vụ <span className="font-sans font-light">&amp;</span> gói chụp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
