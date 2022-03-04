import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
} from "@chakra-ui/react";

const questions = [
  {
    title: "Ipsum dolor sit amet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Details about pricing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "How can I lorem ipsum?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Consectetur adipiscing elit?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        _hover={{
          background: "transparent",
        }}
        _focus={{
          outline: "none",
        }}
      >
        <Box
          flex="1"
          textAlign="left"
          color={"#272F42"}
          fontSize={"20px"}
          fontWeight={"600"}
        >
          {children}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  );
};

export default function collapseSection() {
  return (
    <Box>
      <Center>
        <Accordion w={"794px"} allowMultiple>
          {questions.map((question) => (
            <SingleAccordionItem>
              <QuestionTitle>{question.title}</QuestionTitle>
              <AccordionPanel pb={4}>{question.text}</AccordionPanel>
            </SingleAccordionItem>
          ))}
        </Accordion>
      </Center>
    </Box>
  );
}
