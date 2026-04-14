import SectionHeader from "./SectionHeader"

const pillars = [
  {
    num: "01",
    title: "The Problem",
    body: "Unity games are frequently reverse engineered and modified by cheat developers. Many games rely on minimal protection, making it easy for attackers to inspect compiled assemblies and manipulate runtime memory.",
  },
  {
    num: "02",
    title: "ZeroDayton",
    body: "ZeroDayton is a Unity plugin that introduces protections during compilation and runtime to make reverse engineering significantly more difficult.",
  },
  {
    num: "03",
    title: "Security Techniques",
    body: "The system introduces automated struct entropy, control flow obfuscation, argument protection & encryption, and runtime integrity verification designed to disrupt cheating techniques.",
  },
  {
    num: "04",
    title: "Technology Stack",
    body: "Unity, .NET, IL transformation tools, and reverse engineering tools such as dnSpyEx, ILSpy, Ghidra, and IDA are used to develop and validate the system.",
  },
]

export default function OverviewSection() {
  return (
    <section style={{ background: "#080c14", padding: "8rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader label="PROJECT OVERVIEW" title="What is ZeroDayton?" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.num}
              style={{
                background: "#080c14",
                border: "1px solid rgba(0,255,200,0.1)",
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "#00ffc8",
                  marginBottom: "1rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  color: "rgba(200,240,225,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
