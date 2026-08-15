import { publications } from "@/lib/content";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Publications</p>
      <h1 style={{ fontSize: "2.4rem" }}>Peer-reviewed work</h1>
      <p className="section-sub">Three published papers (two IEEE, one Springer), with two further papers under review.</p>

      {publications.map((p, i) => (
        <div className="entry" key={p.title}>
          <div className="idx">{String(i + 1).padStart(2, "0")}</div>
          <div>
            <div className="meta"><span>{p.venue}</span></div>
            <h3><a href={p.href} target="_blank" rel="noopener" className="company">{p.title} ↗</a></h3>
            <p className="summary">{p.note}</p>
          </div>
        </div>
      ))}
      <p style={{ color: "var(--fg-faint)", fontFamily: "var(--mono)", fontSize: 13, marginTop: 8 }}>+ two further papers under review.</p>
    </section>
  );
}
