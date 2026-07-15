import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Compass, HeartHandshake, Rocket, ShieldCheck, Target } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { Stats } from "@/components/Stats";
import { teamAvatars, heroBg } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Powerise Solutions Limited is a Nairobi-headquartered IoT engineering firm. Meet the team, the mission, and the operating principles behind our platform."
};

const values = [
  {
    Icon: Compass,
    title: "Engineer for the last mile",
    body: "We design for 2G, dust, brown-outs and cash sales. If it works in Turkana, it works anywhere."
  },
  {
    Icon: ShieldCheck,
    title: "Own the signed audit",
    body: "Data integrity is a promise, not a feature. Every reading is timestamped, hashed and defensible."
  },
  {
    Icon: HeartHandshake,
    title: "Trade in outcomes, not tickets",
    body: "We measure ourselves on litres saved, degrees held and downtime avoided — not on hours billed."
  },
  {
    Icon: Rocket,
    title: "Ship in weeks, not quarters",
    body: "Small pilots, honest KPIs and quick kills. We would rather cancel early than integrate forever."
  }
];

const team = [
  { name: "Amina Otieno", role: "Founder & Principal Engineer", bio: "Ex-utility SCADA lead. 12 years wiring the invisible plumbing of African infrastructure." },
  { name: "Brian Kariuki", role: "Head of Firmware", bio: "Turns dev boards into 5-year field devices. Believes in caps, not clouds." },
  { name: "Wanjiru Mbugua", role: "Head of Field Operations", bio: "Runs a bench of 24 certified installers across Kenya, Uganda and Rwanda." },
  { name: "Njeri Kamau", role: "Head of Platform", bio: "Rebuilt our stack on Rust, Postgres and MQTT — and slept better ever since." },
  { name: "Samir Patel", role: "Head of Commercial", bio: "Reads utility RFPs for fun. Turns 400-line spreadsheets into signed SoWs." },
  { name: "Grace Njoroge", role: "Head of Compliance", bio: "Keeps our platform aligned with WHO PQS, KEBS, GDPR and ODPC." }
];

const milestones = [
  { year: "2019", body: "Founded in Nairobi with a single-page brief: metering for a bottling plant in Athi River." },
  { year: "2021", body: "Launched Powerise Cloud v1 and shipped 10,000 first-generation LoRaWAN nodes." },
  { year: "2023", body: "Signed our first WHO PQS-aligned cold-chain rollout across three counties." },
  { year: "2025", body: "Passed 250,000 daily telemetry events. Opened regional office in Kampala." },
  { year: "2026", body: "Released Powerise Cloud v4 with on-device TinyML anomaly detection." }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Powerise"
        title={
          <>
            We build the <span className="gradient-text">nervous system</span> for African infrastructure.
          </>
        }
        description="Powerise is a Nairobi-headquartered engineering firm that turns pipes, meters, coolers and doors into first-class data sources. Our platform is used by utilities, life-science programmes, retail chains and homeowners across nine African countries."
      />

      <div className="container-x relative pb-6">
        <div className="relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src={heroBg}
            alt="Nairobi, Kenya"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog-400">
                Headquarters
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-fog-100">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="container-x relative pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-200">
              <Target className="h-3.5 w-3.5" />
              Mission
            </div>
            <p className="font-display text-2xl leading-snug tracking-tight text-fog-100 md:text-3xl">
              To make African infrastructure <span className="gradient-text">measurable, defensible and self-healing</span> — one sensor at a time.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-ink-900/60 p-8 backdrop-blur md:p-10">
            <h2 className="font-display text-xl font-semibold text-fog-100">Why we exist</h2>
            <p className="mt-3 text-sm leading-relaxed text-fog-300">
              A generation of critical infrastructure was built without instrumentation. Meters were read on paper, cold rooms were checked twice a day, and generators disappeared into diesel invoices. We think that&apos;s a solvable engineering problem — and a fair one to solve locally.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fog-300">
              Powerise ships the sensors, gateways and dashboards that close the loop. We support them from a Nairobi NOC, staffed by engineers who have walked the sites, patched the firmware and taken the 2 am call.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x relative py-16">
        <SectionHeading
          eyebrow="Our operating principles"
          title={
            <>
              Four opinions that show up in <span className="gradient-text">every deployment.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-500/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/30">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-fog-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-300">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Stats />

      <section className="container-x relative py-16">
        <SectionHeading
          eyebrow="Milestones"
          title={
            <>
              Seven years, <span className="gradient-text">one straight line.</span>
            </>
          }
        />
        <ol className="relative mt-14 border-l border-white/10 pl-6 md:mx-auto md:max-w-3xl">
          {milestones.map((m) => (
            <li key={m.year} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-mint-500 ring-4 ring-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <p className="font-display text-lg font-semibold text-brand-200">{m.year}</p>
              <p className="mt-1 text-sm leading-relaxed text-fog-200">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x relative py-16">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              Engineers, installers, and one <span className="gradient-text">quiet compliance officer.</span>
            </>
          }
          description="No offshore call-centres. No middlemen. The person who commissions your sensors is on the same Slack channel as the person who wrote the firmware."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-500/40"
            >
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 via-mint-500 to-violet-500 ring-1 ring-white/10 shadow-lg">
                  <Image
                    src={teamAvatars[t.name] ?? teamAvatars.default}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-fog-100">{t.name}</p>
                  <p className="text-xs text-brand-200">{t.role}</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-fog-300">{t.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x relative py-16">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-ink-900/60 p-8 backdrop-blur md:grid-cols-3 md:p-10">
          {[
            "ISO/IEC 27001 aligned information-security controls",
            "WHO PQS-aligned cold-chain monitoring practice",
            "Registered data controller with the ODPC of Kenya",
            "Member, Kenya Association of Manufacturers",
            "AWS Advanced Consulting Partner, Nairobi region",
            "Certified electricians on every install crew"
          ].map((line) => (
            <div key={line} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint-400" />
              <p className="text-sm text-fog-200">{line}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          <Link href="/services" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-fog-200 transition-colors hover:text-fog-100">
            See what we ship →
          </Link>
          <Link href="/contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-fog-200 transition-colors hover:text-fog-100">
            Talk to the team →
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
