import { Container, Heading, Text, AspectRatio } from "@chakra-ui/react";
import { Box, Center } from "@chakra-ui/layout";
import YoutubeVideo from "./video";

export default function videoSection() {
  return (
    <Container maxW={"7xl"} pt="96px" pb="96px">
      <Center>
        <Heading fontSize="36px" color="#005CFF" textAlign="center">
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
      <Box >
        <AspectRatio m="0 auto" boxShadow="lg" ratio={1} maxWidth="998px" maxHeight="500">
          <YoutubeVideo embedId="kh3uEa8jABg" />
        </AspectRatio>
      </Box>
    </Container>
  );
}
