"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { testimonialAvatars } from "@/lib/images";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Voices from the field"
          title={
            <>
              Loved by ops leaders who <span className="gradient-text">hate downtime.</span>
            </>
          }
          description="Not screenshots from a slide deck. Real quotes from operators who signed the invoice and shipped the outcome."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30"
            >
              <div className="pointer-events-none absolute -top-8 -right-4 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
                <Quote className="h-32 w-32 text-brand-400" />
              </div>
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="relative mt-4 text-lg leading-relaxed text-fog-100 text-pretty">
                “{t.quote}”
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3">
                <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-violet-500 ring-2 ring-white/10">
                  <Image
                    src={testimonialAvatars[i % testimonialAvatars.length]}
                    alt={t.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-fog-100">{t.author}</p>
                  <p className="text-xs text-fog-300">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
