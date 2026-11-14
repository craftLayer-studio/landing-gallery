import '@testing-library/jest-dom/vitest';
import {act, cleanup, fireEvent, render, screen} from '@testing-library/react';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {SubscribeForm} from './SubscribeForm';
import {DEMO_DELAY_MS} from './subscribe';

describe('SubscribeForm', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it('shows an error under the input for an invalid address', () => {
    render(<SubscribeForm id="t" />);
    const input = screen.getByLabelText('Your email address');
    fireEvent.change(input, {target: {value: 'not-an-email'}});
    fireEvent.click(screen.getByRole('button', {name: /subscribe/i}));
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(document.getElementById('t-error')?.textContent).toMatch(/needs an @/);
  });

  it('goes through loading to a demo success line', () => {
    render(<SubscribeForm id="t" />);
    fireEvent.change(screen.getByLabelText('Your email address'), {target: {value: 'reader@example.com'}});
    fireEvent.click(screen.getByRole('button', {name: /subscribe/i}));
    expect(screen.getByRole('button', {name: /subscribing/i})).toHaveAttribute('aria-disabled', 'true');
    act(() => {
      vi.advanceTimersByTime(DEMO_DELAY_MS);
    });
    expect(screen.getByRole('status').textContent).toMatch(/no email was stored or sent/);
    expect(screen.queryByRole('textbox')).toBeNull();
  });
});
