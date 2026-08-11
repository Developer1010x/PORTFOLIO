import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container section" style={{ borderTop: "none", maxWidth: 720 }}>
      <Link href="/blog" style={{ color: "var(--fg-faint)", fontFamily: "var(--mono)", fontSize: 13 }}>← Blog</Link>
      <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--fg-faint)", margin: "20px 0 8px" }}>{post.date} · {post.tag}</div>
      <h1 style={{ fontSize: "2.1rem" }}>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <div className="card" style={{ marginTop: 28, color: "var(--fg-dim)" }}>
        Draft — this is where the full post goes. Write it in <code style={{ color: "var(--fg)" }}>src/lib/content.ts</code> (add a <code style={{ color: "var(--fg)" }}>body</code> field) or migrate the blog to MDX when you&apos;re ready.
      </div>
    </article>
  );
}
