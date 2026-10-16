import Link from "next/link";
import { Logo } from "./Logo";
import { company, navigation } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const solutions = navigation.find((n) => n.href === "/services")?.children ?? [];

  return (
    <footer className="border-t border-ink-300 bg-ink-100">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size={32} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog-300">
              {company.intro}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-fog-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                {company.address}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                <a href={`mailto:${company.email}`} className="hover:text-fog-100">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <FooterCol
            title="Solutions"
            links={solutions.map((s) => ({ label: s.label, href: s.href }))}
          />

          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" }
            ]}
          />

          <FooterCol
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" }
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-300 pt-8 text-xs text-fog-300 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-fog-100">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm text-fog-300">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-brand-600">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
