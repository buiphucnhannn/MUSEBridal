import Container from "@/components/ui/Container";
import SplitText from "@/components/fx/SplitText";
import Button from "@/components/ui/Button";
import { pricing, pricingRows } from "@/data/site";
import { Check } from "@/components/ui/Icons";
import { Bloom } from "@/components/ui/Ornaments";
import { cn } from "@/lib/utils";

/**
 * Bảng giá: 2 thẻ gói gọn trong một màn hình.
 * Thẻ nền trắng mờ hoà với nền kem, viền mảnh; quyền lợi xếp lưới 2x2 theo nhóm để thẻ thấp.
 */
export default function Pricing({ compact = false }) {
  const plans = pricing.plans;
  // Chiều cao tối thiểu từng nhóm quyền lợi = theo gói có nhiều dòng nhất → hai thẻ ngang hàng nhau
  const rowMin = pricingRows.map((row) => Math.max(...plans.map((p) => row[p.id].length)));

  return (
    <section id="pricing" className={cn("relative flex items-center overflow-hidden bg-cream", compact ? "py-16 lg:py-20" : "screen py-16 lg:py-14")}>
      <Bloom className="absolute bottom-8 left-[6%] hidden w-28 text-mocha/15 lg:block" />

      <Container wide>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr_1fr] lg:gap-7 xl:gap-8">
          {/* Cột trái: tiêu đề */}
          <div className="reveal self-center lg:pr-6">
            <p className="eyebrow">{pricing.eyebrow}</p>
            <SplitText text={pricing.title} className="h-display mt-4 text-[2.2rem] sm:text-[2.8rem] lg:text-[2.5rem] xl:text-[3rem]" />
            <p className="mt-5 max-w-sm text-justify text-sm leading-relaxed text-ink-soft">{pricing.note}</p>
          </div>

          {/* Hai thẻ gói */}
          {plans.map((p, i) => (
            <article
              key={p.id}
              className={cn(
                "reveal relative flex flex-col rounded-[1.75rem] border p-6 sm:p-7",
                p.highlight ? "border-mocha/30 bg-white shadow-soft" : "border-ink/10 bg-white/55"
              )}
              style={{ "--reveal-delay": `${150 + i * 120}ms` }}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-mocha px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                  Được chọn nhiều
                </span>
              )}

              <div className="flex items-start justify-between gap-4 text-center">
                <div className="w-full">
                  <p className="eyebrow">{p.sub}</p>
                  <h3 className="mt-1 font-serif text-[1.9rem] leading-tight text-ink">{p.name}</h3>
                  <p className="text-xs text-ink-muted">{p.tag}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-end justify-center gap-x-3 gap-y-1">
                <p className="font-serif text-[2.5rem] leading-none text-mocha">
                  {p.price}
                  <span className="ml-0.5 text-lg">{p.unit}</span>
                </p>
                <p className="pb-1 text-sm text-ink-muted line-through">
                  {p.oldPrice}
                  {p.unit}
                </p>
              </div>

              {/* Quyền lợi theo nhóm – lưới 2 cột cho thấp */}
              <div className="mt-5 grid gap-x-5 gap-y-4 border-t border-ink/10 pt-5 sm:grid-cols-2">
                {pricingRows.map((row, r) => (
                  <div key={row.label} style={{ minHeight: 22 + rowMin[r] * 22 }}>
                    <p className="mb-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">{row.label}</p>
                    <ul className="space-y-1">
                      {row[p.id].map((it) => (
                        <li key={it} className="flex items-start gap-2 whitespace-nowrap text-[12.5px] leading-snug text-ink-soft">
                          <Check className="mt-0.5 h-3 w-3 shrink-0 text-mocha" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <Button as="button" data-booking={p.id} variant={p.highlight ? "primary" : "outline"} arrow className="w-full">
                  Đăng ký gói {p.name}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
