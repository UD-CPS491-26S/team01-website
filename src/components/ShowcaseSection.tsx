import SectionHeader from "./SectionHeader"
import { SHOWCASE_ITEMS } from "../data/projectData"

export default function ShowcaseSection() {
  return (
    <section style={{ background: "#080c14", padding: "8rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader label="SHOWCASE" title="Project Media" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
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
              <div style={{ fontSize: "2rem" }}>{item.icon}</div>
              <h4
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "#e8fff4",
                }}
              >
                {item.label}
              </h4>
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: "rgba(200,240,225,0.6)",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
