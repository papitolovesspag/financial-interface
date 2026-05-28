"use client";

import { useState } from "react";
import { Banknote, CalendarClock } from "lucide-react";
import {
  Field,
  Panel,
  ResultCard,
  ResultGrid,
  ToolGrid,
  ToolHero,
  formatMoney,
  toNumber,
} from "@/components/CalculatorPrimitives";
import { calculateAmortization } from "@/utils/mathHelpers";

export default function AmortizationPage() {
  const [principal, setPrincipal] = useState("1500000");
  const [rate, setRate] = useState("9.5");
  const [years, setYears] = useState("5");

  const principalValue = toNumber(principal);
  const yearsValue = toNumber(years);
  const canCalculate = principalValue > 0 && yearsValue > 0;
  const result = canCalculate
    ? calculateAmortization(principalValue, toNumber(rate), yearsValue)
    : { monthlyPayment: 0, totalInterest: 0, totalPayment: 0 };

  return (
    <div>
      <ToolHero
        eyebrow="Loan planner"
        title="Monthly payment breakdown"
        summary="Estimate loan or mortgage payments, total interest, and the full amount paid over the repayment period."
        icon={Banknote}
        accent="from-indigo-500 via-sky-400 to-teal-400"
      />

      <ToolGrid>
        <Panel>
          <h2 className="mb-5 text-xl font-black">Loan details</h2>
          <div className="grid gap-4">
            <Field label="Loan amount" value={principal} onChange={setPrincipal} />
            <Field label="Annual interest rate" value={rate} onChange={setRate} suffix="%" />
            <Field label="Repayment period" value={years} onChange={setYears} suffix="years" />
          </div>
        </Panel>

        <Panel className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-indigo-500/15 text-indigo-500">
              <CalendarClock size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Results
              </p>
              <h2 className="text-xl font-black">Repayment estimate</h2>
            </div>
          </div>

          <ResultGrid>
            <ResultCard label="Monthly payment" value={formatMoney(result.monthlyPayment)} tone="indigo" />
            <ResultCard label="Total interest" value={formatMoney(result.totalInterest)} tone="rose" />
            <ResultCard label="Total payment" value={formatMoney(result.totalPayment)} tone="amber" />
            <ResultCard label="Payments" value={`${Math.max(0, yearsValue * 12)} months`} tone="teal" />
          </ResultGrid>
        </Panel>
      </ToolGrid>
    </div>
  );
}
