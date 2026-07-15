"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ target, duration = 1600 }: { target: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    // Extract leading number, keep suffix (e.g. "250+", "99.98%", "24/7")
    const match = target.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const to = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = (match[1].split(".")[1] || "").length;
    if (!inView) return;

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = to * eased;
      setDisplay(v.toFixed(decimals) + suffix);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-x">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-ink-900/80 p-8 backdrop-blur md:p-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
          <div className="pointer-events-none absolute -top-32 left-1/3 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="font-display text-4xl font-semibold tracking-tight gradient-text-brand md:text-6xl">
                  <Counter target={s.value} />
                </p>
                <p className="mt-2 text-sm text-fog-300">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
