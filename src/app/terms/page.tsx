import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={<>Terms of Service</>}
        description="The plain-English terms that govern how Powerise Solutions provides its platform, hardware and services."
      />
      <article className="container-x relative mx-auto max-w-3xl pb-24 text-fog-200 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fog-100 [&_p]:mt-3 [&_p]:leading-relaxed [&_a]:text-brand-200 [&_a]:underline [&_a]:underline-offset-4">
        <p>Last updated: 1 January 2026.</p>
        <h2>1. Services</h2>
        <p>
          Powerise provides IoT hardware, gateways, cloud software and managed
          services. The scope of each engagement is defined in the applicable
          Statement of Work or Order Form.
        </p>
        <h2>2. Fees & payment</h2>
        <p>
          Fees are quoted in Kenya Shillings unless stated otherwise. Standard
          payment terms are 30 days from invoice date.
        </p>
        <h2>3. Service levels</h2>
        <p>
          Powerise Cloud targets 99.9% monthly uptime. Enterprise SLAs with
          faster response and resolution times are available in a separate
          Support Agreement.
        </p>
        <h2>4. Warranty</h2>
        <p>
          Hardware carries a 24-month manufacturer warranty against defects in
          materials and workmanship, extendable to 60 months for enterprise
          accounts.
        </p>
        <h2>5. Governing law</h2>
        <p>
          These terms are governed by the laws of Kenya. Disputes shall be
          resolved by the courts of Nairobi.
        </p>
      </article>
    </>
  );
}
