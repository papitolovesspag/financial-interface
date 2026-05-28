"use client";

import { useState } from "react";
import { Receipt, Users } from "lucide-react";
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
import { calculateTipAndTax } from "@/utils/mathHelpers";

export default function TipPage() {
  const [bill, setBill] = useState("45000");
  const [tip, setTip] = useState("10");
  const [tax, setTax] = useState("7.5");
  const [people, setPeople] = useState("3");

  const peopleValue = Math.max(1, Math.round(toNumber(people)));
  const result = calculateTipAndTax(
    toNumber(bill),
    toNumber(tip),
    toNumber(tax),
    peopleValue
  );

  return (
    <div>
      <ToolHero
        eyebrow="Tips and tax"
        title="Settle the final bill"
        summary="Calculate tax, tip, grand total, and what each person should pay."
        icon={Receipt}
        accent="from-rose-500 via-fuchsia-500 to-indigo-500"
      />

      <ToolGrid>
        <Panel>
          <h2 className="mb-5 text-xl font-black">Bill details</h2>
          <div className="grid gap-4">
            <Field label="Bill amount" value={bill} onChange={setBill} />
            <Field label="Tip" value={tip} onChange={setTip} suffix="%" />
            <Field label="Tax" value={tax} onChange={setTax} suffix="%" />
            <Field label="Number of people" value={people} onChange={setPeople} step="1" />
          </div>
        </Panel>

        <Panel className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-rose-500/15 text-rose-500">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Results
              </p>
              <h2 className="text-xl font-black">Bill summary</h2>
            </div>
          </div>

          <ResultGrid>
            <ResultCard label="Tax amount" value={formatMoney(result.taxAmount)} tone="indigo" />
            <ResultCard label="Tip amount" value={formatMoney(result.tipAmount)} tone="rose" />
            <ResultCard label="Grand total" value={formatMoney(result.grandTotal)} tone="amber" />
            <ResultCard label="Per person" value={formatMoney(result.perPerson)} tone="teal" />
          </ResultGrid>
        </Panel>
      </ToolGrid>
    </div>
  );
}
