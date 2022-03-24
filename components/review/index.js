import { Box, Center, Container  } from "@chakra-ui/layout";
import Carousel from "./carousel";

export default function reviewSection() {
  return (
    <Container maxW="7xl">
      <Center>
        <Box maxW={"590px"}>
          <Center
            textAlign="center"
            color="#005CFF"
            fontSize={["24px", "36px"]}
            fontWeight="700"
            mb={["20px", "80px"]}
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
