import { Container, Heading, Text } from "@chakra-ui/react";
import { Box, Center } from "@chakra-ui/layout";
import MapLinesSection from "./map";

export default function mapSection() {
  return (
    <Box w="100%" pt="96px" bgImage="url('./acc_bg.svg')">
      <Container maxW={"7xl"} pt="96px">
        <Center>
          <Heading fontSize="36px" color="#005CFF">
            Airnip in action
          </Heading>
        </Center>
        <Center pb={"80px"}>
          <Box maxW="491px">
            <Text
              pt={"16px"}
              fontSize={"16px"}
              textAlign={"center"}
              color={"#656565"}
            >
              Airnip handles all the agency processes in 6 steps to guarantee
              the most effective all-in project delivery in time.
            </Text>
          </Box>
        </Center>
        <MapLinesSection />
      </Container>
    </Box>
  );
}
