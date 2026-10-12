import { cn } from "@/lib/utils";

/**
 * Tách chữ thành từng từ/ký tự để hiện dần kiểu blur-in (như Framer).
 * - text: chuỗi chính; accent: phần in nghiêng màu nhấn ở cuối (tuỳ chọn)
 * - mode: "word" | "char"
 * - visible=true: chạy ngay khi mount; mặc định chờ cuộn tới (useReveal thêm .is-visible).
 */
export default function SplitText({
  text,
  accent,
  accentClass = "italic text-mocha",
  as: Tag = "h2",
  mode = "word",
  className = "",
  visible = false,
  step = 45,
  baseDelay = 0,
  manual = false, // true: chỉ hiện khi visible=true, useReveal bỏ qua
  breakBeforeAccent = false, // true: phần nhấn (accent) luôn xuống dòng riêng
}) {
  let i = 0;
  const render = (str, extra = "") => {
    const words = str.split(" ");
    return words.map((word, wi) => (
      <span key={`${wi}-${word}`} className="inline-block whitespace-nowrap">
        {mode === "char" ? (
          [...word].map((ch, ci) => (
            <span key={ci} className={cn("split-unit", extra)} style={{ "--i": i++ }}>
              {ch}
            </span>
          ))
        ) : (
          <span className={cn("split-unit", extra)} style={{ "--i": i++ }}>
            {word}
          </span>
        )}
        {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  };

  return (
    <Tag
      className={cn("split", visible && "is-visible", className)}
      data-manual={manual ? "" : undefined}
      style={{ "--step": `${step}ms`, "--base": `${baseDelay}ms` }}
    >
      {render(text)}
      {accent && (
        <>
          {breakBeforeAccent ? <br /> : <span className="inline-block">&nbsp;</span>}
          {render(accent, accentClass)}
        </>
      )}
    </Tag>
  );
}
