import Link from "next/link";
import {
  Gauge,
  Zap,
  Snowflake,
  Truck,
  Droplet,
  Home,
  ArrowUpRight
} from "lucide-react";
import { pillars } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const icons = {
  gauge: Gauge,
  zap: Zap,
  snowflake: Snowflake,
  truck: Truck,
  droplet: Droplet,
  home: Home
} as const;

export function Pillars() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our solutions"
          title={
            <>
              Six IoT platforms.{" "}
              <span className="text-brand-600">One accountable partner.</span>
            </>
          }
          description="From energy meters and gensets to cold chain, water, gas, fleet telematics and smart homes — designed, deployed and supported end-to-end by Powerise."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = icons[p.icon as keyof typeof icons] ?? Gauge;
            return (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="group relative flex flex-col rounded-2xl border border-ink-300 bg-ink-50 p-6 transition-all hover:border-brand-500 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-fog-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-fog-100">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog-300">
                  {p.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink-300 pt-4">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-fog-300">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
