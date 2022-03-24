import { Box } from "@chakra-ui/layout";

export default function greyBackground({ children }) {
  return <Box bgColor="#F3F5F8" pt={{base: "80px", md: "96px"}} pb={["112px", "192px"]} >{children}</Box>;
}
