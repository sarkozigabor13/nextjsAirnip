import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

import CtaBook from "../book/cta"

export default function bookSection() {
  return (
    <Box bg={"#0048C8"}>
      <Container maxW={"7xl"} py={"96px"} bg={"#005CFF"}>
        <Center>
          <Box maxW={"390px"}>
            <Center color={"white"}>
              <Heading>Book a demo</Heading>
            </Center>
            <Center>
              <Text mt={'16px'} color={"white"} textAlign={"center"}>
                Let's schedule a call, where we will walk you through the
                software.
              </Text>
            </Center>
            <Center>
              <CtaBook />
            </Center>
            <Center>
              <Text fontSize={'12px'} fontWeight={'400'} color={"white"}>No credit card is required to start.</Text>
            </Center>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}
