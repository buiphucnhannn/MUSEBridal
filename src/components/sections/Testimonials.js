import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <SectionHeading eyebrow="Cảm nhận" title="Cô dâu nói gì về MUSE?" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-8 shadow-sm">
              <blockquote className="font-serif text-lg leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-blush-600">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
