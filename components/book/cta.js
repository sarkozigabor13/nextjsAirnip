import {
    Input,
    Button,
    InputGroup,
    InputRightElement
  } from "@chakra-ui/react";

export default function ctaBook() {
    return (
        <InputGroup size="lg" w="full" mb={'16px'} mt={'40px'} display={{ base: "none", lg: "flex" }}>
          <Input
            color="brand.900"
            type="email"
            placeholder="Email address"
            bg="white"
            fontSize={'16px'}
          />
          <InputRightElement w="auto">
            <Button
              color="white"
              variant="solid"
              bg={"buttonBlue"}
              type="submit"
              m={'4px'}
            >
              Book
            </Button>
          </InputRightElement>
        </InputGroup>
    )
}