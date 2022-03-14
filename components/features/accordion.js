import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  chakra,
} from "@chakra-ui/react";

const uniqueQuestion = () => {
  return (
    <>
    <chakra.p color="#656565" mb="10px">
    Plan your project's roadmap based on your quotation!The estimates from your quote will be imported automatically to monitor your commitments and hours easily.
    </chakra.p>
      <chakra.ol color="#656565" ml="18px">
        <chakra.li>Transform commitments automatically into tasks!</chakra.li>
        <chakra.li>Adjust tasks on the timeline!</chakra.li>
        <chakra.li>Allocate resources & dedicate collaborators!</chakra.li>
        <chakra.li>Balance capacity based on estimations!</chakra.li>
        <chakra.li>Find when your teammates have available hours! Conditional teammate booking - for upcoming potential projects.</chakra.li>
      </chakra.ol>
    </>
  );
};

const questions = [
  {
    title: "Agency dashboard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./auto_awesome.svg",
  },
  {
    title: "Brief templates",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./calendar_today.svg",
  },
  {
    title: "Collaborative quote building",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./list_black.svg",
  },
  {
    title: "Timeline & capacity",
    text: uniqueQuestion(),
    img: "./lightbulb_black.svg",
  },
  {
    title: "Monitoring & time tracker",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "./assignment_black.svg",
  },
];

const SingleAccordionItem = ({ children }) => {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <Box
          border="1px"
          borderColor="#F3F5F8"
          borderRadius="xl"
          mb={"12px"}
          p={"24px"}
          backgroundColor={isExpanded ? "#FBFCFD" : "#FFFFFF"}
        >
          {children}
        </Box>
      )}
    </AccordionItem>
  );
};

const QuestionTitle = ({ children }) => {
  return (
    <h2>
      <AccordionButton
        p={"0px"}
        _hover={{
          background: "transparent",
        }}
        _focus={{
          outline: "none",
        }}
      >
        {children}
        <AccordionIcon color={"#A9ABB1"} />
      </AccordionButton>
    </h2>
  );
};

export default function accordionSection() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="192px">
      <Stack spacing={4}>
        <Box>
          <Center>
            <Accordion w={"794px"} allowMultiple>
              {questions.map((question, index) => (
                <SingleAccordionItem key={index}>
                  <QuestionTitle>
                    <Box mr="16px">
                      <Image src={question.img} w="24px" h="24px" />
                    </Box>
                    <Box
                      flex="1"
                      textAlign="left"
                      color={"#272F42"}
                      fontSize={"20px"}
                      fontWeight={"600"}
                    >
                      {question.title}
                    </Box>
                  </QuestionTitle>
                  <AccordionPanel pr="0px" pl="40px" pt={"8px"}>
                    {question.text}
                  </AccordionPanel>
                </SingleAccordionItem>
              ))}
            </Accordion>
          </Center>
        </Box>
      </Stack>
      <Flex>
        <Center>
          <Image
            alt={"feature image"}
            src={"./agency.png"}
            objectFit={"cover"}
          />
        </Center>
      </Flex>
    </SimpleGrid>
  );
}
