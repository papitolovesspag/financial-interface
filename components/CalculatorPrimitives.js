"use client";

import { motion } from "framer-motion";

export function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatMoney(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export function formatPercent(value) {
  return `${Number.isFinite(value) ? value.toFixed(2) : "0.00"}%`;
}

export function ToolHero({ eyebrow, title, summary, accent = "from-teal-500 via-amber-400 to-rose-500", icon: Icon }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-6 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xl shadow-slate-950/5 sm:p-7"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--muted)]">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-black tracking-tight text-[var(--app-text)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            {summary}
          </p>
        </div>
        {Icon ? (
          <div className={`grid size-20 shrink-0 place-items-center rounded-[1.6rem] bg-gradient-to-br ${accent} text-white shadow-2xl shadow-rose-500/20 sm:size-24`}>
            <Icon size={38} strokeWidth={2.4} />
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export function ToolGrid({ children }) {
  return <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">{children}</div>;
}

export function Panel({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      className={`rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xl shadow-slate-950/5 sm:p-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function Field({ label, value, onChange, min = "0", step = "0.01", suffix, placeholder = "0" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--app-text)]">{label}</span>
      <span className="flex items-center overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] transition focus-within:border-teal-400 focus-within:ring-4 focus-within:ring-teal-400/15">
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base font-bold outline-none"
        />
        {suffix ? (
          <span className="border-l border-[var(--line)] px-3 text-sm font-black text-[var(--muted)]">
            {suffix}
          </span>
        ) : null}
      </span>
    </label>
  );
}

export function TextField({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--app-text)]">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-base font-bold outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-400/15"
      />
    </label>
  );
}

export function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--app-text)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-base font-bold outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-400/15"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SegmentedControl({ value, onChange, options }) {
  return (
    <div className="grid rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-1 sm:inline-grid sm:grid-flow-col">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-xl px-4 py-2 text-sm font-black transition ${
              active
                ? "bg-[var(--app-text)] text-[var(--app-bg)] shadow"
                : "text-[var(--muted)] hover:text-[var(--app-text)]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function ResultGrid({ children }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}

export function ResultCard({ label, value, tone = "teal" }) {
  const tones = {
    teal: "from-teal-500/18 to-cyan-500/10",
    rose: "from-rose-500/18 to-orange-500/10",
    amber: "from-amber-400/22 to-lime-400/10",
    indigo: "from-indigo-500/18 to-sky-500/10",
  };

  return (
    <div className={`rounded-2xl border border-[var(--line)] bg-gradient-to-br ${tones[tone]} p-4`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 break-words text-2xl font-black text-[var(--app-text)]">
        {value}
      </p>
    </div>
  );
}

export function PrimaryButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-2xl bg-[var(--app-text)] px-4 py-3 text-sm font-black text-[var(--app-bg)] shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, onClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm font-black text-[var(--app-text)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
    >
      {children}
    </button>
  );
}
