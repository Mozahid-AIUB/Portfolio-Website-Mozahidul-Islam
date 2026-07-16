import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f1c",
          color: "#f5b841",
          fontSize: 38,
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: 14,
          border: "2px solid #1e2a3e",
        }}
      >
        M
      </div>
    ),
    size
  );
}
