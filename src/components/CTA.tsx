"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { company } from "@/lib/data";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-border relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-10 md:p-16"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-brand-500/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-mint-500/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-fog-100 text-balance md:text-5xl">
                Ready to see your operation on{" "}
                <span className="gradient-text">one live map?</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-fog-300 md:text-lg">
                Book a 30-minute working session with our solutions team. Bring a
                pain point — we&apos;ll bring a prototype dashboard using your
                own numbers.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-brand-700/50 transition-colors hover:bg-brand-700"
                >
                  <span>Request a callback</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-fog-100 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  {company.phone}
                </a>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-4">
              {[
                { k: "30 min", v: "First working session" },
                { k: "72 hrs", v: "Proposal turnaround" },
                { k: "2 wks", v: "Pilot in production" },
                { k: "0 KES", v: "To talk to us" }
              ].map((s) => (
                <li
                  key={s.v}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
                >
                  <p className="font-display text-2xl font-semibold text-fog-100">
                    {s.k}
                  </p>
                  <p className="mt-1 text-xs text-fog-300">{s.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
