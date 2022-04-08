import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Switch,
  Tooltip,
} from "@chakra-ui/react";

import Cards from "../pricing/cards";

import React, { useState } from "react";

const styles = {
  formControlStyles: {
    w: "auto",
    display: "flex",
    alignItems: "center",
  },
  formLabelStyles: {
    mb: "0",
    fontWeight: "600",
    fontSize: "16px",
  },
  switchStyles: {
    size: "lg",
    id: "email-alerts",
    colorScheme: "#005CFF",
  },
  labelStyles: {
    bg: "#00B894",
    label: "Save 20%",
    placement: "top",
    p: "relative",
    top: "-10px",
    left: "-5px",
    borderRadius: "10px",
    fontSize: "14px",
    px: "10px",
    py: "6px",
  },
};

export default function pricesSection() {
  const [checked, setChecked] = useState(false);
  let status = checked; 

  return (
    <>
      <Box pb={["72px", "35px"]}>
        <Center>
          <FormControl {...styles.formControlStyles}>
            <FormLabel {...styles.formLabelStylesStyles} mr="16px">
              Monthly
            </FormLabel>
            <Switch
              {...styles.switchStyles}
              onChange={() => {
                checked ? setChecked(false) : setChecked(true);
              }}
            />
            <Tooltip
              {...styles.labelStyles}
              hasArrow
              isOpen
              aria-label="A tooltip"
            >
              <FormLabel {...styles.formLabelStylesStyles} ml="16px">
                Yearly
              </FormLabel>
            </Tooltip>
          </FormControl>
        </Center>
      </Box>
      <Cards status={status} />
    </>
  );
}
