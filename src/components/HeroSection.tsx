import { useEffect, useRef } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const chars = "01アイウエオカキクケコサシスセソ".split("")
    const cols = Math.floor(canvas.width / 16)
    const drops = Array(cols).fill(1)
    const draw = () => {
      ctx.fillStyle = "rgba(6,8,16,0.06)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(0,255,180,0.18)"
      ctx.font = "13px 'Share Tech Mono', monospace"
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * 16, y * 16)
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }
    const id = setInterval(draw, 55)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "#060810",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}>
        <div
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "#00ffc8",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          University of Dayton · Computer Science · Capstone
        </div>
        <h1
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            color: "#e8fff4",
            margin: 0,
          }}
        >
          ZERO
        </h1>
        <h1
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            color: "#00ffc8",
            marginBottom: "2rem",
          }}
        >
          DAYTON
        </h1>
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "1.2rem",
            color: "rgba(200,240,225,0.7)",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.8,
            fontStyle: "italic",
          }}
        >
          ZeroDayton is a Unity security plugin designed to make reverse engineering
          and cheating significantly more difficult through compile-time transformations,
          obfuscation, and runtime integrity verification.
        </p>
      </div>
    </section>
  )
}
