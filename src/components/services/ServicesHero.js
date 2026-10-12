import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import SplitText from "@/components/fx/SplitText";
import Parallax from "@/components/fx/Parallax";
import { servicesPage } from "@/data/site";
import { ArrowRight } from "@/components/ui/Icons";
import { Watermark } from "@/components/ui/Ornaments";

/**
 * Hero trang Dịch vụ: chữ bên trái, bên phải 3 ảnh dọc so le (ảnh giữa cao hơn) có parallax.
 */
export default function ServicesHero() {
  const h = servicesPage.hero;
  const [a, b, c] = h.images;
  return (
    <section className="screen relative flex items-center overflow-hidden bg-cream pb-12 pt-28 lg:pb-16 lg:pt-24">
      <Watermark text="Services" className="absolute -left-2 bottom-2 text-[5.5rem] text-mocha/[0.05] lg:-left-4 lg:bottom-4 lg:text-[16rem]" />
      <Container wide className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="eyebrow reveal">{h.eyebrow}</p>
            <SplitText text={h.title} accent={h.accent} breakBeforeAccent className="h-display mt-5 text-[2.6rem] leading-[1.18] sm:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem]" />
            <p className="reveal mt-6 max-w-lg text-justify text-[15px] leading-relaxed text-ink-soft sm:text-base" style={{ "--reveal-delay": "250ms" }}>
              {h.desc}
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ "--reveal-delay": "350ms" }}>
              <button
                type="button"
                data-booking
                className="group inline-flex items-center gap-3 rounded-full bg-mocha py-1.5 pl-6 pr-1.5 text-sm font-medium text-white shadow-card transition hover:bg-mocha-dark"
              >
                Đặt lịch tư vấn
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-mocha transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <a href="#goi-chup" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition hover:border-mocha hover:text-mocha">
                Xem hai gói chụp
              </a>
            </div>
            <ul className="reveal mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7 sm:flex sm:gap-10" style={{ "--reveal-delay": "450ms" }}>
              {h.stats.map((s) => (
                <li key={s.label}>
                  <p className="font-serif text-3xl text-mocha">{s.value}</p>
                  <p className="mt-1 text-xs text-ink-soft">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 ảnh dọc so le */}
          {/* mobile: 3 khung hẹp thấy đủ, cao 52vw (≈1.9× rộng) để thấy trọn người; lg: lưới so le như cũ */}
          <div className="relative mb-10 grid h-[52vw] grid-cols-3 items-end gap-3 lg:mb-0 lg:h-[calc(var(--screen)*0.66)] lg:gap-4">
            <Parallax desktopOnly speed={0.05} className="h-[78%]">
              <div className="reveal relative h-full w-full overflow-hidden rounded-[1.5rem] bg-sand" data-reveal="clip">
                <Pic src={a.src} alt={a.alt} fill sizes="(min-width:1024px) 18vw, 30vw" className="object-cover" style={{ objectPosition: a.pos }} />
              </div>
            </Parallax>
            <Parallax desktopOnly speed={-0.04} className="h-full">
              <div className="reveal relative h-full w-full overflow-hidden rounded-[1.5rem] bg-sand" data-reveal="clip" style={{ "--reveal-delay": "120ms" }}>
                <Pic src={b.src} alt={b.alt} fill priority sizes="(min-width:1024px) 18vw, 30vw" className="object-cover" style={{ objectPosition: b.pos }} />
              </div>
            </Parallax>
            <Parallax desktopOnly speed={0.07} className="h-[86%]">
              <div className="reveal relative h-full w-full overflow-hidden rounded-[1.5rem] bg-sand" data-reveal="clip" style={{ "--reveal-delay": "240ms" }}>
                <Pic src={c.src} alt={c.alt} fill sizes="(min-width:1024px) 18vw, 30vw" className="object-cover" style={{ objectPosition: c.pos }} />
              </div>
            </Parallax>
            <p className="pointer-events-none absolute -bottom-9 right-0 font-script text-3xl text-mocha">one shoot, every detail</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
