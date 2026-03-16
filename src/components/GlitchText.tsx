import { useEffect, useState } from "react"

interface Props {
  text: string
}

export default function GlitchText({ text }: Props) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 120)
    }, 4000)

    return () => clearInterval(id)
  }, [])

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: glitch ? "absolute" : "static",
          left: glitch ? "2px" : "0",
          top: glitch ? "-1px" : "0",
          color: glitch ? "#0ff" : "inherit",
          opacity: glitch ? 0.7 : 1,
          mixBlendMode: "screen"
        }}
      >
        {text}
      </span>

      {glitch && (
        <span
          style={{
            position: "absolute",
            left: "-2px",
            top: "1px",
            color: "#f0f",
            opacity: 0.5,
            mixBlendMode: "screen"
          }}
        >
          {text}
        </span>
      )}

      {!glitch && text}
    </span>
  )
}
