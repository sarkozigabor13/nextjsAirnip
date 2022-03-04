import { Box, Container, SimpleGrid, Image } from "@chakra-ui/react";

export default function partnerSection() {
  return (
    <Box bg="#F3F5F8" w="100%" h="114px" display="flex" alignItems="center">
      <Container maxW="container.xl">
        <SimpleGrid columns={4} spacing={10}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/logo-ibm.png" alt="IBM logo" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/logo-kraft-heinz.png" alt="Kraft Heinz logo" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/logo-santander.png" alt="Santander logo" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/logo-volvo.png" alt="Volvo logo" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
