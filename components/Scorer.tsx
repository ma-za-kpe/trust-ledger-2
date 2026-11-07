"use client";
// Trust Ledger's primary task (M1): the analyst enters one small trader's
// cash facts on a paper EMMA-style slip and the Count Box fills note by
// note until the Trust Score Gauge reads a 0-100 score with an approve,
// refer or decline band. The slip is the team's own concept, not a bank
// decision, and the record is kept on this device only (lib/db.ts).
// IndexedDB holds it.
import { useMemo, useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import { score, type Inputs } from "@/lib/score";

export type Decision = {
  name: string;
  inputs: Inputs;
  score: number;
  band: "approve" | "refer" | "decline";
  lowConfidence: boolean;
  openedAt: number;
  savedAt: number;
};

const FIELDS: { key: keyof Inputs; label: string; hint: string }[] = [
  { key: "cashflow", label: "Monthly cashflow (RWF)", hint: "Cash the trader counts out each month" },
  { key: "months", label: "Months in operation", hint: "How long the trade has run" },
  { key: "repayment", label: "On-time repayment rate (%)", hint: "0-100, from the trader's own record" },
  { key: "volume", label: "Monthly trade volume (RWF)", hint: "Goods turned over each month" },
];

export default function Scorer() {
  const { add, status } = useCollection<Decision>("decisions");
  const [name, setName] = useState("");
  const [values, setValues] = useState<Record<keyof Inputs, string>>({
    cashflow: "",
    months: "",
    repayment: "",
    volume: "",
  });
  const [ack, setAck] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const openedAt = useMemo(() => Date.now(), []);

  const filled = FIELDS.filter((f) => values[f.key].trim() !== "").length;
  const complete = filled === 4;
  const lowConfidence = filled > 0 && filled < 3;
  const numbers = FIELDS.map((f) => Number(values[f.key].replace(/\s/g, "")));
  const inputs: Inputs = {
    cashflow: numbers[0],
    months: numbers[1],
    repayment: numbers[2],
    volume: numbers[3],
  };
  const result = complete ? score(inputs) : null;
  const canSave =
    complete && name.trim() !== "" && (!lowConfidence || ack) && status === "ready";

  const save = async () => {
    if (!canSave || !result) return;
    setError("");
    try {
      await add({
        name: name.trim(),
        inputs,
        score: result.score,
        band: result.band,
        lowConfidence,
        openedAt,
        savedAt: Date.now(),
      });
      setSaved(true);
      setName("");
      setValues({ cashflow: "", months: "", repayment: "", volume: "" });
      setAck(false);
    } catch {
      setError("Could not save the entry. Check your device storage.");
    }
  };

  return (
    <section className="slip" aria-labelledby="slip-title">
      <h2 id="slip-title" className="slip__title">Trader slip</h2>
      <p className="slip__lede">Enter one small trader's cash facts. The count box fills as each note goes in.</p>
      <label className="field" htmlFor="slip-name">
        <span className="field__label">Borrower name</span>
        <input
          id="slip-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. A. Mukamana"
        />
      </label>
      <div className="count-box" role="group" aria-label="Cash facts">
        {FIELDS.map((f, i) => {
          const full = values[f.key].trim() !== "";
          return (
            <label key={f.key} className={`note${full ? " note--in" : ""}`} htmlFor={`slip-${f.key}`}>
              <span className="note__index">{i + 1}</span>
              <span className="field__label">{f.label}</span>
              <input
                id={`slip-${f.key}`}
                type="text"
                inputMode="numeric"
                value={values[f.key]}
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                placeholder={f.hint}
              />
            </label>
          );
        })}
      </div>
      <div className="gauge" aria-live="polite">
        <div className="gauge__bar" aria-hidden="true">
          <span style={{ width: `${result ? result.score : 0}%` }} />
        </div>
        <p className="gauge__read">
          {result ? (
            <>
              Trust score <strong>{result.score}</strong> / 100 — band: <strong>{result.band}</strong>
            </>
          ) : (
            "Counting the cash..."
          )}
        </p>
        {lowConfidence && (
          <label className="flag" htmlFor="slip-ack">
            <input
              id="slip-ack"
              type="checkbox"
              checked={ack}
              onChange={(e) => setAck(e.target.checked)}
            />
            Low-confidence flag: fewer than three of four facts are in. I acknowledge this score is partial.
          </label>
        )}
        {saved && <p className="slip__saved">Saved to this device.</p>}
        {error && <p className="slip__error" role="alert">{error}</p>}
      </div>
      <button type="button" className="button" disabled={!canSave} onClick={() => void save()}>
        Save to device
      </button>
      <p className="slip__caveat">
        Concept, not a bank decision. The score and this slip are stored only on this device.
      </p>
    </section>
  );
}
