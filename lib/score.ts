// Trust Ledger's trust score (the team's own concept, not a bank model).
// Weights are stated on the page so an analyst can see exactly how the
// number was derived: 40% monthly cashflow, 25% months in operation,
// 25% on-time repayment rate, 10% monthly trade volume. Each input is
// saturated at a ceiling so one huge figure cannot carry the score alone.
export type Inputs = {
  cashflow: number;
  months: number;
  repayment: number;
  volume: number;
};

export type Band = "approve" | "refer" | "decline";

export type Result = { score: number; band: Band };

export const WEIGHTS = {
  cashflow: 0.4,
  months: 0.25,
  repayment: 0.25,
  volume: 0.1,
} as const;

// Saturation ceilings (RWF / months / %).
const CEILINGS = {
  cashflow: 2_000_000,
  months: 36,
  repayment: 100,
  volume: 5_000_000,
} as const;

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

export function score({ cashflow, months, repayment, volume }: Inputs): Result {
  const parts =
    WEIGHTS.cashflow * clamp01(cashflow / CEILINGS.cashflow) +
    WEIGHTS.months * clamp01(months / CEILINGS.months) +
    WEIGHTS.repayment * clamp01(repayment / CEILINGS.repayment) +
    WEIGHTS.volume * clamp01(volume / CEILINGS.volume);
  const value = Math.round(parts * 100);
  const band: Band = value >= 70 ? "approve" : value >= 40 ? "refer" : "decline";
  return { score: value, band };
}
