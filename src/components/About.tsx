import { Text, Heading, Stack, Box } from "@chakra-ui/react"

function About() {
  return (
    <Stack gap="6">
      <Heading size="lg" fontWeight="700">
        Project Overview
      </Heading>
      
      <Box className="abstract-content">
        <Text 
          fontSize="lg" 
          lineHeight="1.8" 
          color="gray.700"
          mb="6"
        >
          Modern Unity games are highly accessible to public decompilers and memory-editing tools, 
          lowering the barrier to cheat development. ZeroDayton is a research initiative 
          designing shippable protection methods to increase the cost of reverse engineering.
        </Text>

        <Text 
          fontSize="md" 
          lineHeight="1.7" 
          color="gray.600"
        >
          We are building a Unity plugin that applies compile-time IL transformations 
          along with runtime integrity protections. Our objective isn't just to stop cheats, 
          but to significantly increase the attacker’s cost in time and effort while maintaining game 
          stability and developer usability.
        </Text>
      </Box>
    </Stack>
  )
}

export default About
