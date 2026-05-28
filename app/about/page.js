"use client";

import { motion } from "framer-motion";
import {
  BadgeInfo,
  Code2,
  Crown,
  DatabaseZap,
  Globe2,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const groupMembers = [
  {
    name: "CHINZE KOSISOCHUKWU TOBENNA",
    role: "Group Leader, Lead Developer, UI Architect",
    focus:
      "Led the project direction, implemented the main application structure, calculator interfaces, styling system, and deployment preparation.",
    lead: true,
  },
  {
    name: "BAKPO NEKABARI",
    role: "Research Assistant",
    focus:
      "Supported review of calculator use cases and helped confirm the financial tools required for the project brief.",
  },
  {
    name: "CHIDI CHUKWUKA GODSON",
    role: "Quality Assurance Support",
    focus:
      "Assisted with checking the calculator flows and reviewing the interface for clarity across pages.",
  },
  {
    name: "CHIGBO-EZE OZIOMA ANN",
    role: "Content Support",
    focus:
      "Helped organize project wording, labels, and the presentation of the About page information.",
  },
  {
    name: "CHIKA GOODNEWS OKECHUKWU",
    role: "Interface Review Support",
    focus:
      "Contributed feedback on layout, mobile usability, and how the tools should be arranged for users.",
  },
  {
    name: "CHIKEZIE DIVINEFAVOUR CHIDIEBUBE",
    role: "Calculation Review Support",
    focus:
      "Assisted in reviewing sample financial values and expected outputs for the calculator screens.",
  },
  {
    name: "CHINWEODO EMMANUEL CHINWEKENE",
    role: "Documentation Support",
    focus:
      "Supported README structure, project explanation, and deployment note review.",
  },
];

const decisions = [
  {
    title: "Framework",
    value: "Next.js App Router",
    icon: Code2,
    copy: "A JavaScript React framework with routing, server rendering, and simple deployment paths.",
  },
  {
    title: "Data",
    value: "No database required",
    icon: DatabaseZap,
    copy: "The calculators are deterministic and run from user-entered values.",
  },
  {
    title: "Authentication",
    value: "Not required",
    icon: ShieldCheck,
    copy: "There are no private accounts, saved records, or protected user data.",
  },
  {
    title: "Hosting",
    value: "Render ready",
    icon: Globe2,
    copy: "The app can be connected to GitHub and deployed as a Node web service.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xl shadow-slate-950/5 sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[var(--muted)]">
              About the project
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Financial Interface
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
              This project brings common financial calculations into one
              mobile-first interface: interest, profit, amortization, ROI, bill
              splitting, tips, and tax.
            </p>
          </div>
          <div className="grid min-h-48 place-items-center rounded-[1.5rem] bg-[linear-gradient(135deg,#14b8a6,#f59e0b,#ef4444,#8b5cf6)] text-white shadow-2xl shadow-rose-500/20">
            <BadgeInfo size={72} strokeWidth={1.8} />
          </div>
        </div>
      </motion.section>

      <section className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-lg shadow-slate-950/5 sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl bg-[var(--surface-strong)] text-teal-500">
            <UsersRound size={24} />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
              Group Members
            </p>
            <h2 className="text-2xl font-black">Project Team</h2>
          </div>
        </div>

        <div className="grid gap-3">
          {groupMembers.map((member) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, ease: "easeOut" }}
              className={`rounded-2xl border p-4 ${
                member.lead
                  ? "border-amber-400/50 bg-[linear-gradient(135deg,rgba(20,184,166,.16),rgba(245,158,11,.18),rgba(239,68,68,.12))]"
                  : "border-[var(--line)] bg-[var(--surface-strong)]"
              }`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-black sm:text-lg">
                      {member.name}
                    </h3>
                    {member.lead ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-xs font-black text-slate-950">
                        <Crown size={13} />
                        Group Leader
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-black text-teal-500">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {member.focus}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {decisions.map((decision) => {
          const Icon = decision.icon;
          return (
            <motion.article
              key={decision.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-lg shadow-slate-950/5"
            >
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-[var(--surface-strong)] text-teal-500">
                <Icon size={24} />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                {decision.title}
              </p>
              <h2 className="mt-1 text-xl font-black">{decision.value}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {decision.copy}
              </p>
            </motion.article>
          );
        })}
      </section>

    </div>
  );
}
