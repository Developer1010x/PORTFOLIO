import { profile } from "@/lib/content";

export const metadata = { title: "Contact — S Prajwall Narayana" };

export default function ContactPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Contact</p>
      <h1 style={{ fontSize: "2.4rem" }}>Let&apos;s build something reliable.</h1>
      <p className="section-sub">Open to full-time roles and select freelance projects. The fastest way to reach me is email — I reply within a day.</p>
      <div className="grid grid-2">
        <a className="card" href={`mailto:${profile.email}`}>
          <h3 style={{ margin: "0 0 4px" }}>Email ↗</h3>
          <p style={{ color: "var(--fg-dim)", margin: 0 }}>{profile.email}</p>
        </a>
        <a className="card" href={profile.linkedin} target="_blank" rel="noopener">
          <h3 style={{ margin: "0 0 4px" }}>LinkedIn ↗</h3>
          <p style={{ color: "var(--fg-dim)", margin: 0 }}>Message me directly</p>
        </a>
        <a className="card" href={profile.github} target="_blank" rel="noopener">
          <h3 style={{ margin: "0 0 4px" }}>GitHub ↗</h3>
          <p style={{ color: "var(--fg-dim)", margin: 0 }}>See the code</p>
        </a>
        <a className="card" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          <h3 style={{ margin: "0 0 4px" }}>Call</h3>
          <p style={{ color: "var(--fg-dim)", margin: 0 }}>{profile.phone}</p>
        </a>
      </div>
    </section>
  );
}
