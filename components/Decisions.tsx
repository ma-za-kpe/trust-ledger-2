"use client";
// Trust Ledger's ledger list (M2 + M4): every slip saved on this device,
// each row reopenable to the exact inputs and score (J3: the same numbers,
// no re-entry), plus the weekly batch summary a risk officer reads at a
// glance. Records live in IndexedDB through lib/db.ts; nothing syncs.
import { useMemo, useState } from "react";
import { useCollection } from "@/components/kit/useCollection";
import type { Decision } from "@/components/Scorer";

const fmt = (ms: number) => {
  const s = Math.max(1, Math.round(ms / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  return `${m}m ${s % 60}s`;
};

// ISO week (Monday start) of a timestamp.
function isoWeekKey(t: number) {
  const d = new Date(t);
  const day = (d.getUTCDay() + 6) % 7; // Monday = 0
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day));
  return `${monday.getUTCFullYear()}-${String(monday.getUTCMonth() + 1).padStart(2, "0")}-${String(monday.getUTCDate()).padStart(2, "0")}`;
}

export default function Decisions() {
  const { items, status } = useCollection<Decision>("decisions");
  const [openId, setOpenId] = useState<string | null>(null);

  const week = isoWeekKey(Date.now());
  const batch = useMemo(() => {
    const counts = { approve: 0, decline: 0, refer: 0 } as Record<Decision["band"], number>;
    for (const item of items) {
      if (isoWeekKey(item.value.savedAt) === week) counts[item.value.band] += 1;
    }
    return counts;
  }, [items, week]);

  const open = items.find((i) => i.id === openId)?.value ?? null;

  return (
    <section className="ledger" aria-labelledby="ledger-title">
      <h2 id="ledger-title" className="ledger__title">Ledger on this device</h2>
      <p className="ledger__lede">Slips already saved. Tap a row to reopen it.</p>
      {status === "loading" && <p className="ledger__status" role="status">Counting the cash...</p>}
      {status === "error" && (
        <p className="ledger__status ledger__status--error" role="alert">
          Could not save the entry. Check your device storage.
        </p>
      )}
      {status === "ready" && items.length === 0 && (
        <p className="ledger__status">No cash entries yet. Start by entering the first amount.</p>
      )}
      {status === "ready" && items.length > 0 && (
        <ul className="ledger__rows">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="ledger__row"
                onClick={() => setOpenId(item.id === openId ? null : item.id)}
                aria-expanded={item.id === openId}
              >
                <span className="ledger__name">{item.value.name}</span>
                <time dateTime={new Date(item.value.savedAt).toISOString()}>
                  {new Date(item.value.savedAt).toLocaleDateString()}
                </time>
                <span className="ledger__score">{item.value.score}</span>
                <span className={`ledger__band ledger__band--${item.value.band}`}>
                  {item.value.band}
                </span>
              </button>
              {item.id === openId && (
                <dl className="ledger__detail">
                  <div><dt>Monthly cashflow (RWF)</dt><dd>{item.value.inputs.cashflow.toLocaleString()}</dd></div>
                  <div><dt>Months in operation</dt><dd>{item.value.inputs.months}</dd></div>
                  <div><dt>On-time repayment rate (%)</dt><dd>{item.value.inputs.repayment}</dd></div>
                  <div><dt>Monthly trade volume (RWF)</dt><dd>{item.value.inputs.volume.toLocaleString()}</dd></div>
                  <div><dt>Trust score</dt><dd>{item.value.score} / 100</dd></div>
                  <div><dt>Band</dt><dd>{item.value.band}</dd></div>
                  <div><dt>Time from opening the scorer to saving</dt><dd>{fmt(item.value.savedAt - item.value.openedAt)}</dd></div>
                </dl>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="batch" aria-labelledby="batch-title">
        <h3 id="batch-title">This week (Mon–Sun)</h3>
        <ul className="batch__counts">
          <li><span className="ledger__band ledger__band--approve">approve</span> {batch.approve}</li>
          <li><span className="ledger__band ledger__band--refer">refer</span> {batch.refer}</li>
          <li><span className="ledger__band ledger__band--decline">decline</span> {batch.decline}</li>
        </ul>
      </div>
      <p className="ledger__caveat">
        Decisions are stored locally in IndexedDB on this device and are not synced to any server.
      </p>
    </section>
  );
}
