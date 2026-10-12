import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-4 text-4xl sm:text-5xl">Trang này chưa có trong album.</h1>
      <p className="mt-4 max-w-md text-sm text-ink-soft">
        Đường dẫn bạn tìm không tồn tại. Quay về trang chủ để xem các bộ sưu tập của Muse Bridal.
      </p>
      <Button href="/" arrow className="mt-8">
        Về trang chủ
      </Button>
    </section>
  );
}
