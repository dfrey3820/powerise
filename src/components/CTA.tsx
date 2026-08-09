import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-ink-300 bg-ink-900 px-8 py-14 md:px-14 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-300">
              Ready to see it live?
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Book a 30-minute walkthrough. Bring your worst site.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              We&apos;ll take a real meter, a real genset or a real cold room and
              wire it into Powerise Cloud on-screen. If it doesn&apos;t change how
              you run operations, we&apos;ll buy the coffee.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-fog-100 transition-colors hover:bg-ink-200"
              >
                Book a walkthrough
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
