import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Places } from "@/components/Places";
import { Stats } from "@/components/Stats";
import { Platform } from "@/components/Platform";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities, highlights } from "@/lib/data";
import { Check } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <Pillars />
      <Stats />
      <Platform />
      <Places />
      <Process />
      <Highlights />
      <CTA />
    </>
  );
}

function CapabilityStrip() {
  return (
    <section
      aria-label="Powerise platform capabilities"
      className="border-y border-ink-300 bg-ink-100 py-8"
    >
      <div className="container-x">
        <p className="eyebrow text-center">Built into every deployment</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-fog-300 sm:text-sm">
          {capabilities.map((c) => (
            <li
              key={c}
              className="flex items-center gap-2 whitespace-nowrap font-medium text-fog-100"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What you get out of the box"
          title={
            <>
              Straight from the{" "}
              <span className="text-brand-600">product documentation.</span>
            </>
          }
          description="No claims we can't source. Every specification below is drawn directly from Powerise's own energy, generator and cold-chain documentation."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="flex h-full flex-col rounded-2xl border border-ink-300 bg-ink-50 p-6"
            >
              <p className="eyebrow">{h.eyebrow}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-fog-100">
                {h.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog-300">{h.body}</p>
              <ul className="mt-5 space-y-2 border-t border-ink-300 pt-5 text-sm text-fog-100">
                {h.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
