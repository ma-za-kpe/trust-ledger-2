"use client";
// Trust Ledger's compare (M3): the risk officer picks two saved slips and
// reads them side by side. Fields where the two differ are highlighted, so
// an inconsistent decline can be spotted and overturned. Both slips come
// from this device's IndexedDB through lib/db.ts.
import { useMemo, useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import type { Decision } from "@/components/Scorer";

const ROWS: { key: keyof Decision["inputs"]; label: string; fmt?: (n: number) => string }[] = [
  { key: "cashflow", label: "Monthly cashflow (RWF)", fmt: (n) => n.toLocaleString() },
  { key: "months", label: "Months in operation" },
  { key: "repayment", label: "On-time repayment rate (%)", fmt: (n) => `${n}%` },
  { key: "volume", label: "Monthly trade volume (RWF)", fmt: (n) => n.toLocaleString() },
];

export default function Compare() {
  const { items, status } = useCollection<Decision>("decisions");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const da = useMemo(() => items.find((i) => i.id === a)?.value ?? null, [items, a]);
  const db = useMemo(() => items.find((i) => i.id === b)?.value ?? null, [items, b]);
  const ready = status === "ready" && a !== "" && b !== "" && a !== b && da && db;

  return (
    <section className="compare" aria-labelledby="compare-title">
      <h2 id="compare-title" className="compare__title">Compare two slips</h2>
      <p className="compare__lede">Pick two saved decisions. Differing fields are highlighted.</p>
      {status === "loading" && <p className="compare__status" role="status">Counting the cash...</p>}
      {status === "error" && (
        <p className="compare__status compare__status--error" role="alert">
          Could not save the entry. Check your device storage.
        </p>
      )}
      {status === "ready" && items.length < 2 && (
        <p className="compare__status">Save at least two slips to compare them.</p>
      )}
      {status === "ready" && items.length >= 2 && (
        <>
          <div className="compare__pick">
            <label className="field" htmlFor="compare-a">
              <span className="field__label">First slip</span>
              <select id="compare-a" value={a} onChange={(e) => setA(e.target.value)}>
                <option value="">Choose a slip…</option>
                {items.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.value.name} — {i.value.score} ({i.value.band})
                  </option>
                ))}
              </select>
            </label>
            <label className="field" htmlFor="compare-b">
              <span className="field__label">Second slip</span>
              <select id="compare-b" value={b} onChange={(e) => setB(e.target.value)}>
                <option value="">Choose a slip…</option>
                {items.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.value.name} — {i.value.score} ({i.value.band})
                  </option>
                ))}
              </select>
            </label>
          </div>
          {a !== "" && b !== "" && a === b && (
            <p className="compare__status">Choose two different slips.</p>
          )}
          {ready && da && db && (
            <table className="compare__table">
              <caption className="visually-hidden">Side-by-side comparison of two saved decisions</caption>
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">{da.name}</th>
                  <th scope="col">{db.name}</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => {
                  const va = da.inputs[row.key];
                  const vb = db.inputs[row.key];
                  const differs = va !== vb;
                  const cell = (n: number) => (row.fmt ? row.fmt(n) : String(n));
                  return (
                    <tr key={row.key} className={differs ? "compare__row--diff" : ""}>
                      <th scope="row">{row.label}</th>
                      <td>{cell(va)}</td>
                      <td>{cell(vb)}</td>
                    </tr>
                  );
                })}
                <tr className={da.score !== db.score ? "compare__row--diff" : ""}>
                  <th scope="row">Trust score</th>
                  <td>{da.score} / 100</td>
                  <td>{db.score} / 100</td>
                </tr>
                <tr className={da.band !== db.band ? "compare__row--diff" : ""}>
                  <th scope="row">Band</th>
                  <td>{da.band}</td>
                  <td>{db.band}</td>
                </tr>
              </tbody>
            </table>
          )}
          <p className="compare__how">
            How to read this: if two traders have similar inputs but very different scores or
            bands, review whether the decline was consistent with the team's risk appetite before
            it stands.
          </p>
        </>
      )}
      <p className="compare__caveat">Both slips are read from this device's IndexedDB; nothing is sent anywhere.</p>
    </section>
  );
}
