import { Box, Center, Container, Heading, Text } from "@chakra-ui/layout";
import { SimpleGrid, Image } from "@chakra-ui/react";
import { ST } from "next/dist/shared/lib/utils";

export default function integratedSection() {
  const Styles = {
    img: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      w: {
        base: "70px",
        md: "120px",
      },
    },
  };

  return (
    <Container maxW={"7xl"} pb={["96px", "216px"]}>
      <Center>
        <Heading fontSize="36px" color="#005CFF">
          Fully integrated
        </Heading>
      </Center>
      <Center pb={["40px", "56px"]}>
        <Box maxW="592px">
          <Text
            pt={"24px"}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#656565"}
          >
            We love Toggl and Clockify as much as you do, that is the reason why
            we don’t want you to have to say goodbye to them. We made it
            possible for you to integrate your favorite time tracking software
            into Airnip. Just as easy as it sounds.
          </Text>
        </Box>
      </Center>
      <Center>
        <SimpleGrid columns={2} spacing={["15px", "56px"]}>
          <Box {...Styles.img}>
            <Image src="/clockify.png" alt="Clockify logo" />
          </Box>
          <Box {...Styles.img}>
            <Image src="/toggl.png" alt="Toggl logo" />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
}
