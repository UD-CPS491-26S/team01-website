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
    role: "Compiler & Obfuscation Systems",
    bio: "Developed symbol mangling and code transformation systems that make reverse engineering significantly more difficult.",
    initials: "WB",
    image: wyattHeadshot
  },
  {
    id: 2,
    name: "Ryan Zmuda",
    role: "Team Lead & Obfuscation Research",
    bio: "Built the Unity plugin framework and IL transformation pipeline used to instrument compiled assemblies.",
    initials: "RZ",
    image: ryanHeadshot
  },
  {
    id: 3,
    name: "Daniel Frederick",
    role: "Runtime Integrity Verification",
    bio: "Developed runtime integrity verification and hashing systems used to detect unauthorized code modification.",
    initials: "DF",
    image: danHeadshot
  },
  {
    id: 4,
    name: "Matthew Dowell",
    role: "Compile-Time Transformations",
    bio: "Implemented obfuscation techniques including randomized dispatch tables and method wrapping.",
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
