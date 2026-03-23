import SectionHeader from "./SectionHeader"
import { SHOWCASE_ITEMS } from "../data/projectData"
import demoVideo from "../assets/zddemo1.mp4"

export default function ShowcaseSection() {
  return (
    <section style={{ background: "#080c14", padding: "8rem 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader label="SHOWCASE" title="Project Media" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                border: "1px dashed rgba(0,255,200,0.3)",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "2rem" }}>{item.icon}</div>

                <h4
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    color: "#e8fff4",
                    margin: 0,
                  }}
                >
                  {item.label}
                </h4>
              </div>

              {item.label === "Demo Video" && (
                <video
                  src={demoVideo}
                  controls
                  style={{
                    width: "100%",
                    marginTop: "1.5rem",
                    border: "1px solid rgba(0,255,200,0.3)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
