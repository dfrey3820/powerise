"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

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
    eyebrow: "Smart Home Automation",
    title: "Intelligent living spaces, engineered for reliability.",
    description:
      "Smart lighting, security, climate control and entertainment — unified under one Powerise platform, professionally installed and supported to enterprise SLAs.",
    href: "/services/smart-home"
  },
  {
    src: "/hero/slide-2.jpg",
    eyebrow: "IoT Utility Monitoring",
    title: "Real-time visibility across water, power and gas networks.",
    description:
      "Metering, telemetry and analytics for utilities and industrial operators — reduce non-revenue losses, prove compliance and act on live operational data.",
    href: "/services/utility-monitoring"
  },
  {
    src: "/hero/slide-3.jpg",
    eyebrow: "Cold Chain Management",
    title: "WHO PQS-aligned cold chain, monitored end-to-end.",
    description:
      "Cold rooms, coolers and refrigerated logistics with tamper-proof temperature records — audit-ready reporting from storage to last-mile delivery.",
    href: "/services/cold-chain"
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[560px] w-full sm:h-[620px] md:h-[680px] lg:h-[720px]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/55 to-ink-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          </div>
        ))}

        <div className="container-x relative flex h-full items-center pt-24">
          <div className="relative max-w-2xl">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className={`transition-all duration-700 ${
                  i === index
                    ? "opacity-100 translate-y-0"
                    : "pointer-events-none absolute inset-0 opacity-0 translate-y-4"
                }`}
                aria-hidden={i !== index}
              >
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-brand-400">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-fog-200 sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-brand-700/50 transition-colors hover:bg-brand-700"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-fog-100 backdrop-blur transition-colors hover:border-white/50 hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    Request a callback
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-10 bg-brand-500"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
