import { projects } from "@/lib/content";

export const metadata = { title: "Projects — S Prajwall Narayana" };

export default function ProjectsPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Selected work</p>
      <h1 style={{ fontSize: "2.4rem" }}>Projects that show how I think</h1>
      <p className="section-sub">Systems shipped end to end — with the real numbers where they exist. Every one links to its source.</p>

      {projects.map((p, i) => (
        <div className="entry" key={p.name}>
          <div className="idx">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div className="meta"><span>{p.tag}</span></div>
            <h3><a href={p.href} target="_blank" rel="noopener" className="company">{p.name} ↗</a></h3>
            <p className="summary">{p.summary}</p>
            <ul>{p.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
            <div className="tags">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
