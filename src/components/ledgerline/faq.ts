export type QA = {q: string; a: string};

export const FAQ: QA[] = [
  {q: 'Is Ledgerline a real product?', a: 'No. Ledgerline is a fictional brand and this page is a design example by CraftLayer Studio. There is no API, no account and nothing to buy.'},
  {q: 'What does reconciliation mean here?', a: 'Matching each payout from a payment processor to the deposits that land in your bank account, then flagging anything that does not line up.'},
  {q: 'Which processors and banks would it connect to?', a: 'In this concept, any source that can export transactions. The sample request uses placeholder source names on api.example.com, not real integrations.'},
  {q: 'How are fees and refunds handled?', a: 'The matcher would split a payout into gross charges, fees and refunds, so a net deposit can still be traced back to individual transactions.'},
  {q: 'What happens to lines that do not match?', a: 'They go to an exception queue with a reason code, such as amount mismatch or missing deposit, for someone on the finance team to review.'},
  {q: 'Can I set a matching tolerance?', a: 'Yes, in the concept: an amount tolerance and a date window per source, so a deposit that clears two days late still matches.'},
  {q: 'How is usage billed?', a: 'Per use, line by line: matched transactions, connected feeds, exceptions routed and ledger exports. The rates on this page are samples.'},
  {q: 'Is there a free tier?', a: 'This concept does not define one. The pricing calculator shows how a per-use estimate would be built, using sample rates.'},
  {q: 'Can I export to my general ledger?', a: 'The concept supports CSV and journal-entry exports. No specific accounting software integration is claimed.'},
  {q: 'How do I request access?', a: 'Use the request access form at the bottom of the page. It validates your entries, but it is a demo: nothing is sent or stored.'},
];

/** Every whitespace-separated term must appear in the question or answer. */
export function filterFaq(items: QA[], query: string): QA[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return items;
  return items.filter((item) => {
    const hay = `${item.q} ${item.a}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
}
