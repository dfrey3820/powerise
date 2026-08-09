export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative border-b border-ink-300 bg-ink-100">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fog-100 sm:text-5xl md:text-[3.25rem] md:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-fog-300 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
