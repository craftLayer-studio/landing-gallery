/** Toggle pricing maths for the Kiln demo. All prices are fictional samples. */
export type Cadence = 'monthly' | 'annual';

export type Plan = {
  id: string;
  name: string;
  /** Price per month when billed monthly, in whole dollars. */
  monthly: number;
  /** Price per year when billed annually, in whole dollars. */
  annual: number;
  description: string;
  bullets: string[];
  accent?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'local',
    name: 'Local',
    monthly: 0,
    annual: 0,
    description: 'The CLI and a cache on your own disk. For one machine and one repo.',
    bullets: ['Content-hashed task cache', 'Restores on every local run', 'Works offline'],
  },
  {
    id: 'shared',
    name: 'Shared',
    monthly: 24,
    annual: 240,
    description: 'A remote cache your whole team and CI restore from, priced per workspace.',
    bullets: ['Everything in Local', 'Remote cache for CI and laptops', 'Per-branch cache scopes'],
    accent: true,
  },
];

export type Price = {
  amount: number;
  period: 'month' | 'year';
  /** Effective monthly cost, rounded to cents. */
  perMonth: number;
  /** Saving versus twelve monthly payments; 0 for monthly billing. */
  savings: number;
};

export function priceFor(plan: Plan, cadence: Cadence): Price {
  if (cadence === 'annual') {
    return {
      amount: plan.annual,
      period: 'year',
      perMonth: Math.round((plan.annual / 12) * 100) / 100,
      savings: Math.max(0, plan.monthly * 12 - plan.annual),
    };
  }
  return {amount: plan.monthly, period: 'month', perMonth: plan.monthly, savings: 0};
}

export function formatDollars(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}
