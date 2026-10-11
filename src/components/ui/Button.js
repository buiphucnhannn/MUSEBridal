import { cn } from "@/lib/utils";

export default function Button({ children, href = "#contact", variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-all";
  const styles = {
    primary: "bg-charcoal text-white hover:bg-blush-600 shadow-soft",
    outline: "border border-charcoal/20 bg-white hover:border-charcoal",
    gold: "bg-gold text-white hover:brightness-95",
  };
  return (
    <a href={href} className={cn(base, styles[variant], className)}>
      {children}
    </a>
  );
}
