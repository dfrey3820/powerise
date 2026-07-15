import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, Home, Snowflake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three IoT platforms — utility monitoring, cold-chain integrity and smart-home automation — running on one operating fabric from Powerise Solutions."
};

const iconMap = { gauge: Gauge, snowflake: Snowflake, home: Home };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Three platforms.{" "}
            <span className="gradient-text">One accountable partner.</span>
          </>
        }
        description="Pick the platform that hurts most today. Adopt the others when it makes sense. Everything you buy from Powerise plugs into the same dashboards, the same NOC and the same billing envelope."
      />

      <section className="container-x relative pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="gradient-border group relative flex flex-col overflow-hidden rounded-3xl bg-ink-900/70 p-8 backdrop-blur transition-all hover:-translate-y-1"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.color} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-fog-100">{p.title}</h2>
                <p className="mt-2 text-sm font-medium text-brand-200">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog-300">{p.description}</p>
                <ul className="mt-6 flex flex-col gap-2">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-fog-200">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${p.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200 transition-colors group-hover:text-brand-100">
                  Explore this platform
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
