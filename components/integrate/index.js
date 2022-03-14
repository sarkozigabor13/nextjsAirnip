import { Box, Center, Container, Heading, Text } from "@chakra-ui/layout";
import { SimpleGrid, Image } from "@chakra-ui/react";

export default function integratedSection() {
  return (
    <Container maxW={"7xl"} pb="216px">
      <Center>
        <Heading fontSize="36px" color="#005CFF">
          Fully integrated
        </Heading>
      </Center>
      <Center pb={"80px"}>
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
      <SimpleGrid columns={2} spacing="56px">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            
            <Image src="/clockify.png" alt="Clockify logo" />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/toggl.png" alt="Toggl logo" />
          </Box>
        </SimpleGrid>
      </Center>
    </Container>
  );
}
