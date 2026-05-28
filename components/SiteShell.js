"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BadgeInfo,
  Calculator,
  CircleDollarSign,
  Home,
  Moon,
  Percent,
  Receipt,
  Sun,
  Users,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/interest", label: "Interest", icon: Calculator },
  { href: "/amortization", label: "Loans", icon: CircleDollarSign },
  { href: "/roi", label: "ROI", icon: Percent },
  { href: "/split", label: "Split", icon: Users },
  { href: "/tip", label: "Tips", icon: Receipt },
  { href: "/about", label: "About", icon: BadgeInfo },
];

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("financial-interface-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return storedTheme || (prefersDark ? "dark" : "light");
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("financial-interface-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--app-bg)] text-[var(--app-text)]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,var(--wash-one),transparent_30%),radial-gradient(circle_at_84%_8%,var(--wash-two),transparent_28%),linear-gradient(145deg,var(--app-bg),var(--app-bg-soft))]" />
      <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <span className="relative size-10 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-rose-500/20">
              <Image
                src="/logo.svg"
                alt=""
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-black uppercase tracking-[0.18em] text-[var(--muted)]">
                FinCalc
              </span>
              <span className="block truncate text-lg font-black leading-none">
                Interface
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 shadow-sm md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition ${
                    active
                      ? "bg-[var(--app-text)] text-[var(--app-bg)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--app-text)]"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--app-text)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--surface-strong)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        {children}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--mobile-nav-bg)] px-2 py-2 backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-7 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-w-0 flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[0.68rem] font-bold transition ${
                  active
                    ? "bg-[var(--app-text)] text-[var(--app-bg)]"
                    : "text-[var(--muted)]"
                }`}
              >
                <Icon size={18} />
                <span className="w-full truncate text-center">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
