import Link from "next/link";
import { profile, stats, skills, projects, experience } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <p className="eyebrow">AI · Agents · Production LLM Systems · DevOps</p>
        <h1>{profile.headline}</h1>
        <p className="lead">{profile.blurb}</p>
        <div className="btn-row">
          <Link href="/contact" className="btn btn-primary">Book a call</Link>
          <Link href="/projects" className="btn btn-ghost">View selected work →</Link>
          <a href={profile.linkedin} className="btn btn-ghost" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.value}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <p className="eyebrow">Now</p>
        <h2 className="section-title">{experience[0].title} — {experience[0].company}</h2>
        <p className="section-sub">{experience[0].summary} <Link href="/experience" style={{ color: "var(--accent)" }}>See full experience →</Link></p>
        <div className="tags">
          {skills.flatMap((g) => g.items).slice(0, 22).map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      </section>

      <section className="container section">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Projects that show how I think</h2>
        <p className="section-sub">A few of the systems I&apos;ve shipped. <Link href="/projects" style={{ color: "var(--accent)" }}>See all →</Link></p>
        <div className="grid grid-2">
          {projects.slice(0, 4).map((p) => (
            <a className="card" key={p.name} href={p.href} target="_blank" rel="noopener">
              <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-faint)", marginBottom: 8 }}>{p.tag}</div>
              <h3 style={{ margin: "0 0 6px" }}>{p.name} ↗</h3>
              <p style={{ color: "var(--fg-dim)", margin: 0 }}>{p.summary}</p>
              <div className="tags">{p.tech.slice(0, 4).map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="container section">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let&apos;s build something reliable.</h2>
        <p className="section-sub">Open to full-time roles and select freelance projects — AI infrastructure, LLM platform, RAG, and DevOps/SRE. Based in Bengaluru, open to relocation and remote.</p>
        <div className="btn-row" style={{ marginTop: 0 }}>
          <Link href="/contact" className="btn btn-primary">Book a call</Link>
          <Link href="/services" className="btn btn-ghost">Freelance services →</Link>
        </div>
      </section>
    </>
  );
}
