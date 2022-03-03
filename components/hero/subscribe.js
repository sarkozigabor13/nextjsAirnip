import {
  chakra,
  Input,
  Button,
  Flex,
  Box,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

export default function Subscribe() {
  return (
    <Flex direction="column" alignItems="start" justifyContent="center" pt={24} pb={12}>
      <chakra.form w="full" mb={6}>
        <Box display={{ base: "block", lg: "none" }}>
          <Input
            size="lg"
            color="brand.900"
            type="email"
            placeholder="Email address"
            bg="white"
          />
          <Button
            w="full"
            mt={2}
            color="white"
            variant="solid"
            bg={"buttonBlue"}
            size="lg"
            type="submit"
          >
            Try for Free
          </Button>
        </Box>
        <InputGroup size="lg" w="half" display={{ base: "none", lg: "flex" }}>
          <Input
            size="lg"
            color="brand.900"
            type="email"
            placeholder="Email address"
            bg="white"
          />
          <InputRightElement w="auto">
            <Button
              color="white"
              variant="solid"
              bg={"buttonBlue"}
              size="lg"
              type="submit"
              roundedLeft={0}
            >
              Try for Free
            </Button>
          </InputRightElement>
        </InputGroup>
      </chakra.form>
      <chakra.p pr={{ base: 0, lg: 16 }} mb={4} fontSize="12px">
        <chakra.span fontWeight="bold">
          Trusted by 24k+ active user.
        </chakra.span>{" "}
        No credit card requied for start.
      </chakra.p>
    </Flex>
  );
}
