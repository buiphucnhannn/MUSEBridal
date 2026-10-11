import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-[2rem] bg-blush-600 px-8 py-14 text-center text-white shadow-soft">
          <h2 className="mx-auto max-w-xl font-serif text-3xl sm:text-4xl">
            Ưu đãi tháng này: fitting miễn phí + giảm 10% may đo
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Chỉ 20 suất mỗi tháng. Để lại thông tin, stylist gọi lại trong 30 phút.
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="outline" className="bg-white border-white">
              Nhận ưu đãi ngay
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
