import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const base =
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold transition-all";
  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5",
    outline:
      "border border-white/15 bg-white/5 text-fog-100 backdrop-blur hover:bg-white/10",
    ghost: "text-fog-100 hover:text-brand-200"
  };
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {inner}
    </button>
  );
}
