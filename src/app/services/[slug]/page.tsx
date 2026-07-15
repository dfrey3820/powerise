import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Beaker,
  Bolt,
  Building,
  Building2,
  Camera,
  Droplet,
  Flame,
  Home,
  Lock,
  Refrigerator,
  Sun,
  Truck,
  Warehouse,
  Wind,
  Zap,
  type LucideIcon
} from "lucide-react";
import { pillars, services } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

const iconMap: Record<string, LucideIcon> = {
  droplet: Droplet,
  flame: Flame,
  zap: Zap,
  building: Building,
  beaker: Beaker,
  refrigerator: Refrigerator,
  warehouse: Warehouse,
  truck: Truck,
  lock: Lock,
  sun: Sun,
  camera: Camera,
  wind: Wind,
  home: Home,
  bolt: Bolt,
  building2: Building2
};

type Slug = keyof typeof services;

const pillarContent: Record<Slug, {
  eyebrow: string;
  intro: string;
  outcomes: { title: string; body: string }[];
  faq: { q: string; a: string }[];
}> = {
  "utility-monitoring": {
    eyebrow: "IoT Utility Monitoring",
    intro:
      "Turn the invisible pipes, meters and gensets that keep your organisation running into a real-time operations feed. Powerise instrumentation is engineered for African tariffs, African networks, and African weather.",
    outcomes: [
      { title: "22% average diesel spend reduction", body: "Detect fuel theft, right-size run-hours and predict service intervals before the alternator burns out." },
      { title: "31% reduction in non-revenue water", body: "Continuous flow, pressure and quality telemetry across trunk mains, reservoirs and last-mile connections." },
      { title: "48-hour deployment for sub-metering", body: "Retrofit 20 kiosks or 200 shops in a single working week — no downtime, no re-wiring your ATS." }
    ],
    faq: [
      { q: "Do your meters work on 2G or LoRaWAN only?", a: "Both, plus NB-IoT and 4G. Our gateways speak all four and fail over automatically. We size the network to the deployment, not the other way around." },
      { q: "Can we bring our own hardware?", a: "Yes. If it speaks Modbus, MQTT, OPC-UA or a documented REST API, we will integrate it into Powerise Cloud in under a week." },
      { q: "Is billing integration supported?", a: "M-Pesa, Stripe, Flutterwave and standard SAP / Oracle Utilities exports are all first-class. Prepaid and postpaid flows are supported out of the box." }
    ]
  },
  "cold-chain": {
    eyebrow: "IoT Cold Chain Management",
    intro:
      "Continuous, defensible temperature integrity — from a life-science freezer at Aga Khan to a reefer truck bound for Kigali. Auditors love us because the report is signed the moment the excursion happens, not the day after.",
    outcomes: [
      { title: "Sub-2-minute alert latency", body: "From probe to on-call phone — even on a single-carrier site with intermittent 2G. Store-and-forward keeps the audit trail intact." },
      { title: "5-year field battery life", body: "Purpose-built lithium chemistry, low-power radios and adaptive reporting. Swap batteries at the annual PM, not every quarter." },
      { title: "One export, every regulator happy", body: "WHO PQS, GxP, HACCP, KEBS, ODPC — we generate the report in the format each auditor expects. You just sign it." }
    ],
    faq: [
      { q: "What temperature ranges are supported?", a: "-80 °C to +80 °C with calibrated probes traceable to national standards. Multiple probes per gateway, so one appliance can be zoned." },
      { q: "How long is data retained?", a: "Ten years by default, in an ODPC-registered data centre in Nairobi. Longer retention windows are available for regulated programmes." },
      { q: "Do you handle validation?", a: "Yes. We provide IQ / OQ / PQ documentation and support annual re-validation as a fixed-price service." }
    ]
  },
  "smart-home": {
    eyebrow: "Smart Home Automation",
    intro:
      "A home that opens on your face, dims for the movie, and locks itself when the last kid falls asleep. Ours works locally-first — so when Zuku dies, your lights don't.",
    outcomes: [
      { title: "Single-day commissioning", body: "Our installers arrive at 08:00, hand you the app at 17:00. No re-wiring, no drama, no dust." },
      { title: "Zero recurring cloud fees", body: "The hub runs locally. Video stays on your NVR. Your data is your data. Cloud sync is opt-in per device." },
      { title: "Matter-native and future-proof", body: "Every device we sell today is Matter-ready. Add Google Home, Alexa or Apple Home tomorrow without ripping anything out." }
    ],
    faq: [
      { q: "Do you install in existing homes?", a: "Yes — over 80% of our residential installs are retrofits. We plan around existing switches and gang-boxes." },
      { q: "What happens if the internet is down?", a: "Everything critical keeps working. Locks, scenes, alarms and CCTV all run locally. Remote access resumes automatically when connectivity returns." },
      { q: "Do you service estates and BTR schemes?", a: "Yes. We have a dedicated residential-developer bundle with per-unit pricing and centralised managed services." }
    ]
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: Slug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = pillars.find((x) => x.slug === slug);
  if (!p) return { title: "Not found" };
  return {
    title: p.title,
    description: p.description
  };
}

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  const items = services[slug];
  const content = pillarContent[slug];
  if (!pillar || !items || !content) notFound();

  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={
          <>
            {pillar.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text">
              {pillar.title.split(" ").slice(-2).join(" ")}
            </span>
          </>
        }
        description={content.intro}
      />

      <section className="container-x relative pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((s) => {
            const Icon = iconMap[s.icon] ?? Zap;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-500/40"
              >
                <div className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${pillar.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`} />
                <span className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${pillar.color} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-fog-100">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-fog-300">
                  {s.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-x relative py-20">
        <SectionHeading
          eyebrow="Business outcomes"
          title={
            <>
              What clients actually{" "}
              <span className="gradient-text">get in return.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {content.outcomes.map((o) => (
            <div
              key={o.title}
              className="gradient-border relative overflow-hidden rounded-3xl bg-ink-900/70 p-7 backdrop-blur"
            >
              <p className="font-display text-3xl font-semibold gradient-text-brand">
                {o.title.split(" ")[0]}
              </p>
              <p className="mt-1 text-sm font-medium text-fog-100">
                {o.title.split(" ").slice(1).join(" ")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fog-300">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x relative py-20">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Straight answers to the questions{" "}
              <span className="gradient-text">buyers actually ask.</span>
            </>
          }
        />
        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-3">
          {content.faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-ink-900/60 p-5 backdrop-blur transition-colors open:border-brand-500/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-fog-100">
                {f.q}
                <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2v8M2 6h8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-fog-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="container-x relative pb-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {pillars
            .filter((p) => p.slug !== slug)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-fog-200 transition-colors hover:text-fog-100"
              >
                Explore {p.title}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
        </div>
      </div>

      <CTA />
    </>
  );
}
