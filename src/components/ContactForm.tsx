"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const interests = [
  "Utility Monitoring",
  "Cold Chain",
  "Smart Home",
  "Something else"
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState<string>(interests[0]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission — wire up to a real endpoint (e.g. /api/contact or Resend)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-brand-600/30 bg-ink-900/60 p-10 text-center backdrop-blur"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-md ring-1 ring-brand-700/40">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-fog-100">
          Message received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-fog-300">
          A member of our solutions team will be in touch within one working
          hour. If it is urgent, call our front desk on +254 733 816 010.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-fog-100 hover:bg-white/10"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur md:p-8"
    >
      <div className="relative grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Wanjiku Kamau" required />
        <Field label="Work email" name="email" type="email" placeholder="you@company.co.ke" required />
        <Field label="Organisation" name="org" placeholder="Acme Utilities Ltd" />
        <Field label="Phone" name="phone" placeholder="+254 700 000 000" />
      </div>

      <div className="relative mt-5">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-fog-300">
          I&apos;m interested in
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => setInterest(i)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                interest === i
                  ? "border-brand-500/60 bg-brand-500/15 text-brand-100"
                  : "border-white/10 bg-white/5 text-fog-300 hover:text-fog-100"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
        <input type="hidden" name="interest" value={interest} />
      </div>

      <div className="relative mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-fog-300"
        >
          Tell us about the outcome you want
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="e.g. cut diesel spend across 42 branches by end of Q3, and get a monthly ESG-ready export."
          className="w-full resize-none rounded-md border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-fog-100 placeholder:text-fog-300/60 focus:border-brand-500/60 focus:outline-none focus:ring-2 focus:ring-brand-500/25"
        />
      </div>

      <div className="relative mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-fog-300">
          By submitting, you agree to our privacy policy. We reply within one
          working hour.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-brand-700/50 transition-colors hover:bg-brand-700 disabled:opacity-70"
        >
          <span>
            {status === "sending" ? "Sending…" : "Send message"}
          </span>
          {status === "sending" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-fog-300">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/10 bg-ink-950/60 px-4 py-2.5 text-sm text-fog-100 placeholder:text-fog-300/60 focus:border-brand-500/60 focus:outline-none focus:ring-2 focus:ring-brand-500/25"
      />
    </label>
  );
}
