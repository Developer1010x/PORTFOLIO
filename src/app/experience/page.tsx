import { experience } from "@/lib/content";

export const metadata = { title: "Experience — S Prajwall Narayana" };

export default function ExperiencePage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Experience</p>
      <h1 style={{ fontSize: "2.4rem" }}>Roles, outcomes, and the systems behind them</h1>
      <p className="section-sub">Company by company: scope, constraints, and what shipped. Projects live on their own page so you can scan the artifacts quickly.</p>

      {experience.map((r, i) => (
        <div className="entry" key={r.company + r.title}>
          <div className="idx">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div className="meta">
              <span>{r.period}</span>
              <span className="dot">{r.type}</span>
              <span className="dot">{r.location}</span>
            </div>
            <h3><span className="company">{r.company}</span></h3>
            <div style={{ fontWeight: 600 }}>{r.title}</div>
            <p className="summary">{r.summary}</p>
            <ul>{r.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
            <div className="tags">{r.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
