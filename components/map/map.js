import { chakra, Heading, Image } from "@chakra-ui/react";
import { Center, Box, Grid, GridItem, Flex, Text } from "@chakra-ui/layout";

const ArrowFirst = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="12"
      viewBox="0 0 128 12"
      fill="none"
    >
      <circle cx="4" cy="6" r="3" stroke="#005CFF" strokeWidth="2" />
      <line
        x1="7"
        y1="6"
        x2="122"
        y2="6.00001"
        stroke="url(#paint0_linear_1529_15361)"
        strokeWidth="2"
      />
      <path
        d="M127.127 5.24407C127.588 5.64284 127.588 6.35716 127.127 6.75593L123.655 9.76318C123.007 10.3241 122 9.864 122 9.00725L122 2.99275C122 2.136 123.007 1.67594 123.655 2.23682L127.127 5.24407Z"
        fill="#00BFFF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1529_15361"
          x1="7"
          y1="7"
          x2="119.498"
          y2="6.49102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#005CFF" />
          <stop offset="1" stopColor="#00BFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ArrowSecond = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="12"
      viewBox="0 0 128 12"
      fill="none"
    >
      <circle cx="4" cy="6" r="3" stroke="#00BFFF" strokeWidth="2" />
      <line
        x1="7"
        y1="6"
        x2="122"
        y2="6.00001"
        stroke="url(#paint0_linear_1817_5047)"
        strokeWidth="2"
      />
      <path
        d="M127.127 5.24407C127.588 5.64284 127.588 6.35716 127.127 6.75593L123.655 9.76318C123.007 10.3241 122 9.864 122 9.00725L122 2.99275C122 2.136 123.007 1.67594 123.655 2.23682L127.127 5.24407Z"
        fill="#F2CC4D"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1817_5047"
          x1="7"
          y1="7"
          x2="119.498"
          y2="6.49102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00BFFF" />
          <stop offset="1" stopColor="#F2CC4D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ArrowThird = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="196"
      height="170"
      viewBox="0 0 196 170"
      fill="none"
    >
      <circle cx="107" cy="4" r="3" stroke="#F2CC4D" strokeWidth="2" />
      <path
        d="M110.5 4C142 4 200.5 9 194.5 89.5C187.03 189.722 41.5 164 5 164"
        stroke="url(#paint0_linear_1529_15370)"
        strokeWidth="2"
      />
      <path
        d="M0.872871 164.756C0.412409 164.357 0.41241 163.643 0.872871 163.244L4.34535 160.237C4.99299 159.676 6 160.136 6 160.993L6 167.007C6 167.864 4.99299 168.324 4.34535 167.763L0.872871 164.756Z"
        fill="#E270DA"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1529_15370"
          x1="128"
          y1="4"
          x2="128"
          y2="163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2CC4D" />
          <stop offset="1" stopColor="#E270DA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ArrowFourth = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="12"
      viewBox="0 0 128 12"
      fill="none"
    >
      <circle
        cx="124"
        cy="6"
        r="3"
        transform="rotate(180 124 6)"
        stroke="#E270DA"
        strokeWidth="2"
      />
      <line
        x1="121"
        y1="6"
        x2="6"
        y2="6"
        stroke="url(#paint0_linear_1529_15378)"
        strokeWidth="2"
      />
      <path
        d="M0.872871 6.75593C0.412409 6.35716 0.41241 5.64284 0.872871 5.24407L4.34535 2.23682C4.99299 1.67594 6 2.136 6 2.99275L6 9.00725C6 9.864 4.99299 10.3241 4.34535 9.76318L0.872871 6.75593Z"
        fill="#EB565D"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1529_15378"
          x1="121"
          y1="5"
          x2="6"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E270DA" />
          <stop offset="1" stopColor="#EB565D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ArrowFifth = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="197"
      height="154"
      viewBox="0 0 197 154"
      fill="none"
    >
      <circle
        r="3"
        transform="matrix(-1 0 0 1 57.9287 4)"
        stroke="#EB565D"
        strokeWidth="2"
      />
      <path
        d="M54.5 4C26.0713 4 -7.23308 16.3189 3.5 83.5C17.6391 172 147 148.5 192 148.5"
        stroke="url(#paint0_linear_1529_15374)"
        strokeWidth="2"
      />
      <path
        d="M196.056 148.756C196.516 148.357 196.516 147.643 196.056 147.244L192.583 144.237C191.936 143.676 190.929 144.136 190.929 144.993L190.929 151.007C190.929 151.864 191.936 152.324 192.583 151.763L196.056 148.756Z"
        fill="#005CFF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1529_15374"
          x1="38.9286"
          y1="4"
          x2="38.9286"
          y2="163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB565D" />
          <stop offset="1" stopColor="#005CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DoubleArrowFirst = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="63"
      viewBox="0 0 29 63"
      fill="none"
    >
      <path
        d="M5.24407 0.872871C5.64284 0.412409 6.35716 0.41241 6.75593 0.872872L9.76318 4.34535C10.3241 4.99299 9.864 6 9.00725 6L2.99275 6C2.136 6 1.67594 4.99299 2.23682 4.34535L5.24407 0.872871Z"
        fill="#F8E29B"
      />
      <path
        d="M6 6C6 20 11 30.5 28.5 30.5"
        stroke="#F8E29B"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M6.00005 6C6.00005 16 -6.49984 62 28.5 62"
        stroke="#F8E29B"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

