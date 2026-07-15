import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24", className)}>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-200 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-mint-500" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fog-100 text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-fog-300 text-pretty md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
