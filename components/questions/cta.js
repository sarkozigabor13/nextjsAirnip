import { chakra, Center, Heading, Text, Button, Link } from "@chakra-ui/react";

export default function ctaSection() {
  return (
    <>
      <Center>
        <Heading
          fontSize="56px"
          maxW={"794px"}
          color="#005CFF"
          textAlign={"center"}
        >
          Change how your agency works... forever.
        </Heading>
      </Center>
      <Center pt={"56px"}>
        <Button
          color="white"
          variant="solid"
          bg={"buttonBlue"}
          size="lg"
          type="submit"
        >
          Try for Free
        </Button>
      </Center>
      <Center>
        <Text
          pt={"16px"}
          pb={'192px'}
          fontSize={"12px"}
          textAlign={"center"}
          color={"#656565"}
        >
          <chakra.span fontWeight="bold">
            or{" "}
            <Link textDecoration={"underline"} color="#005CFF" href="#">
              book a demo
            </Link> {" "}
            Trusted by 24k+ active user.
          </chakra.span>{" "}
          No credit card requied for start.
        </Text>
      </Center>
    </>
  );
}
