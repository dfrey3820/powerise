"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

const slides: Slide[] = [
  {
    src: "/hero/slide-1.jpg",
    eyebrow: "Energy & Generator Monitoring",
    title: "See every kWh. Stop every drop of stolen fuel.",
    description:
      "IoT-enabled energy audits and genset telemetry — real-time consumption, engine health and fuel-theft alerts across your entire portfolio.",
    href: "/services/energy-monitoring"
  },
  {
    src: "/hero/slide-2.jpg",
    eyebrow: "Cold Chain Integrity",
    title: "Every degree, logged and defensible.",
    description:
      "Global real-time monitors for vaccines, pharma and food logistics — temperature, humidity, light, shock and location, WHO-PQS aligned.",
    href: "/services/cold-chain"
  },
  {
    src: "/hero/slide-3.jpg",
    eyebrow: "Smart Home & Locks",
    title: "A home that thinks with you.",
    description:
      "Smart locks, switches, lighting and CCTV, unified in one app — with mobile, PIN, RFID, fingerprint and mechanical-key access.",
    href: "/services/smart-home"
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const active = slides[index];

  return (
    <section className="relative overflow-hidden border-b border-ink-300 bg-ink-50">
      <div className="container-x relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-32">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow">{active.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fog-100 sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem]">
            {active.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog-300 sm:text-lg">
            {active.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={active.href}
              className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Explore the solution
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-ink-50 px-6 py-3 text-sm font-semibold text-fog-100 transition-colors hover:bg-ink-100"
            >
              <Phone className="h-4 w-4" />
              Request a callback
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand-500" : "w-4 bg-ink-400 hover:bg-ink-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-ink-300 bg-ink-100 shadow-xl shadow-ink-900/5 lg:aspect-square">
            {slides.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.title}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-ink-300 bg-ink-50 p-4 shadow-xl shadow-ink-900/5 sm:block">
            <p className="eyebrow">On-device capacity</p>
            <p className="mt-2 font-display text-2xl font-semibold text-fog-100">
              50,000<span className="ml-1 text-sm font-normal text-fog-300"> readings</span>
            </p>
            <p className="text-xs text-fog-300">stored per Powerise data logger</p>
          </div>
        </div>
      </div>
    </section>
  );
}
