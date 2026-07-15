import type { Metadata } from "next";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Powerise Solutions team in Nairobi. Request a callback, request a quote or ask for a reference deployment."
};

// Google Maps embed centred on Jabavu House, Argwings Kodhek Road, Kilimani, Nairobi.
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Jabavu+House,+Jabavu+Lane,+Argwings+Kodhek+Road,+Nairobi&hl=en&z=16&output=embed";
const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Jabavu+House+Argwings+Kodhek+Road+Nairobi";

const contactBlocks = [
  {
    Icon: MapPin,
    label: "Head office",
    lines: [company.address],
    href: MAP_DIRECTIONS_URL,
    external: true
  },
  {
    Icon: Phone,
    label: "Phone",
    lines: [company.phone],
    href: `tel:${company.phone.replace(/\s/g, "")}`
  },
  {
    Icon: Mail,
    label: "Email",
    lines: [company.email],
    href: `mailto:${company.email}`
  },
  {
    Icon: Clock,
    label: "Office hours",
    lines: [company.hours]
  },
  {
    Icon: Building2,
    label: "Regional office",
    lines: ["Plot 24, Kololo Avenue", "Kampala, Uganda"]
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our team"
        description="Whether you need a quotation, a reference deployment or a technical scoping session, our engineers respond within one working hour. Emergency support is available 24/7 for customers with an active SLA."
      />

      {/* Form + contact details */}
      <section className="container-x relative pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-fog-100">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-fog-300">
                Complete the form and a member of our team will be in touch within
                one working hour.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur">
              <h2 className="font-display text-2xl font-semibold text-fog-100">
                Contact details
              </h2>
              <p className="mt-2 text-sm text-fog-300">
                Reach the right team directly by phone, email or in person at our
                Nairobi head office.
              </p>

              <dl className="mt-6 divide-y divide-white/10">
                {contactBlocks.map(({ Icon, label, lines, href, external }) => {
                  const content = (
                    <div className="flex items-start gap-4 py-4">
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-600/15 text-brand-400 ring-1 ring-brand-600/30">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <dt className="text-[11px] font-medium uppercase tracking-widest text-fog-400">
                          {label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-fog-100">
                          {lines.map((line) => (
                            <div key={line}>{line}</div>
                          ))}
                        </dd>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="block transition-colors hover:bg-white/[0.02]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </dl>
            </div>

            <div className="rounded-2xl border border-brand-600/25 bg-gradient-to-br from-brand-600/10 to-transparent p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-300">
                Emergency support
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-fog-100">
                24 / 7 NOC hotline
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fog-300">
                Existing customers with an active SLA can reach an on-call engineer
                at{" "}
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="font-semibold text-brand-300 underline-offset-4 hover:underline"
                >
                  {company.phone}
                </a>{" "}
                any hour of any day.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Full-width Google Map */}
      <section className="container-x relative pb-24">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fog-400">
              Find us
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-fog-100">
              Powerise Solutions HQ · Nairobi
            </h2>
          </div>
          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-fog-100 transition-colors hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" />
            Get directions
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/40">
          <iframe
            title="Powerise Solutions HQ, Jabavu House, Nairobi"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-[420px] w-full md:h-[520px]"
          />
        </div>
      </section>
    </>
  );
}
