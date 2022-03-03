import {
  Flex,
  HStack,
  VStack,
  Box,
  Icon,
  Text,
  Center,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function reviewSection() {
  return (
    <Flex direction="column" alignItems="start" justifyContent="center">
      <HStack align={"center"}>
        <Box color="#F2CC4D">
          <Icon fontSize="13px" as={StarIcon} pr={1} />
          <Icon fontSize="13px" as={StarIcon} pr={1} />
          <Icon fontSize="13px" as={StarIcon} pr={1} />
          <Icon fontSize="13px" as={StarIcon} pr={1} />
          <Icon fontSize="13px" as={StarIcon} pr={1} />
        </Box>
        <VStack align={"start"}>
          <Center>
            <Text color="#656565" fontSize="14px">
              (4,8) on Clutch – Read our client reviews
            </Text>
          </Center>
        </VStack>
      </HStack>
    </Flex>
  );
}
