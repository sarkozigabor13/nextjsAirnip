import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Center
} from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="24"
      viewBox="0 0 110 24"
      fill="none"
    >
      <g clipPath="url(#clip0_1743_3352)">
        <path
          d="M-6.10352e-05 19.3102V3.49854L15.454 3.501L7.83399 18.558L-6.10352e-05 19.3102Z"
          fill="#005CFF"
        />
        <path
          d="M23.1811 19.3102V3.49854H3.32355C8.12784 3.49854 10.1047 8.52257 11.5515 11.2438C12.9179 13.817 15.3485 18.5576 15.3485 18.5576L23.1811 19.3102Z"
          fill="#00BFFF"
        />
        <path
          d="M47.8694 0H51.8587L51.7646 3.81923L47.9698 1.93588L47.8694 0Z"
          fill="#272F42"
        />
        <path
          d="M48.0179 5.5993L51.7658 3.81958V19.0041H48.0179V5.5993Z"
          fill="#272F42"
        />
        <path
          d="M87.1796 0H91.169L91.0749 3.81923L87.2797 1.93588L87.1796 0Z"
          fill="#272F42"
        />
        <path
          d="M87.3263 5.5993L91.0742 3.81958V19.0041H87.3263V5.5993Z"
          fill="#272F42"
        />
        <path
          d="M56.226 3.81946H59.8816V6.3729C60.1746 5.5126 60.747 4.77244 61.5097 4.26783C62.0895 3.87149 62.7575 3.61964 63.4567 3.53372C64.156 3.44779 64.8659 3.53034 65.5261 3.77434C66.0104 3.94923 66.4486 4.22983 66.8083 4.59529L65.1026 7.63516C64.6098 7.30002 64.0264 7.11992 63.4285 7.11842C60.9957 7.11842 59.8499 9.2686 59.8499 12.5905V19.0058H56.2249L56.226 3.81946Z"
          fill="#272F42"
        />
        <path
          d="M69.0114 3.81961H72.7607V5.58206C73.316 4.90424 74.0268 4.36744 74.8341 4.0163C75.5981 3.67933 76.4246 3.50335 77.2611 3.49954C78.3365 3.44594 79.4012 3.73123 80.3024 4.3144C81.2035 4.89756 81.8944 5.74854 82.2759 6.74492C82.6757 7.74308 82.8765 8.8084 82.8672 9.88209V19.0021H79.1194V10.3555C79.1617 9.46415 78.8903 8.58588 78.3514 7.87043C78.0917 7.55425 77.7601 7.30325 77.3838 7.13786C77.0075 6.97248 76.597 6.89739 76.1858 6.9187C75.7233 6.89083 75.2601 6.95813 74.8252 7.11636C74.3904 7.27459 73.9934 7.5203 73.6593 7.838C73.0602 8.45133 72.7607 9.40141 72.7607 10.6882V19.0024H69.0128L69.0114 3.81961Z"
          fill="#272F42"
        />
        <path
          d="M95.1783 3.81953H99.0476V5.33947C99.5589 4.72184 100.223 4.2454 100.975 3.9563C101.755 3.65108 102.586 3.49626 103.425 3.50017C104.693 3.46809 105.936 3.84714 106.965 4.5795C107.969 5.31848 108.749 6.31428 109.223 7.45969C110.258 9.99482 110.258 12.8285 109.223 15.3636C108.748 16.5109 107.962 17.5054 106.95 18.2364C105.902 18.966 104.644 19.3418 103.364 19.3079C102.534 19.3156 101.71 19.166 100.937 18.8673C100.196 18.5777 99.5451 18.1007 99.049 17.4842V23.9999H95.1786L95.1783 3.81953ZM105.277 14.6798C105.942 13.7178 106.273 12.5683 106.222 11.4041C106.276 10.2501 105.947 9.11029 105.285 8.15904C104.66 7.33351 103.728 6.92062 102.489 6.92039C101.25 6.92015 100.311 7.33304 99.6709 8.15904C99.0166 9.11515 98.6803 10.2497 98.7092 11.4041C98.6818 12.5703 99.0176 13.7166 99.6709 14.6875C100.311 15.5285 101.25 15.9491 102.489 15.9491C103.718 15.9491 104.647 15.5261 105.277 14.6801L105.277 14.6798Z"
          fill="#272F42"
        />
        <path
          d="M39.687 3.81954V5.33948C39.1756 4.72173 38.5116 4.24527 37.7593 3.95631C36.9796 3.65109 36.1482 3.49627 35.3098 3.50018C34.0422 3.468 32.7988 3.84705 31.7692 4.57951C30.7659 5.31844 29.9852 6.31425 29.5113 7.45971C28.4773 9.99498 28.4773 12.8283 29.5113 15.3636C29.9857 16.511 30.7727 17.5055 31.7845 18.2364C32.8324 18.9662 34.0902 19.342 35.371 19.308C36.2016 19.3235 37.0269 19.1736 37.7978 18.8673C38.7534 18.4574 39.593 17.8219 40.243 17.0164L40.4702 19.0119H43.5577V3.81954H39.687ZM36.2466 15.9491C35.0177 15.9491 34.0884 15.5261 33.4587 14.6801C32.7938 13.7182 32.4623 12.5687 32.514 11.4044C32.4591 10.2504 32.7883 9.11042 33.4512 8.1594C34.0755 7.33387 35.0073 6.92099 36.2466 6.92075C37.4859 6.92052 38.4254 7.3334 39.0651 8.1594C39.7206 9.11522 40.0584 10.2496 40.0314 11.4044C40.0572 12.571 39.7198 13.7171 39.0651 14.6875C38.4239 15.5288 37.4844 15.9493 36.2466 15.9491Z"
          fill="#272F42"
        />
        <path
          d="M3.32355 3.49854C3.32355 3.49854 8.12783 3.49854 9.41082 15.4423L11.5501 11.2438C10.1047 8.52257 8.12784 3.49854 3.32355 3.49854Z"
          fill="#0B44B5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1743_3352">
          <rect width="110" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} color={"#272F42"} fontSize={"20px"} mb={"16px"}>
      {children}
    </Text>
  );
};

