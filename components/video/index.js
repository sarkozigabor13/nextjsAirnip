import { Container, Heading, Text, AspectRatio } from "@chakra-ui/react";

import { Box, Center } from "@chakra-ui/layout";

export default function videoSection() {
  return (
    <Container maxW={"7xl"} pt="96px" pb="96px">
      <Center>
        <Heading fontSize="36px" color="#005CFF">
          Smart is the new easy
        </Heading>
      </Center>
      <Center pb={"80px"}>
        <Box maxW="640px">
          <Text
            pt={"16px"}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#656565"}
          >
            Working in an agency can be complicated. We know, we’ve been there.
            So we have made things easier, for all of you agency folks. We
            dreamed about developing an essential working tool and we
            successfully achieved it. Every process has been effectively and
            transparently integrated into Airnip, just like your operating
            system on your computer.
          </Text>
          <Text
            pt={"16px"}
            fontSize={"16px"}
            textAlign={"center"}
            color={"#656565"}
          >
            Sounds cool? We’ve made this possible. For you and your whole
            agency.
          </Text>
        </Box>
      </Center>
      <Box d="block" m="auto" w="50%" >
        <AspectRatio maxW="998px" ratio={1}>
          <iframe
            src="https://www.youtube.com/embed/kh3uEa8jABg"
            title="YouTube video player"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Container>
  );
}
