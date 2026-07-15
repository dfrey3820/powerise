import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-200 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-mint-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-fog-100 text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-fog-300 text-pretty md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
