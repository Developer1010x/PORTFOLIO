import Link from "next/link";
import { profile } from "@/lib/content";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/social", label: "Social" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          {profile.name} <span className="slash">/</span> <span style={{ color: "var(--fg-dim)", fontWeight: 400 }}>{profile.role}</span>
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/contact" className="cta">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
