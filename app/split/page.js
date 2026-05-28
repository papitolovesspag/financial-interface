"use client";

import { useMemo, useState } from "react";
import { Plus, Trash2, Users } from "lucide-react";
import {
  Field,
  GhostButton,
  Panel,
  PrimaryButton,
  ResultCard,
  ResultGrid,
  TextField,
  ToolGrid,
  ToolHero,
  formatMoney,
  toNumber,
} from "@/components/CalculatorPrimitives";
import { splitBillByRatio } from "@/utils/mathHelpers";

const starterPeople = [
  { id: 1, name: "Person A", ratio: "2" },
  { id: 2, name: "Person B", ratio: "1" },
  { id: 3, name: "Person C", ratio: "1" },
];

export default function SplitPage() {
  const [bill, setBill] = useState("120000");
  const [people, setPeople] = useState(starterPeople);

  const shares = useMemo(() => {
    const ratios = people.map((person) => Math.max(0, toNumber(person.ratio)));
    return splitBillByRatio(toNumber(bill), ratios);
  }, [bill, people]);

  const totalRatio = people.reduce(
    (sum, person) => sum + Math.max(0, toNumber(person.ratio)),
    0
  );

  const updatePerson = (id, key, value) => {
    setPeople((current) =>
      current.map((person) =>
        person.id === id ? { ...person, [key]: value } : person
      )
    );
  };

  const addPerson = () => {
    setPeople((current) => [
      ...current,
      { id: Date.now(), name: `Person ${current.length + 1}`, ratio: "1" },
    ]);
  };

  const removePerson = (id) => {
    setPeople((current) => current.filter((person) => person.id !== id));
  };

  return (
    <div>
      <ToolHero
        eyebrow="Bill splitting"
        title="Share by ratio"
        summary="Split group expenses using weighted ratios for unequal contributions."
        icon={Users}
        accent="from-amber-400 via-orange-500 to-rose-500"
      />

      <ToolGrid>
        <Panel>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-black">Bill and ratios</h2>
            <PrimaryButton onClick={addPerson}>
              <Plus className="mr-2" size={17} />
              Add person
            </PrimaryButton>
          </div>

          <div className="grid gap-4">
            <Field label="Total bill" value={bill} onChange={setBill} />
            {people.map((person) => (
              <div
                key={person.id}
                className="grid gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-3 sm:grid-cols-[1fr_8rem_auto] sm:items-end"
              >
                <TextField
                  label="Name"
                  value={person.name}
                  onChange={(value) => updatePerson(person.id, "name", value)}
                  placeholder="Name"
                />
                <Field
                  label="Ratio"
                  value={person.ratio}
                  onChange={(value) => updatePerson(person.id, "ratio", value)}
                  step="1"
                />
                <GhostButton
                  onClick={() => removePerson(person.id)}
                  disabled={people.length <= 2}
                >
                  <Trash2 size={17} />
                </GhostButton>
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-5">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--muted)]">
              Results
            </p>
            <h2 className="text-xl font-black">Each share</h2>
          </div>

          <ResultGrid>
            <ResultCard label="Total ratio" value={String(totalRatio)} tone="amber" />
            <ResultCard label="Total bill" value={formatMoney(toNumber(bill))} tone="rose" />
          </ResultGrid>

          <div className="mt-4 space-y-3">
            {people.map((person, index) => (
              <div
                key={person.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-black">{person.name || `Person ${index + 1}`}</p>
                  <p className="text-sm font-bold text-[var(--muted)]">
                    Ratio {Math.max(0, toNumber(person.ratio))}
                  </p>
                </div>
                <p className="shrink-0 text-lg font-black">{formatMoney(shares[index])}</p>
              </div>
            ))}
          </div>
        </Panel>
      </ToolGrid>
    </div>
  );
}
