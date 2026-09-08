import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141c24",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              fontSize: 163,
              fontWeight: 700,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            8
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              marginLeft: 11,
              marginBottom: 17,
              borderRadius: 14,
              background: "#ed3237",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
