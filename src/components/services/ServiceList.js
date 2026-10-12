import Link from "next/link";
import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import { servicesPage } from "@/data/site";
import { Amp } from "@/components/sections/Experience";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { Calla } from "@/components/ui/Ornaments";

/**
 * 5 dịch vụ chính: mỗi dịch vụ một hàng, ảnh dọc và chữ xen kẽ trái/phải (editorial zig-zag),
 * số thứ tự lớn mờ phía sau, 3 điểm nổi bật + nút tới gói/bộ sưu tập liên quan.
 */
export default function ServiceList() {
  const items = servicesPage.services;
  return (
    <section id="dich-vu-chinh" className="relative overflow-hidden bg-cream py-16 lg:pb-20 lg:pt-28">
      <Calla className="absolute right-[5%] top-20 hidden w-24 text-mocha/30 lg:block" />
      <Container wide>
        <div className="max-w-2xl">
          <p className="eyebrow reveal">Dịch vụ chính</p>
          <SplitText text="Năm điều Muse chuẩn bị cho ngày của hai bạn." className="h-display mt-4 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem]" />
        </div>

        <div className="mt-10 space-y-14 lg:mt-14 lg:space-y-20">
          {items.map((s, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article key={s.n} className={cn("relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20", flip && "lg:grid-cols-[1.1fr_0.9fr] lg:[&>*:first-child]:order-2")}>
                {/* Ảnh */}
                <div className={cn("reveal relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2rem] bg-sand lg:mx-0", flip && "lg:ml-auto")} data-reveal="clip">
                  <Pic src={s.image} alt={s.title} fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]" style={{ objectPosition: s.pos }} />
                  <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-ink backdrop-blur">{s.sub}</span>
                </div>

                {/* Chữ */}
                <div className="relative">
                  <span aria-hidden className="pointer-events-none absolute -left-4 -top-24 hidden select-none font-serif text-[12rem] leading-none text-mocha/[0.07] lg:block">
                    {s.n}
                  </span>
                  <div className="relative">
                    <p className="eyebrow reveal">{s.sub}</p>
                    <h3 className="reveal mt-3 font-serif text-[2rem] leading-tight text-ink sm:text-[2.4rem]" style={{ "--reveal-delay": "80ms" }}>
                      <Amp text={s.title} />
                    </h3>
                    <p className="reveal mt-5 max-w-md text-justify text-[15px] leading-relaxed text-ink-soft" style={{ "--reveal-delay": "160ms" }}>
                      {s.desc}
                    </p>
                    <ul className="reveal mt-6 space-y-2" style={{ "--reveal-delay": "240ms" }}>
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-mocha" />
                          <span><Amp text={p} /></span>
                        </li>
                      ))}
                    </ul>
                    <div className="reveal mt-7 flex flex-wrap gap-3" style={{ "--reveal-delay": "320ms" }}>
                      {s.packageId ? (
                        <button type="button" data-booking={s.packageId} className="group inline-flex items-center gap-2 rounded-full bg-mocha px-6 py-3 text-[13px] font-medium text-white transition hover:bg-mocha-dark">
                          Đặt lịch gói {s.sub} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      ) : (
                        <button type="button" data-booking className="group inline-flex items-center gap-2 rounded-full bg-mocha px-6 py-3 text-[13px] font-medium text-white transition hover:bg-mocha-dark">
                          Tư vấn ngay <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      )}
                      {s.collection && (
                        <Link href={`/bo-suu-tap/${s.collection}`} className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[13px] font-medium text-ink transition hover:border-mocha hover:text-mocha">
                          Xem bộ sưu tập
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
