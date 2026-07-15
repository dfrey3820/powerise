"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  BellRing,
  ChevronRight,
  Cpu,
  Database,
  Layers,
  Lock,
  Radio,
  Waves
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tabs = [
  {
    key: "sense",
    label: "Sense",
    Icon: Radio,
    title: "Sensors that survive the field.",
    body: "Ruggedised nodes rated for 55°C ambient, 100% humidity and 2G-only backhaul. Batteries you swap in the fifth year, not the fifth month.",
    bullets: ["LoRaWAN · NB-IoT · 4G/5G · Wi-Fi", "IP66 & ATEX enclosures", "5-year lithium-thionyl chemistry"]
  },
  {
    key: "connect",
    label: "Connect",
    Icon: Waves,
    title: "Networks that route themselves.",
    body: "Multi-carrier eSIMs, private LoRaWAN gateways and MQTT bridges converge onto one message bus. Store-and-forward keeps you honest when the tower dies.",
    bullets: ["Multi-carrier eSIM failover", "MQTT 5 · CoAP · Modbus TCP/RTU", "Edge buffering up to 30 days"]
  },
  {
    key: "compute",
    label: "Compute",
    Icon: Cpu,
    title: "Rules and AI, one click from the wire.",
    body: "Author threshold, geofence and ML anomaly rules in a drag-and-drop console — deployed to the cloud, the edge gateway or both.",
    bullets: ["No-code rules engine", "On-device TinyML inference", "Serverless webhooks & M-Pesa hooks"]
  },
  {
    key: "act",
    label: "Act",
    Icon: BellRing,
    title: "Alerts that reach someone who cares.",
    body: "SMS, WhatsApp, email, voice call, and PagerDuty — with escalation ladders and quiet hours built for the ops manager, not the engineer.",
    bullets: ["Multi-channel escalation", "On-call rotations & quiet hours", "Signed audit trail per alert"]
  },
  {
    key: "govern",
    label: "Govern",
    Icon: Lock,
    title: "Enterprise controls, by default.",
    body: "SSO, role-based access, data residency in Nairobi, and defensible logs — because compliance is a feature, not an afterthought.",
    bullets: ["SAML SSO · SCIM · MFA", "Data resident in Kenya", "SOC 2 aligned, GDPR ready"]
  }
];

export function Platform() {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;
  const Icon = current.Icon;

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One stack, five layers,{" "}
              <span className="gradient-text">zero glue code.</span>
            </>
          }
          description="Powerise Cloud takes you from a physical sensor to a signed audit report — without a systems integrator, a middleware bill, or a spreadsheet in sight."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="glass rounded-2xl p-2">
            <ul className="flex flex-col gap-1">
              {tabs.map((t) => {
                const TabIcon = t.Icon;
                const isActive = t.key === active;
                return (
                  <li key={t.key}>
                    <button
                      onClick={() => setActive(t.key)}
                      className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                        isActive
                          ? "bg-white/5 text-fog-100"
                          : "text-fog-300 hover:bg-white/5 hover:text-fog-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tab-indicator"
                          className="absolute inset-y-1 left-0 w-1 rounded-r-full bg-gradient-to-b from-brand-500 to-mint-500"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-lg ${
                          isActive
                            ? "bg-gradient-to-br from-brand-500 to-violet-500 text-white"
                            : "bg-white/5 text-fog-200"
                        }`}
                      >
                        <TabIcon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{t.label}</span>
                      <ChevronRight
                        className={`ml-auto h-4 w-4 transition-transform ${
                          isActive ? "translate-x-1 text-brand-300" : ""
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="gradient-border relative overflow-hidden rounded-3xl bg-ink-900/70 p-8 backdrop-blur md:p-10"
          >
            <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-200">
                  <Icon className="h-3.5 w-3.5" />
                  {current.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fog-100 md:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog-300 md:text-base">
                  {current.body}
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-fog-200">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500/20 text-brand-200">
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <MockDashboard tabKey={active} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MockDashboard({ tabKey }: { tabKey: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-950/70 p-4 shadow-2xl shadow-black/40">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-mint-400/70" />
        <span className="ml-2 flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-fog-300">
          <Layers className="h-3 w-3" />
          powerise.cloud/{tabKey}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <MiniCard label="Nodes online" value="1,284" tone="mint" Icon={Activity} />
        <MiniCard label="Alerts / 24h" value="12" tone="amber" Icon={BellRing} />
      </div>

      <div className="mt-2 rounded-xl border border-white/10 bg-ink-900/70 p-3">
        <p className="text-[10px] uppercase tracking-widest text-fog-300">Live telemetry · 1h</p>
        <SparkChart seed={tabKey} />
      </div>

      <div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-ink-900/70 p-3">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-brand-300" />
          <p className="text-xs text-fog-200">events ingested</p>
        </div>
        <p className="font-mono text-sm text-mint-400">247,183 <span className="text-fog-300 text-[10px]">/ min</span></p>
      </div>
    </div>
  );
}

function MiniCard({
  label,
  value,
  tone,
  Icon
}: {
  label: string;
  value: string;
  tone: "mint" | "amber";
  Icon: typeof Activity;
}) {
  const bg = tone === "mint" ? "bg-mint-500/15 text-mint-400" : "bg-amber-500/15 text-amber-500";
  return (
    <div className="rounded-xl border border-white/10 bg-ink-900/70 p-3">
      <div className="flex items-center gap-2">
        <span className={`grid h-7 w-7 place-items-center rounded-lg ${bg}`}>
          <Icon className="h-3.5 w-3.5" />
        </span>
        <p className="text-[10px] uppercase tracking-widest text-fog-300">{label}</p>
      </div>
      <p className="mt-2 font-display text-2xl font-semibold text-fog-100">{value}</p>
    </div>
  );
}

function SparkChart({ seed }: { seed: string }) {
  // deterministic bars per tab
  const hash = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const bars = Array.from({ length: 28 }).map((_, i) => {
    const n = Math.sin(i * 0.6 + hash) * 0.4 + Math.cos(i * 0.9 + hash) * 0.4;
    return Math.max(15, Math.min(95, 55 + n * 40));
  });
  return (
    <div className="mt-2 flex h-16 items-end gap-1">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.6, delay: i * 0.02 }}
          className="flex-1 rounded-sm bg-gradient-to-t from-brand-500/50 via-violet-500/70 to-mint-400"
        />
      ))}
    </div>
  );
}
