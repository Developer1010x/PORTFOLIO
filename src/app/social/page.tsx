import { community } from "@/lib/content";

export const metadata = { title: "Social" };

export default function SocialPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Social</p>
      <h1 style={{ fontSize: "2.4rem" }}>Community & beyond the code</h1>
      <p className="section-sub">Volunteering, clubs, and recognition from my time at RVCE.</p>

      <h2 className="section-title" style={{ marginTop: 24 }}>Honours</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        {community.honours.map((h) => (
          <div className="card" key={h.title}>
            <h3 style={{ margin: "0 0 4px" }}>{h.title}</h3>
            <p style={{ color: "var(--fg-dim)", margin: 0 }}>{h.note}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: 36 }}>Organisations</h2>
      <div className="grid grid-2" style={{ marginTop: 12 }}>
        {community.organisations.map((o) => (
          <div className="card" key={o.name}>
            <h3 style={{ margin: "0 0 4px", fontSize: "1.05rem" }}>{o.name}</h3>
            <div style={{ color: "var(--accent)", fontSize: 13, fontFamily: "var(--mono)" }}>{o.role}</div>
            {o.note && <p style={{ color: "var(--fg-dim)", margin: "8px 0 0" }}>{o.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
