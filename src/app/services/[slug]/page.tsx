import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { pillars, services } from "@/lib/data";
import { pillarImages } from "@/lib/images";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return { title: "Solution" };
  return {
    title: pillar.title,
    description: pillar.description
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) notFound();

  const items = services[slug as keyof typeof services] ?? [];
  const img = pillarImages[slug];

  return (
    <>
      <PageHeader
        eyebrow={pillar.title}
        title={pillar.tagline}
        description={pillar.description}
      />

      <section className="py-16 md:py-20">
        <div className="container-x">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-fog-300 hover:text-fog-100"
          >
            <ArrowLeft className="h-4 w-4" />
            All solutions
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
            <div>
              <p className="eyebrow">What we deliver</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fog-100 md:text-3xl">
                Ruggedised hardware, cloud analytics and 24/7 alerting — as one integrated service.
              </h2>
              <ul className="mt-8 grid gap-3">
                {pillar.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-xl border border-ink-300 bg-ink-100 px-4 py-3 text-sm text-fog-100"
                  >
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {img && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-300 bg-ink-100 lg:aspect-square">
                <Image
                  src={img}
                  alt={pillar.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {items.length > 0 && (
        <section className="border-t border-ink-300 bg-ink-100 py-20 md:py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <p className="eyebrow">Modules</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fog-100 md:text-4xl">
                Everything included in {pillar.title}.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-ink-300 bg-ink-50 p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-fog-100">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog-300">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
