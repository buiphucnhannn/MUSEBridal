import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  light = false,
  className = "",
  size = "md",
}) {
  const sizes = {
    md: "text-[2rem] sm:text-[2.6rem] lg:text-[3rem]",
    lg: "text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem]",
  };
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light && "text-white/70")}>{eyebrow}</p>
      )}
      <h2 className={cn("h-display", sizes[size], light && "text-white")}>{title}</h2>
      {desc && (
        <p
          className={cn(
            "mt-5 text-[15px] leading-relaxed text-ink-soft sm:text-base",
            align !== "center" && "text-justify",
            light && "text-white/80"
          )}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
