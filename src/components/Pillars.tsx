"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Snowflake, Home } from "lucide-react";
import { pillars } from "@/lib/data";
import { pillarImages } from "@/lib/images";
import { SectionHeading } from "./SectionHeading";

const iconMap = { gauge: Gauge, snowflake: Snowflake, home: Home };

export function Pillars() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Three platforms.{" "}
              <span className="gradient-text">One operating fabric.</span>
            </>
          }
          description="From metering the tap to guarding the vault, our stack shares one dashboard, one API and one 24/7 NOC — so your team learns it once and uses it everywhere."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="gradient-border relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-900/70 backdrop-blur transition-all duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={pillarImages[p.slug as keyof typeof pillarImages]}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-15 mix-blend-overlay`} />
                    <div className={`absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${p.color} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-7 pt-5">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-fog-100">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-brand-200">
                      {p.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-fog-300">
                      {p.description}
                    </p>

                    <ul className="mt-6 flex flex-col gap-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-fog-200">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${p.color}`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${p.slug}`}
                      className="group/link mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-brand-200 transition-colors hover:text-brand-100"
                    >
                      Explore {p.title.split(" ")[0]}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
