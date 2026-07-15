import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import { company, navigation } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
      />

      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo size={44} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog-300">
              We turn power lines, cold rooms and living rooms into intelligent,
              observable systems — engineered for African infrastructure and
              built to keep working when the network doesn&apos;t.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: company.social.x, label: "X (Twitter)" },
                { Icon: Facebook, href: company.social.facebook, label: "Facebook" },
                { Icon: Instagram, href: company.social.instagram, label: "Instagram" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-fog-300 transition-all hover:-translate-y-0.5 hover:border-brand-500/40 hover:text-fog-100"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-fog-300">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {navigation.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-fog-200 transition-colors hover:text-brand-200"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-fog-300">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/services/utility-monitoring"
                  className="text-fog-200 transition-colors hover:text-brand-200"
                >
                  Utility Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cold-chain"
                  className="text-fog-200 transition-colors hover:text-brand-200"
                >
                  Cold Chain
                </Link>
              </li>
              <li>
                <Link
                  href="/services/smart-home"
                  className="text-fog-200 transition-colors hover:text-brand-200"
                >
                  Smart Home
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-fog-200 transition-colors hover:text-brand-200"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-fog-200 transition-colors hover:text-brand-200"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-fog-300">
              Reach us
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-fog-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand-400" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-fog-300 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog-400">
              Headquartered in Nairobi, Kenya
            </span>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-fog-100">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-fog-100">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-fog-100">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
