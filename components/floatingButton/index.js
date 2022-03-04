import { IconButton, Icon, useToast } from "@chakra-ui/react";

export default function floatingButton() {
  const toast = useToast({
    title: "Csákó-mákó!",
    description: "A gomb nem csinál semmit, csak egy fasza toast.",
    position: "bottom-right",
    status: "success",
    duration: 9000,
    isClosable: true
  });

  return (
    <>
      <IconButton
        onClick={toast}
        pos="fixed"
        bottom="40px"
        right="40px"
        w="60px"
        h="60px"
        bg="#F2CC4D"
        color="white"
        aria-label="FAQ"
        isRound="true"
        boxShadow="lg"
        _active={{
          background: "#00BFFF",
        }}
        _pressed={{
          background: "#00BFFF",
        }}
        _focus={{
          background: "#00BFFF",
          outline: "none"
        }}
        icon={
          <Icon width="6" height="6" viewBox="0 0 24 24" color="white">
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
              fill="white"
            />
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
              fill="white"
            />
            <path
              d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
              fill="white"
            />
          </Icon>
        }
      />
    </>
  );
}
