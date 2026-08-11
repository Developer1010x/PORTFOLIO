import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.blurb,
  openGraph: { title: `${profile.name} — ${profile.role}`, description: profile.blurb },
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
