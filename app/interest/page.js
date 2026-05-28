"use client";

import { useState } from "react";
import { Calculator, Clock, TrendingUp } from "lucide-react";
import {
  Field,
  Panel,
  ResultCard,
  ResultGrid,
  SegmentedControl,
  SelectField,
  ToolGrid,
  ToolHero,
  formatMoney,
  toNumber,
} from "@/components/CalculatorPrimitives";
import {
  calculateCompoundInterest,
  calculateSimpleInterest,
} from "@/utils/mathHelpers";

const frequencyOptions = [
  { label: "Monthly", value: "12" },
  { label: "Quarterly", value: "4" },
  { label: "Yearly", value: "1" },
  { label: "Daily", value: "365" },
];

export default function InterestPage() {
  const [mode, setMode] = useState("compound");
  const [principal, setPrincipal] = useState("250000");
  const [rate, setRate] = useState("12");
  const [time, setTime] = useState("2");
  const [frequency, setFrequency] = useState("12");

  const principalValue = toNumber(principal);
  const rateValue = toNumber(rate);
  const timeValue = toNumber(time);
  const result =
    mode === "simple"
      ? calculateSimpleInterest(principalValue, rateValue, timeValue)
      : calculateCompoundInterest(
          principalValue,
          rateValue,
          timeValue,
          toNumber(frequency)
        );

  return (
    <div>
      <ToolHero
        eyebrow="Interest and profit"
        title="Grow money over time"
        summary="Compare fixed simple interest with compounding returns for savings, investments, and business profit estimates."
        icon={Calculator}
        accent="from-teal-500 via-cyan-400 to-emerald-500"
      />

      <ToolGrid>
        <Panel>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-black">Calculation type</h2>
            <SegmentedControl
              value={mode}
              onChange={setMode}
              options={[
                { label: "Compound", value: "compound" },
                { label: "Simple", value: "simple" },
              ]}
            />
          </div>

          <div className="grid gap-4">
            <Field label="Principal amount" value={principal} onChange={setPrincipal} />
            <Field label="Annual rate" value={rate} onChange={setRate} suffix="%" />
            <Field label="Time" value={time} onChange={setTime} suffix="years" />
            {mode === "compound" ? (
              <SelectField
                label="Compounding"
                value={frequency}
                onChange={setFrequency}
                options={frequencyOptions}
              />
            ) : null}
          </div>
        </Panel>

        <Panel className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-teal-500/15 text-teal-500">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Results
              </p>
              <h2 className="text-xl font-black">Projected value</h2>
            </div>
          </div>

          <ResultGrid>
            <ResultCard
              label={mode === "simple" ? "Total interest" : "Total profit"}
              value={formatMoney(
                mode === "simple" ? result.totalInterest : result.totalProfit
              )}
              tone="teal"
            />
            <ResultCard
              label="Total amount"
              value={formatMoney(result.totalAmount)}
              tone="amber"
            />
          </ResultGrid>

          <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4 text-sm leading-6 text-[var(--muted)]">
            <Clock className="mr-2 inline" size={16} />
            {mode === "compound"
              ? `Compounded ${frequency} time${frequency === "1" ? "" : "s"} per year.`
              : "Simple interest keeps the principal unchanged while interest accumulates."}
          </div>
        </Panel>
      </ToolGrid>
    </div>
  );
}
