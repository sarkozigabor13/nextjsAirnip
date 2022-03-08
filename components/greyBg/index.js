import { Box } from "@chakra-ui/layout";

export default function greyBackground({ children }) {
  return <Box bgColor="#F3F5F8" pt="96px" pb="192px">{children}</Box>;
}
