"use client";

import { clientLogos } from "@/lib/data";

export function LogoMarquee() {
  return (
    <section className="relative py-14 border-y border-white/5">
      <div className="container-x">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-fog-300">
          Trusted across East Africa by utilities, retail chains &amp; life-science leaders
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold tracking-tight text-fog-300/70 transition-colors hover:text-fog-100"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