const DoubleArrowSecond = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="67"
      viewBox="0 0 29 67"
      fill="none"
    >
      <path
        d="M5.24407 66.1271C5.64284 66.5876 6.35716 66.5876 6.75593 66.1271L9.76318 62.6547C10.3241 62.007 9.864 61 9.00725 61H2.99275C2.136 61 1.67594 62.007 2.23682 62.6547L5.24407 66.1271Z"
        fill="#F4A0A4"
      />
      <path
        d="M6 61C6 47 11 33 28.5 33"
        stroke="#F4A0A4"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M6.00003 61C6.00003 51 -6.49985 1.5 28.5 1.5"
        stroke="#F4A0A4"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

const Styles = {
  BoxStyles: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    backgroundColor: "transparent",
  },
  LeftBoxStyles: {
    borderRadius: "full",
    w: "40px",
    h: "40px",
    p: "12px",
    borderRadius: "4px 0px 0px 4px",
    borderRightWidth: "0px",
  },
  CircleStyles: {
    w: "16px",
    h: "16px",
    borderRadius: "50%",
    position: "absolute",
  },
  RightBoxStyles: {
    flex: "1",
    fontSize: "16px",
    color: "#272F42",
    borderRadius: "0px 4px 4px 0px",
    backgroundColor: "#FFFFFF",
    d: "flex",
    justifyContent: "center",
    p: "7px 16px 7px 12px",
  },
  ArrowStyles: {
    justifyContent: "center",
    px: "8px",
  },
};

