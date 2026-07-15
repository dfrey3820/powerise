"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A four-step cadence,{" "}
              <span className="gradient-text">designed to ship.</span>
            </>
          }
          description="No 60-page discovery docs. No indefinite pilots. We move from a walkthrough to live telemetry in weeks, not quarters."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40">
                <span className="absolute right-4 top-4 font-display text-6xl font-bold text-white/5 transition-colors group-hover:text-brand-500/20">
                  {p.step}
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                  Step {p.step}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-fog-100">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog-300">{p.body}</p>
              </div>
              {i < process.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-brand-500/60 to-transparent lg:block" />
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
