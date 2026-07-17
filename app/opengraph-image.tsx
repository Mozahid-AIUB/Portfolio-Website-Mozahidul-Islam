import { ImageResponse } from "next/og";

export const alt = "Mozahidul Islam — Software Engineer · Developer · Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0f1c",
          color: "#e9eef6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 26,
            color: "#f5b841",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#4ade80",
            }}
          />
          Open to software engineering roles — remote or on-site
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          Mozahidul Islam
        </div>
        <div style={{ marginTop: 16, fontSize: 38, color: "#8a97ab" }}>
          Software Engineer · Developer · Researcher
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "#f5b841",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              border: "1px solid #1e2a3e",
              borderRadius: 999,
              background: "#101726",
            }}
          >
            Play Store — Live
          </div>
          <div
            style={{
              padding: "10px 24px",
              border: "1px solid #1e2a3e",
              borderRadius: 999,
              background: "#101726",
            }}
          >
            SaaS in production
          </div>
          <div
            style={{
              padding: "10px 24px",
              border: "1px solid #1e2a3e",
              borderRadius: 999,
              background: "#101726",
            }}
          >
            mozahidulislam.pro.bd
          </div>
        </div>
      </div>
    ),
    size
  );
}
