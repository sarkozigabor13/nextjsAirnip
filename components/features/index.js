import {
  Container,
  Heading,
  Text
} from "@chakra-ui/react";

import { Box, Center } from "@chakra-ui/layout";

import AccordionSection from "./accordion"

export default function featuresSection() {
  return (
    <Container maxW={"7xl"} pt='96px' pb='192px'>
      <Center>
        <Heading fontSize="36px" color="#005CFF">
          The agency operating system A-Z
        </Heading>
      </Center>
      <Center pb={"80px"}>
        <Box maxW="491px">
          <Text
            pt={"24px"}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#656565"}
          >
            All the features you’ll ever need. Handle everything with one tool
            from the kick-off of the project up until completion!
          </Text>
        </Box>
      </Center>
      <AccordionSection />
    </Container>
  );
}
