import { VStack, Heading, Text } from "@chakra-ui/react"
import GlitchText from "./GlitchText"

export default function Header() {
  return (
    <VStack align="start" gap="4">
      <Heading size="2xl">
        <GlitchText text="ZeroDayton" />
      </Heading>

      <Text fontSize="lg" color="gray.600">
        A Unity security plugin designed to make reverse engineering and
        cheating significantly more difficult through compile-time
        transformations and runtime integrity verification.
      </Text>
    </VStack>
  )
}

