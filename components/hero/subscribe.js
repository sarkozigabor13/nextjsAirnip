import {
  chakra,
  Input,
  Button,
  Flex,
  Text,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

export default function Subscribe() {
  return (
    <Flex direction="column" alignItems="start" justifyContent="center" pt={["32px","24px"]} pb={['137px, 64px']}>
      <chakra.form w="full" mb="8px">
        <InputGroup size="lg" w="half">
          <Input
            size="lg"
            color="brand.900"
            type="email"
            placeholder="Email address"
            bg="white"
            fontSize='16px'
          />
          <InputRightElement w="auto">
            <Button
              color="white"
              variant="solid"
              bg={"buttonBlue"}
              p="8px 15px"
              type="submit"
              m="4px"
              fontWeight="400"
              fontSize='16px'
            >
              Try for Free
            </Button>
          </InputRightElement>
        </InputGroup>
      </chakra.form>
      <Text minW={["100%", "389px"]} textAlign="center" fontSize="12px">
        No credit card is required to start. 
      </Text>
    </Flex>
  );
}
