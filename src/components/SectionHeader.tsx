interface Props {
  label: string
  title: string
  sub?: string
}

export default function SectionHeader({ label, title, sub }: Props) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <div
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.35em",
          color: "#00ffc8",
          marginBottom: "0.75rem"
        }}
      >
        {label}
      </div>

      <h2
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "2.2rem",
          color: "#e8fff4",
          marginBottom: "1rem"
        }}
      >
        {title}
      </h2>

      {sub && (
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            color: "rgba(200,240,225,0.6)",
            maxWidth: "650px",
            lineHeight: 1.8
          }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
