import Link from "next/link";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div style={{ fontWeight: 600, color: "var(--fg)" }}>{profile.name}</div>
          <div style={{ marginTop: 6, maxWidth: 320 }}>{profile.tagline}</div>
        </div>
        <div>
          <h4>Pages</h4>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/services">Services</Link>
          <Link href="/social">Social</Link>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.resume} download>Resume ↓</a>
        </div>
      </div>
      <div className="container copyright">© 2026 {profile.name}</div>
    </footer>
  );
}
