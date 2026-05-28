"use client";

import { useState } from "react";
import { Percent, TrendingUp } from "lucide-react";
import {
  Field,
  Panel,
  ResultCard,
  ResultGrid,
  ToolGrid,
  ToolHero,
  formatMoney,
  formatPercent,
  toNumber,
} from "@/components/CalculatorPrimitives";
import { calculateROI } from "@/utils/mathHelpers";

export default function RoiPage() {
  const [initial, setInitial] = useState("300000");
  const [finalValue, setFinalValue] = useState("390000");

  const initialValue = toNumber(initial);
  const result =
    initialValue > 0
      ? calculateROI(initialValue, toNumber(finalValue))
      : { netProfit: 0, roiPercentage: 0 };

  return (
    <div>
      <ToolHero
        eyebrow="Investment return"
        title="Measure profit clearly"
        summary="Turn initial cost and final value into net profit and percentage return."
        icon={Percent}
        accent="from-lime-500 via-emerald-500 to-teal-500"
      />

      <ToolGrid>
        <Panel>
          <h2 className="mb-5 text-xl font-black">Investment values</h2>
          <div className="grid gap-4">
            <Field label="Initial investment" value={initial} onChange={setInitial} />
            <Field label="Final value" value={finalValue} onChange={setFinalValue} />
          </div>
        </Panel>

        <Panel className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-500">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                Results
              </p>
              <h2 className="text-xl font-black">ROI summary</h2>
            </div>
          </div>

          <ResultGrid>
            <ResultCard label="Net profit" value={formatMoney(result.netProfit)} tone="teal" />
            <ResultCard label="ROI" value={formatPercent(result.roiPercentage)} tone="amber" />
          </ResultGrid>
        </Panel>
      </ToolGrid>
    </div>
  );
}
