import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";

import SubscribeSection from "../hero/subscribe";
import ReviewSection from "../hero/review";

export default function heroSection() {
  return (
    <Box bgGradient="linear(to-br, #FFFFFF, #F3F5F8)">
      <Container maxW="container.xl">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: "3xl", sm: "4xl", lg: "56px" }}
              color={"heroText"}
            >
              The Agency Operating System
            </Heading>
            <Text color={"navLink"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <SubscribeSection />
            </Stack>
            <ReviewSection />
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box position={"relative"} width={"full"} overflow={"hidden"}>
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"/hero.png"}
                />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
