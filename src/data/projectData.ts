export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  initials: string
}

export interface ShowcaseItem {
  label: string
  icon: string
  desc: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Wyatt Bier",
    role: "Compiler & Obfuscation Systems",
    bio: "Developed symbol mangling and code transformation systems that make reverse engineering significantly more difficult.",
    initials: "WB"
  },
  {
    id: 2,
    name: "Ryan Zmuda",
    role: "Plugin Infrastructure",
    bio: "Built the Unity plugin framework and IL transformation pipeline used to instrument compiled assemblies.",
    initials: "RZ"
  },
  {
    id: 3,
    name: "Daniel Frederick",
    role: "Runtime Security Systems",
    bio: "Developed runtime integrity verification and hashing systems used to detect unauthorized code modification.",
    initials: "DF"
  },
  {
    id: 4,
    name: "Matthew Dowell",
    role: "Compile-Time Transformations",
    bio: "Implemented obfuscation techniques including randomized dispatch tables and method wrapping.",
    initials: "MD"
  }
]

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  { label: "Demo Video", icon: "▶", desc: "Project walkthrough and live demo footage" },
  { label: "Technical Overview", icon: "⊞", desc: "Summary of the security systems implemented in the plugin" },
  { label: "Presentation Slides", icon: "◈", desc: "Slides from the final capstone presentation" },
  { label: "Source Code", icon: "⌥", desc: "GitHub repository containing the implementation" }
]
