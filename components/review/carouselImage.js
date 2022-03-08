import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const CarouselImage = (props) => {

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${props.currentSlide * 100}%`,
  };

  return (
    <>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex w="full" {...carouselStyle}>
            {props.slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" flex="none">
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default CarouselImage;
