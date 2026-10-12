import Container from "@/components/ui/Container";
import Pic from "@/components/ui/Pic";
import Parallax from "@/components/fx/Parallax";
import { about } from "@/data/site";
import { cn } from "@/lib/utils";
import { Watermark } from "@/components/ui/Ornaments";

/**
 * "Tuyên ngôn" của Muse: câu chữ lớn có ảnh nhỏ chèn giữa (editorial), bên phải ảnh lớn parallax.
 * Cao đúng một màn hình.
 */
export default function About() {
  return (
    <section id="about" className="screen relative flex items-center overflow-hidden bg-cream py-16 lg:py-20">
      {/* ánh hồng phấn mờ + họa tiết */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-blush/60 blur-[120px]" />
      <Watermark text="Muse" className="absolute -bottom-4 left-4 text-[6.5rem] text-mocha/[0.06] lg:-bottom-10 lg:left-6 lg:text-[20rem]" />

      <Container wide className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <h2 className="h-display text-[2.2rem] leading-[1.1] sm:text-[3.2rem] lg:text-[3.9rem] xl:text-[4.4rem]">
              {about.manifesto.map((t, i) =>
                t.img ? (
                  <span
                    key={i}
                    className="reveal relative mx-2 inline-block h-[0.82em] w-[1.75em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline shadow-card"
                    data-reveal="scale"
                    style={{ "--reveal-delay": `${i * 70}ms` }}
                  >
                    <Pic src={t.img} alt={t.alt} fill sizes="140px" className="object-cover" />
                  </span>
                ) : (
                  <span
                    key={i}
                    className={cn("reveal inline-block whitespace-nowrap", t.accent && "italic text-mocha")}
                    style={{ "--reveal-delay": `${i * 70}ms` }}
                  >
                    {t.text}&nbsp;
                  </span>
                )
              )}
            </h2>

            <div className="reveal mt-8 grid gap-6 text-justify text-[15px] leading-relaxed text-ink-soft sm:grid-cols-2 sm:gap-10 lg:gap-12" style={{ "--reveal-delay": "350ms" }}>
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="reveal mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-5" style={{ "--reveal-delay": "450ms" }}>
              {about.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-serif text-3xl text-mocha">{h.value}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">{h.label}</p>
                </div>
              ))}
            </div>

            {/* mobile: ảnh chính nhỏ */}
            <div className="reveal mt-8 h-[36svh] overflow-hidden rounded-[1.5rem] lg:hidden" data-reveal="clip">
              <div className="relative h-full w-full">
                <Pic src={about.main.src} alt={about.main.alt} fill sizes="100vw" className="object-cover object-[center_20%]" />
              </div>
            </div>
          </div>

          {/* Khối ảnh desktop */}
          <div className="relative hidden h-[calc(var(--screen)*0.7)] lg:block">
            <Parallax speed={0.07} className="absolute left-0 top-0 h-[82%] w-[70%]">
              <div className="reveal relative h-full w-full overflow-hidden rounded-[2rem]" data-reveal="clip">
                <Pic src={about.main.src} alt={about.main.alt} fill sizes="34vw" className="object-cover object-[center_15%]" />
              </div>
              <p className="absolute bottom-6 left-6 font-script text-5xl text-white drop-shadow-md">
                A story
                <br />
                <span className="pl-8">of us</span>
              </p>
            </Parallax>
            <Parallax speed={-0.05} className="absolute bottom-0 right-0 w-[46%]">
              <div className="polaroid reveal rotate-[4deg]" data-reveal="right" style={{ "--reveal-delay": "250ms" }}>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Pic src={about.polaroids[0].src} alt={about.polaroids[0].alt} fill sizes="22vw" className="object-cover object-top" />
                </div>
                <p className="mt-3 text-center font-script text-2xl text-ink-soft">{about.polaroids[0].caption}</p>
              </div>
            </Parallax>
          </div>
        </div>
      </Container>
    </section>
  );
}
