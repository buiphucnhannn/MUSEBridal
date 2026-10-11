import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/site";

export default function Features() {
  return (
    <section id="services" className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Mọi thứ nàng cần cho ngày cưới"
          desc="Từ may đo tới thuê, makeup và chụp ảnh — gói gọn trong một studio."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-black/5 bg-cream p-8 shadow-sm hover:shadow-soft transition-shadow">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
