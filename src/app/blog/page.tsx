import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { posts } from "@/lib/data";
import { postImages } from "@/lib/images";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes, engineering deep-dives and strategy pieces from the Powerise team."
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Field notes from the{" "}
            <span className="gradient-text">edge of the network.</span>
          </>
        }
        description="No thought-leadership fluff. Just the deployments, the trade-offs, and the numbers behind the platform we ship every day."
      />

      <section className="container-x relative pb-24">
        <Link
          href={`/blog/${featured.slug}`}
          className="gradient-border group relative mb-10 grid overflow-hidden rounded-3xl bg-ink-900/70 p-8 backdrop-blur transition-all hover:-translate-y-1 md:grid-cols-[1.3fr_1fr] md:p-12"
        >
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-mint-500/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 text-xs text-fog-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-brand-200">
                {featured.tag}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {featured.category}
              </span>
              <span>·</span>
              <span>{formatDate(featured.date)}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-fog-100 text-balance md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fog-300 md:text-base">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-fog-300">
              <span>{featured.author}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {featured.readTime}
              </span>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200 transition-colors group-hover:text-brand-100">
              Read the featured piece
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          <div className="relative mt-6 md:mt-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={postImages[featured.slug]}
                alt={featured.title}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/25 via-transparent to-mint-500/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-brand-100 backdrop-blur">
                Featured
              </span>
            </div>
          </div>
        </Link>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-500/40"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={postImages[post.slug]}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-brand-100 backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-fog-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-brand-200">
                    {post.tag}
                  </span>
                  <span>·</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-fog-100 text-balance group-hover:text-brand-200">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fog-300">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-fog-300">
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
