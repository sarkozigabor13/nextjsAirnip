import React from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";

const CarouselText = (props) => {

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
                <chakra.h2 fontSize="24px" fontWeight="700" color="#272F42">
                  {slide.text}
                </chakra.h2>
                <chakra.p mt="16px" color="#656565">
                  {slide.by}
                </chakra.p>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default CarouselText;
