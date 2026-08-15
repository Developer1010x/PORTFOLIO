import { ImageResponse } from "next/og";
import { profile, stats } from "@/lib/content";

// Generated at build time, so the social card never drifts from content.ts.
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              color: "#2563eb",
              textTransform: "uppercase",
            }}
          >
            {profile.tagline}
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#16161d",
              marginTop: 28,
              lineHeight: 1.15,
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 56 }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", flexDirection: "column", width: 316 }}
              >
                <div style={{ fontSize: 44, fontWeight: 700, color: "#2563eb" }}>{s.value}</div>
                <div style={{ fontSize: 18, color: "#6b6b76", lineHeight: 1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 20,
              marginTop: 36,
              borderTop: "1px solid #e4e5ea",
              paddingTop: 26,
            }}
          >
            <div style={{ fontSize: 34, fontWeight: 600, color: "#16161d" }}>{profile.name}</div>
            <div style={{ fontSize: 22, color: "#55555f" }}>{profile.location}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
