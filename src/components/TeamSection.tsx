import SectionHeader from "./SectionHeader"
import { TEAM_MEMBERS } from "../data/projectData"

export default function TeamSection() {
  return (
    <section style={{ background: "#060810", padding: "8rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          label="TEAM"
          title="Who Built ZeroDayton"
          sub="Four senior computer science students at the University of Dayton."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              style={{
                border: "1px solid rgba(0,255,200,0.15)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "1rem",
                  border: "2px solid rgba(0,255,200,0.3)",
                }}
              />

              <h3
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "#e8fff4",
                }}
              >
                {member.name}
              </h3>

              <div style={{ color: "#00ffc8", marginBottom: "1rem" }}>
                {member.role}
              </div>

              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: "rgba(200,240,225,0.6)",
                }}
              >
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
