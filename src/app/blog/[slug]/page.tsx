import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/content";

// Only published posts get a page. An unpublished slug 404s rather than
// rendering a headline over build instructions.
const published = posts.filter((p) => p.body && p.body.length > 0);

export function generateStaticParams() {
  return published.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = published.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = published.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container section" style={{ borderTop: "none", maxWidth: 720 }}>
      <Link href="/blog" style={{ color: "var(--fg-faint)", fontFamily: "var(--mono)", fontSize: 13 }}>← Blog</Link>
      <div className="meta" style={{ fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--fg-faint)", margin: "20px 0 8px" }}>{post.date} · {post.tag}</div>
      <h1 style={{ fontSize: "2.1rem" }}>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      {post.body!.map((para, i) => (
        <p key={i} style={{ color: "var(--fg-dim)", lineHeight: 1.75, marginTop: 18 }}>{para}</p>
      ))}
    </article>
  );
}
