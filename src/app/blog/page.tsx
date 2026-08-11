import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata = { title: "Blog — S Prajwall Narayana" };

export default function BlogPage() {
  return (
    <section className="container section" style={{ borderTop: "none" }}>
      <p className="eyebrow">Blog</p>
      <h1 style={{ fontSize: "2.4rem" }}>Notes on AI, LLM systems, and the infra underneath</h1>
      <p className="section-sub">Where I write about agents, RAG, evaluation, and the systems engineering that makes them hold up in production.</p>

      {posts.map((p) => (
        <Link href={`/blog/${p.slug}`} className="entry hover" key={p.slug} style={{ display: "block", gridTemplateColumns: "1fr" }}>
          <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--fg-faint)" }}>{p.date} · {p.tag}</div>
          <h3 style={{ margin: "4px 0 6px" }}>{p.title}</h3>
          <p style={{ color: "var(--fg-dim)", margin: 0 }}>{p.excerpt}</p>
        </Link>
      ))}
    </section>
  );
}
