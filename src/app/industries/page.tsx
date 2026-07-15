import type { Metadata } from "next";
import Image from "next/image";
import {
  Bolt,
  Building2,
  Home,
  Hospital,
  Truck,
  Utensils,
  type LucideIcon
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { industries } from "@/lib/data";
import { industryImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The verticals Powerise Solutions serves — from utilities and life-sciences to logistics and residential estates."
};

const iconMap: Record<string, LucideIcon> = {
  hospital: Hospital,
  utensils: Utensils,
  building2: Building2,
  bolt: Bolt,
  truck: Truck,
  home: Home
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries we serve"
        title={
          <>
            Different sectors.{" "}
            <span className="gradient-text">Same operating fabric.</span>
          </>
        }
        description="We speak fluent utility SCADA, fluent WHO PQS, fluent QSR ops and fluent Karen homeowner. Wherever a physical asset needs to become a data source, Powerise has a reference deployment."
      />

      <section className="container-x relative pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] ?? Home;
            return (
              <article
                key={ind.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-500/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={industryImages[ind.title]}
                    alt={ind.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-mint-500 to-violet-500 text-white shadow-lg shadow-brand-500/30">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="relative p-6">
                  <h2 className="font-display text-xl font-semibold text-fog-100">
                    {ind.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-fog-300">
                    {ind.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
