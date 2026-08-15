import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/content";

const title = `${profile.name}, ${profile.role}`;

export const metadata: Metadata = {
  // Without metadataBase, Next cannot resolve relative image URLs and emits a
  // build warning; every OG/Twitter image would be dropped from the output.
  metadataBase: new URL(profile.portfolio),
  title: { default: title, template: `%s · ${profile.name}` },
  description: profile.blurb,
  keywords: [
    "AI Engineer", "LLM systems", "MCP", "agentic systems",
    "DevOps", "SRE", "Kubernetes", "Bengaluru",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.blurb,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.blurb,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
