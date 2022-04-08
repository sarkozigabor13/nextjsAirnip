import { Box } from "@chakra-ui/react";

import Navbar from "../../components/navbar";
import FloatingButton from "../../components/floatingButton";
import Hero from "../pricing/hero";
import Prices from "../pricing/prices";


export default function PricingPage() {
  return (
    <>
      <FloatingButton />
      <Navbar />
      <Box bgImage="url('./acc_bg.svg')">
        <Hero />
        <Prices />
      </Box>
    </>
  );
}
