export default function SectionHeading({ eyebrow, title, desc, align = "center" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} mb-12`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blush-600">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl leading-tight">{title}</h2>
      {desc && <p className="mt-4 text-charcoal-soft">{desc}</p>}
    </div>
  );
}
