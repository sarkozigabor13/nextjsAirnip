import React from "react";
import { IconButton, Stack } from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Arrows = (props) => {
  const arrowStyles = {
    bgColor: "white",
    borderRadius: "full",
    border: "1px solid #E3E7ED",
    w: "40px",
    h: "40px",
    _hover: {
      bg: "white",
    },
    _active: {
      bg: "white",
    },
    focus: {
      bg: "white",
      boxShadow: "none"
    },
  };

  const ArrowSize = {
    w: "24px",
    h: "24px",
  }

  return (
    <>
      <Stack direction="row" spacing="8px" mt="40px">
        <IconButton
          {...arrowStyles}
          onClick={props.prevSlide}
          icon={<ChevronLeftIcon {...ArrowSize} />}
        />
        <IconButton
          {...arrowStyles}
          onClick={props.nextSlide}
          icon={<ChevronRightIcon {...ArrowSize} />}
        />
      </Stack>
    </>
  );
};

export default Arrows;
