import React from "react";
import { Box } from "@chakra-ui/react";

const CarouselCurrent = (props) => {
  return (
    <>
      <Box
        key={`dots-${props.slide}`}
        cursor="pointer"
        w={["80px", "50%"]}
        h="5px"
        mb="40px"
        bg={props.currentSlide === props.slide ? "#005CFF" : "#E1EBF0"}
        display="inline-block"
        transition="background-color 0.6s ease"
        onClick={() => props.setSlide(props.slide)}
      ></Box>
    </>
  );
};
export default CarouselCurrent;
