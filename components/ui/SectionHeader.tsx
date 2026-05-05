type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const widthAlignCls =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-2xl";

  return (
    <div className={widthAlignCls}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-[1.65] text-muted md:text-[1.0625rem] ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
