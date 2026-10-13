import { ImageResponse } from "next/og";
import { site } from "@/content/site";
export const alt = "Yassine Fawzi — Chargé de marketing digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f5f4ee",
        color: "#214c3d",
        padding: "65px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <span>YASSINE FAWZI</span>
        <span>MARKETING DIGITAL</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 92,
          letterSpacing: "-5px",
          lineHeight: 1.1,
        }}
      >
        <span>Chargé de marketing</span>
        <span style={{ fontStyle: "italic" }}>digital</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 22,
          borderTop: "1px solid #bfcbbb",
          paddingTop: 22,
        }}
      >
        {site.location}
      </div>
    </div>,
    size,
  );
}
