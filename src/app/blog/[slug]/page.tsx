import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { posts } from "@/lib/data";
import { postImages } from "@/lib/images";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt
  };
}

const body: Record<string, string[]> = {
  "non-revenue-water": [
    "The most expensive drop of water is the one you produce, treat, pump and then never bill. In Kenya, that drop makes up roughly 45% of everything we push through our distribution networks — a figure that would be a national scandal in any other industry.",
    "The good news is that the problem is not primarily plumbing. It is measurement. Utilities that instrument their district metered areas (DMAs) with continuous telemetry — pressure, flow, tank level, valve state — routinely discover that 20 to 30% of their losses are commercial (billing errors, illegal connections, meter tampering) and can be recovered in the first quarter.",
    "In this piece we walk through a 90-day playbook: pick three worst-performing DMAs, deploy 60 sensors, wire the dashboard to the billing engine, and let the graphs make the case. We include the actual bill of materials, the SLA we ask installers to sign, and the CFO-friendly business case template we send to boards."
  ],
  "cold-chain-2g": [
    "It is 2026 and we still shipped 4,000 2G-capable temperature loggers last quarter. Every product manager on the team lobbied against it. Every field engineer voted for it. The field engineers won, again.",
    "Between Lodwar and Lokichogio there are stretches where the only reliable signal is 900 MHz GSM from a mast built for calls, not data. NB-IoT coverage looks great on the operator map. It looks less great from inside a cold room, at 4 °C, behind a fridge, with a battery that has been in the field for three years.",
    "Our takeaway: for cold-chain, backhaul is a religion, not a technology. We now design every deployment with primary and secondary radios on different bands and different operators — and we let the gateway decide, per message, which one to use."
  ],
  "matter-in-kenya": [
    "Matter promised the end of vendor lock-in. Twelve months into shipping Matter-first hardware, our view is: mostly delivered, with an asterisk.",
    "The good: locks, lights, plugs and sensors from four different brands now pair, expose scenes and route local commands without a cloud round-trip. Homeowners save real money on Wi-Fi bulb re-orders and get faster switch response.",
    "The asterisk: cameras, thermostats and access control still need vendor apps for firmware, storage and analytics. And Thread border routers behave differently across Apple, Google and Amazon hubs. We plan around this by standardising the hub of record before we quote the job."
  ],
  "genset-fraud": [
    "We have seen five common shapes of diesel fraud. Siphoning during the graveyard shift. Under-loading the genset and pocketing the surplus. Cocktail fuel (petrol thinned into the tank). Ghost run-hours logged manually. And re-cycled invoices from tanker top-ups that never happened.",
    "Each one has a signature that shows up in telemetry — a level drop with no run-hour, a fuel consumption curve inconsistent with the load, a knock signature that no auditor can miss.",
    "In this piece we tear down a 90-day forensic engagement with an East-African bank branch network. We include the alert rules, the SMS templates and the redacted invoice reconciliation that recovered eight-figure savings."
  ],
  "esg-metering": [
    "The Kenyan Companies Act update, EU CBAM, and the Nairobi Securities Exchange guidance have quietly made ESG reporting a board-level obligation. And boards have discovered that their sustainability teams have been running Scope 1 and 2 on spreadsheets estimated from utility bills.",
    "The fastest way out of this trap is not a consultancy engagement. It is a sub-meter — one per building, one per genset, one per bulk water inlet — feeding a dashboard that produces a monthly XBRL-ready export.",
    "We walk through the CFO-friendly roadmap: what to meter first, what to defer, what to buy vs lease, and how to write the ESG data policy so the auditor never asks the same question twice."
  ],
  "lorawan-vs-nbiot": [
    "There is no universally right radio. There is only the radio that fits your battery budget, your tower map, and your ten-year TCO.",
    "In this deep-dive we compare LoRaWAN, NB-IoT and 4G LTE-M across the six axes that matter in production deployments: coverage, battery life, throughput, cost per device, cost per message and political sustainability.",
    "We conclude with a decision matrix and three real-world scenarios — a Nairobi shopping mall, a rural water scheme in Kitui, and a national vaccine supply chain — and the radio choices we would defend in front of a procurement panel."
  ]
};

export default async function BlogPost({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = body[slug] ?? [
    "This piece is still being edited. In the meantime, browse other Insights below or reach out to our team — most of what we publish here starts as a question from a customer."
  ];

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <div className="container-x relative -mt-8 pb-6">
        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src={postImages[slug]}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
        </div>
      </div>

      <article className="container-x relative pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs text-fog-300">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-brand-200 hover:text-brand-100"
            >
              <ArrowLeft className="h-3 w-3" />
              All insights
            </Link>
            <span>·</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-brand-200">
              {post.tag}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-8 flex items-center gap-3 border-b border-white/10 pb-8">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 font-display text-sm font-semibold text-white">
              {post.author.split(" ").map((s) => s[0]).slice(0, 2).join("")}
            </span>
            <div>
              <p className="text-sm font-semibold text-fog-100">{post.author}</p>
              <p className="text-xs text-fog-300">Powerise Solutions · Nairobi</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 text-base leading-relaxed text-fog-200">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <blockquote className="my-4 border-l-2 border-brand-500/60 bg-white/[0.03] px-6 py-4 text-lg italic text-fog-100">
              &ldquo;Every field team has felt this. The point of writing it down
              is so the next team can start where we finished.&rdquo;
            </blockquote>
            <p>
              If you would like the reference architecture, the BoM or the SLA
              templates referenced here, drop us a note at{" "}
              <a
                href="mailto:info@powerise.co.ke"
                className="text-brand-200 underline underline-offset-4 hover:text-brand-100"
              >
                info@powerise.co.ke
              </a>{" "}
              and we will send them over.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="mb-6 font-display text-xl font-semibold text-fog-100">
            Keep reading
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-500/40"
              >
                <span className="text-xs font-medium uppercase tracking-widest text-brand-300">
                  {r.tag}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-fog-100 group-hover:text-brand-200">
                  {r.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-fog-300">
                  {r.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
