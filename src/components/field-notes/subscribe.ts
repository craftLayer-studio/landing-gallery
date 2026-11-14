/** Shared, pure subscribe logic for both Field Notes forms (demo only: nothing is stored). */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns an error message, or null when the address looks deliverable. */
export function validateEmail(raw: string): string | null {
  const value = raw.trim();
  if (value.length === 0) return 'Enter your email address.';
  if (value.length > 254) return 'That email address is too long.';
  if (!value.includes('@')) return 'An email address needs an @, like reader@example.com.';
  if (!EMAIL.test(value)) return 'Check the address: it should look like reader@example.com.';
  return null;
}

export type SubscribeState =
  | {status: 'idle'; error: null}
  | {status: 'invalid'; error: string}
  | {status: 'submitting'; error: null}
  | {status: 'done'; error: null};

/** Simulated network delay for the demo loading state. */
export const DEMO_DELAY_MS = 700;
