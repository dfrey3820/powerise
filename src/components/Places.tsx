import Link from "next/link";
import { industries } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Places() {
  return (
    <section className="border-y border-ink-300 bg-ink-100 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Built for the operators{" "}
              <span className="text-brand-600">keeping Africa running.</span>
            </>
          }
          description="Utilities, hospitals, fleets, factories, malls and homes — the Powerise stack adapts to each without rewriting itself."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="group flex flex-col rounded-2xl border border-ink-300 bg-ink-50 p-6 transition-colors hover:border-brand-500"
            >
              <h3 className="font-display text-lg font-semibold text-fog-100">
                {ind.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-fog-300">
                {ind.body}
              </p>
              <Link
                href="/industries"
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 transition-transform group-hover:translate-x-0.5"
              >
                Learn more
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
