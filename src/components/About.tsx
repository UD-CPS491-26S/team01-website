import { VStack, Box, Text } from "@chakra-ui/react"
import SectionHeader from "./SectionHeader"

export default function About() {
  const pillars = [
    {
      title: "The Problem",
      body: "Unity games are frequently reverse engineered and modified by cheat developers."
    },
    {
      title: "ZeroDayton",
      body: "ZeroDayton introduces protections during compilation and runtime."
    },
    {
      title: "Security Techniques",
      body: "Compile-time transformations, symbol mangling, randomized memory layouts, and runtime integrity verification."
    },
    {
      title: "Technology Stack",
      body: "Unity, .NET, dnSpyEx, ILSpy, Ghidra, and IDA."
    }
  ]

  return (
    <VStack align="stretch" gap="10">
      <SectionHeader label="PROJECT OVERVIEW" title="About the Project" />

      <VStack align="stretch" gap="6">
        {pillars.map((p) => (
          <Box key={p.title}>
            <Text fontWeight="bold">{p.title}</Text>
            <Text color="gray.600">{p.body}</Text>
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}
