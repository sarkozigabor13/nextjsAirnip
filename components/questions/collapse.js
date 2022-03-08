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
    title: "What’s Airnip?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "What kind of agencies is Airnip for?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Do I need to have the whole team register to manage my agency in Airnip?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Is there a free version of Airnip?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Do I need to submit my card details to start my trial?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const SingleAccordionItem = ({ children }) => {
  return (
    <AccordionItem  border="none">
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
         p={'0px'}
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
        <AccordionIcon color={"#A9ABB1"} />
      </AccordionButton>
    </h2>
  );
};

export default function collapseSection() {
  return (
    <Box>
      <Center>
        <Accordion w={"794px"} allowMultiple>
          {questions.map((question, index) => (
            <SingleAccordionItem key={index}>
              <QuestionTitle>{question.title}</QuestionTitle>
              <AccordionPanel px={'0px'} pt={'8px'}>{question.text}</AccordionPanel>
            </SingleAccordionItem>
          ))}
        </Accordion>
      </Center>
    </Box>
  );
}
