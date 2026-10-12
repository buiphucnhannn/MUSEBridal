import { cn } from "@/lib/utils";

export default function Container({ children, className = "", wide = false }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        wide ? "max-w-[1440px]" : "max-w-[1240px]",
        className
      )}
    >
      {children}
    </div>
  );
}
