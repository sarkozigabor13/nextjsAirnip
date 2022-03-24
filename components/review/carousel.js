import React, { useState } from "react";
import { Box, VStack, Grid, GridItem } from "@chakra-ui/react";

import Arrows from "./carouselArrow";
import CarouselCurrent from "./carouselCurrent";
import CarouselImage from "./carouselImage";
import CarouselText from "./carouselText";

const Component = () => {
  const slides = [
    {
      img: "./testimonial.png",
      text: "“We have reached full transparency with the agency dashboard, I can finally see the availability of my teammates.”",
      by: "Jamie Chappell — Creative Director"
    },
    {
      img: "./testimonial.png",
      text: "“It really saves me time and effort. It is exactly what our business has been lacking.”", 
      by: "Brandon P. - Chief Marketing Officer"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <>
      <Box mt={14} maxW={"1028px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={["64px", 4]}
        >
          <GridItem colSpan={1} order={[2, 1]}>
            <VStack alignItems="flex-start">
              <Box maxW="390px">
                {Array.from({ length: slidesCount }).map((_, slide) => (
                  <CarouselCurrent
                    slide={slide}
                    key={slide}
                    currentSlide={currentSlide}
                    setSlide={setSlide}
                  />
                ))}
                <CarouselText currentSlide={currentSlide} slides={slides} />
                <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
              </Box>
            </VStack>
          </GridItem>
          <GridItem order={[1, 2]}>
            <CarouselImage currentSlide={currentSlide} slides={slides} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default Component;
