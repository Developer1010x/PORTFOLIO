import { profile, education, skills } from "@/lib/content";

export const metadata = { title: "About — S Prajwall Narayana" };

export default function AboutPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">About</p>
      <h1 style={{ fontSize: "2.4rem" }}>DevOps engineer converting into AI infrastructure</h1>
      <p className="lead">{profile.blurb}</p>
      <p style={{ color: "var(--fg-dim)", maxWidth: 680, marginTop: 16 }}>
        I run Linux, Kubernetes, Docker, CI/CD and Postgres for a living, and I&apos;m building the AI half on top of that — agentic and LLM systems over MCP, RAG with evaluation, and local/offline model deployment. I take ambiguous problems from prototype to a deployed, monitored system and stay responsible for it afterwards.
      </p>

      <h2 className="section-title" style={{ marginTop: 40 }}>Education</h2>
      {education.map((e) => (
        <div className="card" key={e.school} style={{ marginTop: 12 }}>
          <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--fg-faint)" }}>{e.period}</div>
          <h3 style={{ margin: "4px 0 2px" }}>{e.school}</h3>
          <div style={{ fontWeight: 600 }}>{e.degree}</div>
          <div style={{ color: "var(--accent)", fontSize: 14 }}>{e.grade}</div>
          <p style={{ color: "var(--fg-dim)", margin: "8px 0 0" }}>{e.note}</p>
        </div>
      ))}

      <h2 className="section-title" style={{ marginTop: 40 }}>Skills</h2>
      <div className="grid grid-2" style={{ marginTop: 12 }}>
        {skills.map((g) => (
          <div className="card" key={g.group}>
            <h3 style={{ margin: "0 0 10px", fontSize: "1rem" }}>{g.group}</h3>
            <div className="tags">{g.items.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
