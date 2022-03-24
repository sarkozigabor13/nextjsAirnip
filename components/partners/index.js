import React, { useEffect, useState } from "react";
import { Box, Container, SimpleGrid, Image, Flex } from "@chakra-ui/react";

const slides = [
  {
    img: "logo-ibm.png",
    imgAlt: "IBM logo",
  },
  {
    img: "logo-kraft-heinz.png",
    imgAlt: "Kraft-Heinz logo",
  },
  {
    img: "logo-santander.png",
    imgAlt: "Santander logo",
  },
  {
    img: "logo-volvo.png",
    imgAlt: "Volvo logo",
  },
];

const Styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function partnerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Box bg="#F3F5F8" w="100%" h="114px" display="flex" alignItems="center">
      <Container maxW="container.xl" display={{ base: "none", md: "block" }}>
        <SimpleGrid columns={4} spacing={10}>
          {slides.map((slide, sid) => (
            <Box {...Styles} key={`slide-${sid}`}>
              <Image src={"/" + slide.img} alt={slide.imgAlt} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW="container.xl" display={{ base: "block", md: "none" }}>
        <Flex w="full" alignItems="center" justifyContent="center">
          <Flex w="full" overflow="hidden">
            <Flex pos="relative" w="full" {...carouselStyle}>
              {slides.map((slide, sid) => (
                <Box
                  {...Styles}
                  key={`slide-${sid}`}
                  flex="none"
                  boxSize="full"
                >
                  <Image src={"/" + slide.img} alt={slide.imgAlt} />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
