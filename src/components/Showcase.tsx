import { VStack, Text, Box } from "@chakra-ui/react"
import SectionHeader from "./SectionHeader"
import { SHOWCASE_ITEMS } from "../data/projectData"

export default function Showcase() {
  return (
    <VStack align="stretch" gap="10">
      <SectionHeader label="SHOWCASE" title="Project Media" />

      <VStack align="stretch" gap="6">
        {SHOWCASE_ITEMS.map((item) => (
          <Box key={item.label}>
            <Text fontWeight="bold">
              {item.icon} {item.label}
            </Text>
            <Text color="gray.600">{item.desc}</Text>
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}