export default function footerSection() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Center py={10}>
        <Divider maxW={"90%"} />
      </Center>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo/>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Overview</ListHeader>
            <Link color={"#A9ABB1"} href={"#"}>Product</Link>
            <Link color={"#A9ABB1"} href={"#"}>Pricing</Link>
            <Link color={"#A9ABB1"} href={"#"}>Demo</Link>
            <Link color={"#A9ABB1"} href={"#"}>Customers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Overview</ListHeader>
            <Link color={"#A9ABB1"} href={"#"}>Product</Link>
            <Link color={"#A9ABB1"} href={"#"}>Pricing</Link>
            <Link color={"#A9ABB1"} href={"#"}>Demo</Link>
            <Link color={"#A9ABB1"} href={"#"}>Customers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow us</ListHeader>
            <Link color={"#A9ABB1"} href={"#"}>Facebook</Link>
            <Link color={"#A9ABB1"} href={"#"}>Instagram</Link>
            <Link color={"#A9ABB1"} href={"#"}>Linkedin</Link>
            <Link color={"#A9ABB1"} href={"#"}>Twitter</Link>
            <Link color={"#A9ABB1"} href={"#"}>Medium</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link color={"#A9ABB1"} href={"#"}>About us</Link>
            <Link color={"#A9ABB1"} href={"#"}>Carrers</Link>
            <Link color={"#A9ABB1"} href={"#"}>Terms &#38; Policies</Link>
            <Link color={"#A9ABB1"} href={"#"}>Contact us</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={8} pt={4}>
        <Text fontSize="14px" color="#A9ABB1" textAlign={"center"}>
          © 2021 Airnip Ltd.
        </Text>
      </Box>
    </Box>
  );
}
