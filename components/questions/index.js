import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";

import CollapseSection from "../questions/collapse"

export default function questionsSection() {
  return (
    <Box w="100%" pt={"96px"}>
      <Container maxW={"7xl"}>
        <Center>
          <Heading fontSize="36px" color="#005CFF">
            Questions and answers
          </Heading>
        </Center>
        <Center pb={"80px"}>
          <Text pt={"24px"} textAlign={"center"} color={"#656565"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna
          </Text>
        </Center>
        <CollapseSection />
      </Container>
    </Box>
  );
}
