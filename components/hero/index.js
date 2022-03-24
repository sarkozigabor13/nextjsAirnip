import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

import SubscribeSection from "../hero/subscribe";

export default function heroSection() {
  return (
    <Box bgGradient={{base: "#FFFFFF", md: "linear(to-br, #FFFFFF, #F3F5F8)"}}>
      <Container maxW="container.xl">
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          pt={{ base: 10, md: 28}}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} order={[2, 2, 1]}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: "36", lg: "56px" }}
              color={"heroText"}
            >
              The Agency Operating System. Work in Flow.
            </Heading>
            <Text color={"navLink"}>
              Your new workflow and resource management system is ready to
              provide an end-to-end frame to your agency life.
            </Text>
            <Text color={"navLink"}>
              The full horizon of your agency is right in front of you.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <SubscribeSection />
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
            order={[1, 1, 2]}
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