const MobileDisplay = () => {
  return (
    <Grid
      p={20}
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(5, 1fr)",
      }}
    >
      <GridItem w="190px">
        <Flex boxShadow="0px 4px 8px rgba(0, 0, 0, 0.08)">
          <Center
            w="40px"
            h="40px"
            backgroundColor="#d6e5ff"
            p="12px"
            border="1px solid #70A4FF"
            borderRadius="4px 0px 0px 4px"
            borderRightWidth="0px"
          >
            <chakra.span
              w="16px"
              h="16px"
              borderRadius="50%"
              backgroundColor="#005CFF"
              position="absolute"
            ></chakra.span>
          </Center>
          <Box
            flex="1"
            fontSize="16px"
            color="#272F42"
            border="1px solid #70A4FF"
            borderRadius="0px 4px 4px 0px"
            backgroundColor="#FFFFFF"
            d="flex"
            justifyContent="center"
          >
            <Center>Create a project</Center>
          </Box>
        </Flex>
      </GridItem>
      <GridItem w="128px" d="flex" justifyContent="center">
        <Center>
          <ArrowFirst />
        </Center>
      </GridItem>
      <GridItem w="240px">
        <Flex boxShadow="0px 4px 8px rgba(0, 0, 0, 0.08)">
          <Center
            w="40px"
            h="40px"
            backgroundColor="#d6f5ff"
            p="12px"
            border="1px solid #70DBFF"
            borderRadius="4px 0px 0px 4px"
            borderRightWidth="0px"
          >
            <chakra.span
              w="16px"
              h="16px"
              borderRadius="50%"
              backgroundColor="#00BFFF"
              position="absolute"
            ></chakra.span>
          </Center>
          <Box
            flex="1"
            fontSize="16px"
            color="#272F42"
            border="1px solid #70DBFF"
            borderRadius="0px 4px 4px 0px"
            backgroundColor="#FFFFFF"
            d="flex"
            justifyContent="center"
          >
            <Center>Select a brief template</Center>
          </Box>
        </Flex>
      </GridItem>
      <GridItem>
        <Center>"----"</Center>
      </GridItem>
      <GridItem w="180px">
        <Flex boxShadow="0px 4px 8px rgba(0, 0, 0, 0.08)">
          <Center
            w="40px"
            h="40px"
            backgroundColor="#fdf7e2"
            p="12px"
            border="1px solid #F8E29B"
            borderRadius="4px 0px 0px 4px"
            borderRightWidth="0px"
          >
            <chakra.span
              w="16px"
              h="16px"
              borderRadius="50%"
              backgroundColor="#F2CC4D"
              position="absolute"
            ></chakra.span>
          </Center>
          <Box
            flex="1"
            fontSize="16px"
            color="#272F42"
            border="1px solid #F8E29B"
            borderRadius="0px 4px 4px 0px"
            backgroundColor="#FFFFFF"
            d="flex"
            justifyContent="center"
          >
            <Center>Create a quote</Center>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const Route = () => {
  return (
    <Box p={10} border="1px solid #E3E7ED" borderRadius="8px" width="100%">
      <Flex justifyContent="center">
        <Center justifyContent="center">
          <Box {...Styles.BoxStyles}>
            <Flex>
              <Center
                backgroundColor="#d6e5ff"
                border="1px solid #70A4FF"
                {...Styles.LeftBoxStyles}
              >
                <chakra.span
                  {...Styles.CircleStyles}
                  backgroundColor="#005CFF"
                />
              </Center>
              <Box {...Styles.RightBoxStyles} border="1px solid #70A4FF">
                <Center>Create a project</Center>
              </Box>
            </Flex>
          </Box>
          <Box {...Styles.ArrowStyles}>
            <Center>
              <ArrowFirst />
            </Center>
          </Box>
          <Box {...Styles.BoxStyles}>
            <Flex>
              <Center
                backgroundColor="#d6f5ff"
                border="1px solid #70DBFF"
                {...Styles.LeftBoxStyles}
              >
                <chakra.span
                  {...Styles.CircleStyles}
                  backgroundColor="#00BFFF"
                />
              </Center>
              <Box {...Styles.RightBoxStyles} border="1px solid #70DBFF">
                <Center>Select a brief template</Center>
              </Box>
            </Flex>
          </Box>
          <Box {...Styles.ArrowStyles} pb="15px">
            <Center>
              <Text color="#656565" fontSize="12px">
                Take client brief
              </Text>
            </Center>
            <Center>
              <ArrowSecond />
            </Center>
          </Box>
          <Box {...Styles.BoxStyles}>
            <Flex boxShadow="0px 4px 8px rgba(0, 0, 0, 0.08)">
              <Center
                backgroundColor="#fdf7e2"
                border="1px solid #F8E29B"
                {...Styles.LeftBoxStyles}
              >
                <chakra.span
                  {...Styles.CircleStyles}
                  backgroundColor="#F2CC4D"
                />
              </Center>
              <Box {...Styles.RightBoxStyles} border="1px solid #F8E29B">
                <Center>Create a quote</Center>
              </Box>
            </Flex>
          </Box>
          <Box {...Styles.ArrowStyles} pos="relative" right="130px">
            <Box pos="absolute" left="-32px" top="26px">
              <DoubleArrowFirst />
            </Box>
            <Box pos="absolute" minW="206px" top="48px" left="0px">
              <chakra.div color="#656565" fontSize="14px" mb="12px">
                Request quote from contractor
              </chakra.div>
              <chakra.div fontSize="14px">
                Get estimations from teammates
              </chakra.div>
            </Box>
          </Box>
          <Box {...Styles.ArrowStyles} pos="relative" right="100px">
            <Center pos="absolute">
              <ArrowThird />
            </Center>
          </Box>
        </Center>
      </Flex>
      <Flex justifyContent="center">
        <Center justifyContent="center" mt="120px">
          <Box pos="relative" right="-62px" top="-115px">
            <Box pos="absolute" left="-32px" top="26px">
              <DoubleArrowSecond />
            </Box>
            <Box pos="absolute" minW="260px" top="18px" left="4px">
              <chakra.div color="#656565" fontSize="14px" mb="12px">
                Insights to help you keep project on track
              </chakra.div>
              <chakra.div fontSize="14px">Time spent vs. Estimate</chakra.div>
            </Box>
          </Box>
          <Box {...Styles.ArrowStyles} pos="relative" right="65px">
            <Center pos="absolute">
              <ArrowFifth />
            </Center>
          </Box>
          <Box {...Styles.BoxStyles}>
            <Flex>
              <Center
                backgroundColor="#fce4e5"
                border="1px solid #F4A0A4"
                {...Styles.LeftBoxStyles}
              >
                <chakra.span
                  {...Styles.CircleStyles}
                  backgroundColor="#EB565D"
                />
              </Center>
              <Box {...Styles.RightBoxStyles} border="1px solid #F4A0A4">
                <Center>Monitor project</Center>
              </Box>
            </Flex>
          </Box>
          <Box {...Styles.ArrowStyles}>
            <Center>
              <ArrowFourth />
            </Center>
          </Box>
          <Box {...Styles.BoxStyles}>
            <Flex>
              <Center
                backgroundColor="#fae8f9"
                border="1px solid #EFAFEA"
                {...Styles.LeftBoxStyles}
              >
                <chakra.span
                  {...Styles.CircleStyles}
                  backgroundColor="#E270DA"
                />
              </Center>
              <Box {...Styles.RightBoxStyles} border="1px solid #EFAFEA">
                <Center>Plan capacity and timeline for project</Center>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Flex>
      <Flex justifyContent="center">
        <Center justifyContent="center" mt="88px">
          <Box
            {...Styles.BoxStyles}
            p="16px"
            border="2px dashed #c2d8ff"
            backgroundColor="rgba(0, 92, 255, 0.02)"
            borderRadius="8px"
            width="100%"
          >
            <Flex>
              <Center
                backgroundColor="#d6e5ff"
                border="1px solid #70A4FF"
                {...Styles.LeftBoxStyles}
              >
                <chakra.span
                  {...Styles.CircleStyles}
                  backgroundColor="#005CFF"
                />
              </Center>
              <Box {...Styles.RightBoxStyles} border="1px solid #70A4FF">
                <Center>Check agency's health on a single dashboard</Center>
              </Box>
            </Flex>
            <Box
              display="flex"
              mt="32px"
              mb="16px"
              justifyContent="center"
              alignItems="center"
            >
              <Image src="/map_illustrations.svg" alt="Illustrations" />
            </Box>
          </Box>
        </Center>
      </Flex>
      <Flex justifyContent="center" mt="16px">
        <Center justifyContent="center">
          <Text fontSize="14px">
            Better results for future projects based Airnip recommendations
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default function mapLinesSection() {
  return (
    <>
      <Center>
        <Heading
          fontSize="16px"
          color="#005CFF"
          borderTop="1px solid #E3E7ED"
          borderLeft="1px solid #E3E7ED"
          borderRight="1px solid #E3E7ED"
          borderBottom="1px solid #FFFFFF"
          borderRadius="4px 4px 0px 0px"
          py="8px"
          px="16px"
          position="relative"
          top="1px"
          backgroundColor="white"
        >
          Project 1
        </Heading>
      </Center>
      <Center>
        <Route />
      </Center>
    </>
  );
}
