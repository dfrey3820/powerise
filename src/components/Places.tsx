"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { places } from "@/lib/images";
import { SectionHeading } from "./SectionHeading";

export function Places() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where we operate"
          title={
            <>
              Deployments across East Africa,{" "}
              <span className="gradient-text">monitored from one NOC.</span>
            </>
          }
          description="From coastal ports to the northern frontier, our field engineers commission and support sensors backed by 24/7 monitoring out of our Nairobi network operations centre."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {places.map((p, i) => (
            <motion.article
              key={p.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.city}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-xs text-fog-200">
                    <MapPin className="h-3.5 w-3.5 text-brand-400" />
                    <span className="font-mono uppercase tracking-widest">
                      {p.city}
                    </span>
                  </div>
                  <p className="mt-1.5 text-base font-semibold text-fog-100">
                    {p.beat}
                  </p>
                </div>
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-mint-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-mint-400" />
                  live
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
