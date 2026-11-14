export type AccessRequest = {name: string; email: string; volume: string};
export type AccessErrors = Partial<Record<keyof AccessRequest, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateAccessRequest(input: AccessRequest): AccessErrors {
  const errors: AccessErrors = {};
  if (input.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).';
  if (!input.email.trim()) errors.email = 'Enter your work email.';
  else if (!EMAIL.test(input.email.trim())) errors.email = 'Enter an email like name@example.com.';
  if (!input.volume) errors.volume = 'Choose a monthly volume.';
  return errors;
}
