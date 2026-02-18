import { Heading, Text, Box, HStack, Stack } from "@chakra-ui/react"

function Header() {
  return (
    <Stack gap="6">
      <Box>
        <Heading size="4xl" fontWeight="800" letterSpacing="tight" mb="2">
          ZeroDayton
        </Heading>
      </Box>

      <HStack gap="4" pt="4">
        <Text>
          Partnered with <strong>Blizzard Entertainment</strong>
        </Text>
      </HStack>

      <Box bg="gray.100" p="4" borderRadius="md" borderLeft="4px solid" borderColor="gray.300">
        <Text fontSize="xs" fontWeight="black" color="gray.400" textTransform="uppercase" mb="1">
          Capstone Group
        </Text>
        <Text fontSize="md" color="gray.700">
          Wyatt Bier • Matthew Dowell • Dan Frederick • Ryan Zmuda
        </Text>
      </Box>
    </Stack>
  )
}

export default Header
