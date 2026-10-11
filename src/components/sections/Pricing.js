import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { pricings } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <Container>
        <SectionHeading eyebrow="Bảng giá" title="Minh bạch, không phí ẩn" />
        <div className="grid gap-6 md:grid-cols-3">
          {pricings.map((p) => (
            <div
              key={p.name}
              className={cn(
                "rounded-3xl border p-8",
                p.highlight ? "border-charcoal bg-charcoal text-white shadow-soft" : "bg-cream"
              )}
            >
              <p className="text-sm font-bold uppercase tracking-widest opacity-70">{p.name}</p>
              <p className="mt-2 font-serif text-4xl">{p.price}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <Button href="#contact" variant={p.highlight ? "gold" : "outline"} className="mt-8 w-full">
                Chọn gói này
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
