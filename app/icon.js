import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          background: "#141c24",
          borderRadius: 6,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div
            style={{
              display: "flex",
              fontSize: 29,
              fontWeight: 700,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            8
          </div>
          <div
            style={{
              width: 5,
              height: 5,
              marginLeft: 2,
              marginBottom: 3,
              borderRadius: 3,
              background: "#ed3237",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
