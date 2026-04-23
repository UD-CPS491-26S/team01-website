import ryanHeadshot from "../assets/ryan_headshot.jpg"
import danHeadshot from "../assets/dan_headshot.png"
import wyattHeadshot from "../assets/wyatt_headshot.png"
import mattHeadshot from "../assets/matt_headshot.png"

export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  initials: string
  image: string
}

export interface ShowcaseItem {
  label: string
  icon: string
}

// TODO: Update the bio for each member
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Wyatt Bier",
    role: "Symbol Mangling & Control Flow Obfuscation",
    bio: "Developed a compile-time symbol mangling system that renames code identifiers and safely propagates changes across assets and reflection to hinder reverse engineering.",
    initials: "WB",
    image: wyattHeadshot
  },
  {
    id: 2,
    name: "Ryan Zmuda",
    role: "Team Lead & Obfuscation Research",
    bio: "Researched and developed Struct Entropy, a compile-time technique that dynamically restructures data layouts to increase resistance against reverse engineering.",
    initials: "RZ",
    image: ryanHeadshot
  },
  {
    id: 3,
    name: "Daniel Frederick",
    role: "Runtime Integrity Verification",
    bio: "Developed a runtime integrity verification system that detects in-memory code tampering during gameplay and validating them against trusted build-time signatures.",
    initials: "DF",
    image: danHeadshot
  },
  {
    id: 4,
    name: "Matthew Dowell",
    role: "Method Wrapping & Callsite Obfuscation",
    bio: "Implemented a method-wrapping system that rewrites annotated callsites at compile time to obscure execution flow and protect sensitive logic from analysis",
    initials: "MD",
    image: mattHeadshot
  }
]

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  { label: "Demo Video", icon: "▶" },
  // { label: "Technical Overview", icon: "⊞" },
  // { label: "Presentation Slides", icon: "◈" },
  // { label: "Source Code", icon: "⌥" } // TODO: Change to Github logo and add links
]
