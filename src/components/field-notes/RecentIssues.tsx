/**
 * "Recent issues" index. Every title and date is a fictional sample: these
 * letters were never written or sent.
 */
const ISSUES = [
  {date: '2026-11-13', label: 'Fri 13 Nov', title: 'The plane that would not stop chattering', topic: 'Tools'},
  {date: '2026-11-06', label: 'Fri 6 Nov', title: 'Sharpening is a conversation, not a chore', topic: 'Technique'},
  {date: '2026-10-30', label: 'Fri 30 Oct', title: 'A bench hook, three ways, all of them crooked', topic: 'Projects'},
  {date: '2026-10-23', label: 'Fri 23 Oct', title: 'Why the second spoon is always worse than the first', topic: 'Carving'},
  {date: '2026-10-16', label: 'Fri 16 Oct', title: 'Notes from a shed with no electricity', topic: 'Workshop'},
];

export function RecentIssues() {
  return (
    <section id="issues" aria-labelledby="fn-issues-title" className="border-b border-[var(--fn-rule)] px-4 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="fn-issues-title" className="text-3xl font-medium tracking-tight sm:text-4xl">
            Recent issues
          </h2>
          <p className="fn-meta">Sample titles and dates · these letters do not exist</p>
        </div>
        <ol className="mt-8 border-t border-[var(--fn-ink)]">
          {ISSUES.map((issue) => (
            <li
              key={issue.date}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-[var(--fn-rule)] py-5 sm:grid-cols-[9rem_1fr_auto] sm:gap-x-8"
            >
              <time dateTime={issue.date} className="fn-meta text-[var(--fn-ink)]">
                {issue.label}
              </time>
              <p className="col-start-1 col-end-3 text-xl leading-snug italic sm:col-start-2 sm:col-end-3 sm:text-2xl">{issue.title}</p>
              <p className="fn-meta col-start-2 row-start-1 justify-self-end sm:col-start-3">{issue.topic}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
