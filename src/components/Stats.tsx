import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-y border-ink-300 bg-ink-100 py-16">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold tracking-tight text-fog-100 sm:text-4xl md:text-[2.5rem]">
                {s.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-fog-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
