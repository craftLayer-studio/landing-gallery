/**
 * Per-use pricing maths for the Ledgerline demo. Rates are fictional
 * sample rates, stored in mills (thousandths of a dollar) so sub-cent
 * per-transaction rates stay exact.
 */
export type LineItem = {
  id: string;
  label: string;
  unit: string;
  note: string;
  /** Rate per unit in mills: 1000 mills = $1.00. */
  rateMills: number;
  defaultQuantity: number;
};

export const LINE_ITEMS: LineItem[] = [
  {
    id: 'transactions',
    label: 'Transactions matched',
    unit: 'per transaction',
    note: 'Each processor or bank line the matcher pairs.',
    rateMills: 4,
    defaultQuantity: 25000,
  },
  {
    id: 'feeds',
    label: 'Connected feeds',
    unit: 'per feed / month',
    note: 'A bank account or payment processor source.',
    rateMills: 15000,
    defaultQuantity: 4,
  },
  {
    id: 'exceptions',
    label: 'Exceptions routed',
    unit: 'per exception',
    note: 'Lines sent to the review queue with a reason code.',
    rateMills: 100,
    defaultQuantity: 300,
  },
  {
    id: 'exports',
    label: 'Ledger exports',
    unit: 'per export',
    note: 'CSV or journal-entry files for your general ledger.',
    rateMills: 500,
    defaultQuantity: 30,
  },
];

export const MAX_QUANTITY = 10_000_000;

/** Coerce raw input to a whole, non-negative quantity within bounds. */
export function sanitizeQuantity(raw: string | number): number {
  const n = typeof raw === 'number' ? raw : Number(String(raw).replace(/[,\s_]/g, ''));
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.min(Math.floor(n), MAX_QUANTITY);
}

export type Estimate = {
  lines: {id: string; quantity: number; subtotalMills: number}[];
  totalMills: number;
};

export function estimateMonthly(items: LineItem[], quantities: Record<string, number | string>): Estimate {
  const lines = items.map((item) => {
    const quantity = sanitizeQuantity(quantities[item.id] ?? 0);
    return {id: item.id, quantity, subtotalMills: quantity * item.rateMills};
  });
  return {lines, totalMills: lines.reduce((sum, l) => sum + l.subtotalMills, 0)};
}

const usd = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2});
const usdRate = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 3});

/** Format mills as dollars, rounded half-up to the cent. */
export function formatMills(mills: number): string {
  return usd.format(Math.round(mills / 10) / 100);
}

/** Format a unit rate, keeping a third decimal for sub-cent rates. */
export function formatRate(mills: number): string {
  return usdRate.format(mills / 1000);
}
