import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[120px]" />

      <div className="container-x relative text-center">
        <p className="font-display text-[10rem] font-bold leading-none tracking-tight gradient-text-brand md:text-[16rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fog-100 md:text-4xl">
          This node is offline.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-fog-300 md:text-base">
          The URL you followed doesn&apos;t exist — or has been retired. Head
          back to the dashboard.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
          >
            Return home
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-fog-100 backdrop-blur"
          >
            Report a broken link
          </Link>
        </div>
      </div>
    </section>
  );
}
