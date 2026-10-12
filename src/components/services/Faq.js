"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SplitText from "@/components/fx/SplitText";
import Pic from "@/components/ui/Pic";
import { servicesPage, photos } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * FAQ: trái là ảnh polaroid + lời nhắn, phải là accordion câu hỏi (mở một mục một lúc).
 */
export default function Faq() {
  const f = servicesPage.faq;
  const [open, setOpen] = useState(0);
  return (
    <section className="relative flex items-center overflow-hidden bg-cream py-16 lg:pb-24 lg:pt-20">
      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative hidden lg:block">
            <div className="polaroid reveal w-[78%] -rotate-3" data-reveal="scale">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Pic src={photos.gardenJourney} alt="Our Journey" fill sizes="30vw" className="object-cover" />
              </div>
              <p className="mt-3 text-center font-script text-2xl text-ink-soft">ask us anything</p>
            </div>
            <div className="polaroid reveal absolute -right-2 bottom-10 w-[48%] rotate-[6deg]" data-reveal="scale" style={{ "--reveal-delay": "150ms" }}>
              <div className="relative aspect-square w-full overflow-hidden">
                <Pic src={photos.aodaiHyAn} alt="Hỷ An" fill sizes="20vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow reveal">{f.eyebrow}</p>
            <SplitText text={f.title} className="h-display mt-4 text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem]" />
            <ul className="reveal mt-8 divide-y divide-ink/10 border-y border-ink/10" style={{ "--reveal-delay": "200ms" }}>
              {f.items.map((it, i) => {
                const on = open === i;
                return (
                  <li key={it.q}>
                    <button type="button" onClick={() => setOpen(on ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left" aria-expanded={on}>
                      <span className={cn("font-serif text-xl transition-colors lg:text-[1.35rem]", on ? "text-mocha" : "text-ink")}>{it.q}</span>
                      <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500", on ? "rotate-45 border-mocha bg-mocha text-white" : "border-ink/15 text-ink")}>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                      </span>
                    </button>
                    <div className={cn("grid transition-[grid-template-rows,opacity] duration-500", on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <p className="overflow-hidden pb-5 pr-16 text-justify text-sm leading-relaxed text-ink-soft">{it.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
