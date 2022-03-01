import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

export default function Subscribe() {
  return (
    <Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        as={"form"}
      >
        <FormControl>
          <Input
            variant={"solid"}
            borderWidth={1}
            color={"gray.800"}
            _placeholder={{
              color: "gray.400",
            }}
            borderColor={useColorModeValue("gray.300", "gray.700")}
            id={"email"}
            type={"email"}
            required
            placeholder={"Email address"}
            aria-label={"Email address"}
          />
        </FormControl>
        <FormControl w={{ base: "100%", md: "40%" }}>
          <Button 
          w="100%"
          background={'buttonBlue'}
          color={'white'}

          >
          Try for Free
          </Button>
        </FormControl>
      </Stack>
    </Flex>
  );
}
