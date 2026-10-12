import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Nút dùng chung. variant: primary | outline | light | ghost
 * Tự động hiện mũi tên nếu arrow=true.
 */
export default function Button({
  children,
  href = "/#contact",
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  external = false,
  as,
  ...rest
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 whitespace-nowrap";
  const sizes = {
    sm: "px-5 py-2.5 text-[13px]",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-sm",
  };
  const styles = {
    primary: "bg-mocha text-white shadow-card hover:bg-mocha-dark hover:shadow-soft",
    outline:
      "border border-ink/20 bg-transparent text-ink hover:border-mocha hover:text-mocha",
    light:
      "border border-white/60 bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-ink",
    ghost: "text-mocha hover:text-mocha-dark px-0 py-0",
  };
  const cls = cn(base, variant !== "ghost" && sizes[size], styles[variant], className);
  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  if (as === "button") {
    return (
      <button type="button" className={cls} {...rest}>
        {content}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
