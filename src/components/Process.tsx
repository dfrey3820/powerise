import { benefits } from "@/lib/data";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  Cloud,
  Leaf,
  ShieldCheck
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const icons = [Activity, Cloud, BarChart3, BadgeCheck, ShieldCheck, Leaf];

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Powerise"
          title={
            <>
              Six reasons operators pick us{" "}
              <span className="text-brand-600">and stay.</span>
            </>
          }
          description="Real-time data, defensible reports and reliable field hardware — engineered for African conditions and audited to global standards."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={b.title}
                className="flex flex-col rounded-2xl border border-ink-300 bg-ink-50 p-6 transition-colors hover:border-brand-500"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-fog-100">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog-300">{b.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
