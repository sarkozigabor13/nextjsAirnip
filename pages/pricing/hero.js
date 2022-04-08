import {
  Box,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function pricingHero() {
  return (
    <>
      <Box
        w="100%"
        pt={"144px"}
      >
        <Container maxW={"7xl"}>
          <Center>
            <Heading fontSize="36px" color="#005CFF" textAlign="center">
              Supercharge your team
            </Heading>
          </Center>
          <Center pb={"120px"}>
            <Text fontSize={"16px"} textAlign={"center"} color={"#656565"}>
              Your agency, your package
            </Text>
          </Center>
        </Container>
      </Box>
    </>
  );
}
