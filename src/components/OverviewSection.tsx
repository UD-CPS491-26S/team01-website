import SectionHeader from "./SectionHeader"

export default function OverviewSection() {
  const pillars = [
    {
      num: "01",
      title: "The Problem",
      body: "Unity games are frequently reverse engineered and modified by cheat developers."
    },
    {
      num: "02",
      title: "ZeroDayton",
      body: "ZeroDayton introduces protections during compilation and runtime."
    },
    {
      num: "03",
      title: "Security Techniques",
      body: "Compile-time transformations, symbol mangling, randomized layouts, and runtime verification."
    },
    {
      num: "04",
      title: "Technology Stack",
      body: "Unity, .NET, dnSpyEx, ILSpy, Ghidra, and IDA."
    }
  ]

  return (
    <section style={{ background: "#080c14", padding: "8rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader label="PROJECT OVERVIEW" title="What is ZeroDayton?" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "1rem"
          }}
        >
          {pillars.map((p) => (
            <div key={p.num} style={{ border: "1px solid rgba(0,255,200,0.1)", padding: "2rem" }}>
              <h3 style={{ color: "#00ffc8" }}>{p.title}</h3>
              <p style={{ color: "rgba(200,240,225,0.6)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
