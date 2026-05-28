"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Calculator, 
  CircleDollarSign,
  Percent, 
  Users, 
  Receipt, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const tools = [
  {
    title: "Interest & Profits",
    description: "Simple interest, compound growth, and profit over time.",
    href: "/interest",
    icon: Calculator,
    accent: "from-teal-500 to-cyan-400",
  },
  {
    title: "Amortization",
    description: "Monthly payment, total repayment, and loan interest.",
    href: "/amortization",
    icon: CircleDollarSign,
    accent: "from-indigo-500 to-sky-400",
  },
  {
    title: "Return on Investment",
    description: "Net profit and ROI percentage from two values.",
    href: "/roi",
    icon: Percent,
    accent: "from-lime-500 to-emerald-500",
  },
  {
    title: "Bill Splitter",
    description: "Custom ratio sharing for group bills.",
    href: "/split",
    icon: Users,
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Tip & Tax Calculator",
    description: "Tip, tax, grand total, and per-person amount.",
    href: "/tip",
    icon: Receipt,
    accent: "from-rose-500 to-fuchsia-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xl shadow-slate-950/5 sm:p-8 lg:p-10"
      >
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="absolute -right-16 -top-20 size-48 rounded-full bg-[conic-gradient(from_120deg,#14b8a6,#f59e0b,#ef4444,#8b5cf6,#14b8a6)] opacity-25 blur-2xl"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--muted)]">
            <Sparkles size={14} />
            Group financial toolkit
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[var(--app-text)] sm:text-6xl">
            Financial Interface
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            A vibrant JavaScript project for interest, profit, bill sharing,
            tips, tax, loan payments, and ROI calculations.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <motion.div key={tool.title} variants={itemVariants}>
              <Link href={tool.href} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-lg shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-strong)] hover:shadow-2xl">
                  <div className={`mb-5 grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${tool.accent} text-white shadow-lg`}>
                    <Icon size={26} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-xl font-black text-[var(--app-text)]">
                    {tool.title}
                  </h2>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">
                    {tool.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[var(--app-text)]">
                    Open <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.section>
    </div>
  );
}
