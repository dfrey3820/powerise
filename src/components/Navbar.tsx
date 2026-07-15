"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container-x">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500",
            scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent"
          )}
        >
          <Logo size={36} className="-my-1" />

          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              if (item.children) {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                        active
                          ? "text-fog-100"
                          : "text-fog-300 hover:text-fog-100"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full pt-3"
                        >
                          <div className="glass-strong w-80 rounded-2xl p-2 shadow-2xl shadow-black/50">
                            {item.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                              >
                                <span className="text-sm font-medium text-fog-100 group-hover:text-brand-200">
                                  {c.label}
                                </span>
                                {c.description && (
                                  <span className="text-xs text-fog-300">
                                    {c.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-fog-100"
                        : "text-fog-300 hover:text-fog-100"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-mint-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-brand-700/50 transition-colors hover:bg-brand-700"
            >
              <span>Request a callback</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-fog-100 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-x mt-2 lg:hidden"
          >
            <div className="glass-strong rounded-2xl p-3">
              <ul className="flex flex-col gap-0.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-fog-200 hover:bg-white/5 hover:text-fog-100"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-3 border-l border-white/10 pl-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block rounded-lg px-3 py-2 text-xs text-fog-300 hover:text-fog-100"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-brand-700/50 hover:bg-brand-700"
              >
                Request a callback →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
