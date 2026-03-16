import { VStack, Text, Box } from "@chakra-ui/react"
import SectionHeader from "./SectionHeader"
import { TEAM_MEMBERS } from "../data/projectData"

export default function Team() {
  return (
    <VStack align="stretch" gap="10">
      <SectionHeader
        label="TEAM"
        title="Who Built ZeroDayton"
        sub="Four senior computer science students at the University of Dayton."
      />

      <VStack align="stretch" gap="6">
        {TEAM_MEMBERS.map((member) => (
          <Box key={member.id}>
            <Text fontWeight="bold">{member.name}</Text>
            <Text color="teal.500">{member.role}</Text>
            <Text color="gray.600">{member.bio}</Text>
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}
