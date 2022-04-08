import {
  Box,
  Center,
  Divider,
  Text,
  Stack,
  List,
  ListItem,
  Button,
  chakra,
  Tooltip,
} from "@chakra-ui/react";

import styles from "../pricing/Cards.module.css";

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="8" fill="#A9ABB1" />
      <path
        d="M6.25009 10.4334L3.81759 8.00089L2.98926 8.82339L6.25009 12.0842L13.2501 5.08422L12.4276 4.26172L6.25009 10.4334Z"
        fill="white"
      />
    </svg>
  );
};

const Boxes = [
  {
    color: "#005CFF",
    background: "#FFFFFF",
    hasShadow: false,
    hasBadge: false,
    type: "Middleweight",
    priceMonthly: "9",
    priceYearly: "30",
    subText: "Up to 15 users  ·  Billed monthly",
    subTextSecondLine: "No credit card required!",
    list: ["Unlimited tasks, plans and teams", "File upload up to 10mb"],
  },
  {
    color: "#E270DA",
    background: "#fef9fe",
    hasShadow: true,
    hasBadge: true,
    type: "Heavyweight",
    priceMonthly: "15",
    priceYearly: "45",
    subText: "Up to 25 users  ·  Billed monthly",
    subTextSecondLine: "No credit card required!",
    list: [
      "Everything in Basic",
      "Recurring tasks",
      "Multi-assign tasks",
      "File upload up to 100mb",
      "Custom colors",
    ],
  },
  {
    color: "#272F42",
    background: "#FFFFFF",
    hasShadow: false,
    hasBadge: false,
    type: "Mike Tyson",
    priceMonthly: "24",
    priceYearly: "50",
    subText: "Up to unlimited user",
    subTextSecondLine: "No credit card required!",
    list: [
      "Everything in Premium",
      "Access rights",
      "Data export",
      "Priority support",
    ],
  },
];

const Styles = {
  boxStyles: {
    maxW: "389px",
    minH: "512px",
    w: "full",
    rounded: "md",
    overflow: "hidden",
    border: "1px solid #cccccc",
    borderTop: "8px solid",
  },
  stackStyles: {
    textAlign: "center",
    p: "16px",
    color: "black",
    align: "center",
    alignItems: "flex-start",
  },
  titleTextStyles: {
    fontSize: "36px",
    fontWeight: 800,
  },
  textStyles: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#272F42",
  },
  subTextStyles: {
    w: "100%",
    align: "center",
    justify: "center",
  },
  tooltipStyles: {
    ml: "8px",
    borderRadius: "4px",
    placement: "right",
    label: "Most popular",
  },
  stackTwoStyles: {
    direction: "row",
    align: "center",
    justify: "center",
    pb: "28px",
  },
  listStyles: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  },
  buttonStyles: {
    w: "full",
    color: "white",
    rounded: "xl",
    _hover: {
      bg: "inherit",
    },
    _focus: {
      bg: "inherit",
    },
  },
};

export default function Pricing(props) {
  return (
    <>
      <Center py={6}>
        {Boxes.map((box, index) => (
          <Box
            key={index}
            {...Styles.boxStyles}
            borderTopColor={box.color}
            bg={box.background}
            className={styles.list}
            boxShadow={box.hasShadow ? "lg" : ""}
          >
            <Stack {...Styles.stackStyles}>
              {box.hasBadge ? (
                <Tooltip
                  {...Styles.tooltipStyles}
                  bg={box.color}
                  hasArrow
                  isOpen
                >
                  <Text {...Styles.textStyles}>{box.type}</Text>
                </Tooltip>
              ) : (
                <Text {...Styles.textStyles}>{box.type}</Text>
              )}

              <Stack {...Styles.stackTwoStyles}>
                <Text {...Styles.titleTextStyles}>$</Text>
                <Text {...Styles.titleTextStyles}>
                  {props.status ? box.priceMonthly : box.priceYearly}
                </Text>
                <Text pl="2px" color={"#A9ABB1"} textAlign="left">
                  user /<chakra.br /> month
                </Text>
              </Stack>
              <Stack w="100%">
                <Button {...Styles.buttonStyles} bg={box.color}>
                  14 day trial
                </Button>
              </Stack>
              <Stack {...Styles.subTextStyles}>
                <Text fontSize="14px" mb="-8px">
                  {box.subText}
                </Text>
              </Stack>
              <Stack {...Styles.subTextStyles}>
                <Text fontSize="14px">{box.subTextSecondLine}</Text>
              </Stack>
            </Stack>
            <Divider w="90%" mx="auto" mt="16px" />
            <Box px={6} py={10}>
              <List spacing={3}>
                {box.list.map((list, index) => (
                  <ListItem key={"listElement-" + index} {...Styles.listStyles}>
                    <CheckIcon display="flex" />
                    {list}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        ))}
      </Center>
    </>
  );
}
