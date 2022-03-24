import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";

import CollapseSection from "../questions/collapse";
import CtaSection from "../questions/cta";

export default function questionsSection() {
  return (
    <>
      <Box w="100%" pt={"96px"} bgImage="url('./acc_bg.svg')" pb={["96px", "192px"]}>
        <Container maxW={"7xl"}>
          <Center>
            <Heading fontSize="36px" color="#005CFF" textAlign="center">
              Questions and answers
            </Heading>
          </Center>
          <Center pb={"80px"}>
            <Text
              pt={"24px"}
              fontSize={"16px"}
              textAlign={"center"}
              color={"#656565"}
            >
              The Answer to the Ultimate Question of Life,
              <br />
              the Universe, and Everything about Airnip
            </Text>
          </Center>
          <CollapseSection />
        </Container>
      </Box>
      <Box>
        <Container maxW={"7xl"}>
          <CtaSection />
        </Container>
      </Box>
    </>
  );
}
