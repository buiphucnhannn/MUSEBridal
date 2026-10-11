import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryItems } from "@/data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Bộ sưu tập"
          title="Những thiết kế được yêu thích nhất"
          desc="Bỏ ảnh thật vào thư mục /public/images với tên dress-1.jpg, dress-2.jpg, dress-3.jpg"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((g) => (
            <div key={g.src} className="aspect-[3/4] overflow-hidden rounded-3xl bg-blush-100">
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
