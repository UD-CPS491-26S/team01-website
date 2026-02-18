import { Container, VStack, Separator } from "@chakra-ui/react"
import Header from "./components/Header"
import About from "./components/About"

function App() {
  return (
    <Container maxW="3xl" pt="20" pb="20">
      <VStack gap="16" align="stretch">
        <Header />
        <Separator borderColor="gray.200" />
        <About />
      </VStack>
    </Container>
  )
}

export default App
