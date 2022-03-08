import { Center } from "@chakra-ui/layout";
import { Container, Box } from "@chakra-ui/layout";
import Carousel from "./carousel";

export default function reviewSection() {
  return (
    <Container maxW="7xl">
      <Center>
        <Box maxW={"590px"}>
          <Center
            textAlign="center"
            color="#005CFF"
            fontSize="36px"
            fontWeight="700"
            mb="80px"
          >
            The ones who already got their work in flow
          </Center>
        </Box>
      </Center>
      <Center>
        <Carousel />
      </Center>
    </Container>
  );
}
