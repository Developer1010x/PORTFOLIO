import Link from "next/link";
import { services } from "@/lib/content";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Freelance</p>
      <h1 style={{ fontSize: "2.4rem" }}>I build DevOps pipelines and RAG systems for real workloads.</h1>
      <p className="section-sub">Available for select freelance projects. Not demos: production systems with the platform underneath and the evaluation to prove they work. The same discipline I run as a founding-team AI/infra engineer.</p>

      <div className="grid grid-2" style={{ marginBottom: 32 }}>
        {services.map((s) => (
          <div className="card" key={s.title}>
            <h3 style={{ margin: "0 0 8px" }}>{s.title}</h3>
            <p style={{ color: "var(--fg-dim)", marginTop: 0 }}>{s.body}</p>
            <ul style={{ color: "var(--fg-dim)", paddingLeft: 18, margin: "12px 0 0" }}>
              {s.points.map((p) => <li key={p} style={{ marginBottom: 4 }}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>How I work</h3>
        <p style={{ color: "var(--fg-dim)" }}>Short scoping call → a written proposal with milestones and what &quot;done&quot; means → build in the open with measured checkpoints. You own the code and the evaluation harness, so you can keep improving it after I&apos;m gone.</p>
        <div className="btn-row" style={{ marginTop: 8 }}>
          <Link href="/contact" className="btn btn-primary">Book a call</Link>
          <Link href="/projects" className="btn btn-ghost">See the work →</Link>
        </div>
      </div>
    </section>
  );
}
