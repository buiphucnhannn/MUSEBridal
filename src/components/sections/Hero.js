import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-blush-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blush-600">
            Studio váy cưới — TP. HCM
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] sm:text-6xl">
            Nàng thơ trong
            <br />
            ngày trọng đại
          </h1>
          <p className="mt-6 max-w-md text-charcoal-soft">
            Thiết kế riêng theo vóc dáng, fitting 1-1 cùng stylist. Hơn 500 cô dâu đã chọn MUSE cho
            ngày cưới của mình.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Đặt lịch thử váy</Button>
            <Button href="#gallery" variant="outline">
              Xem bộ sưu tập
            </Button>
          </div>
          <div className="mt-8 flex gap-8 text-sm">
            <div><p className="font-serif text-2xl">500+</p><p className="text-charcoal-soft">Cô dâu</p></div>
            <div><p className="font-serif text-2xl">120+</p><p className="text-charcoal-soft">Mẫu váy</p></div>
            <div><p className="font-serif text-2xl">4.9★</p><p className="text-charcoal-soft">Đánh giá</p></div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-blush-100 shadow-soft">
            {/* Thay bằng ảnh thật trong /public/images */}
            <img
              src="/images/hero.jpg"
              alt="Cô dâu MUSE Bridal"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold">Fitting miễn phí lần đầu</p>
            <p className="text-xs text-charcoal-soft">Kèm stylist riêng 60 phút</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
