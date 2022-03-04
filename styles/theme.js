import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'HK Grotesk Bold, sans-serif',
    body: 'HK Grotesk Normal, sans-serif',
  },
  colors: {
    borderGrey: "#E3E7ED",
    navLink: "#656565",
    buttonBlue: "#00BFFF",
    heroText: "#005CFF"
  },
  textStyles: {
    navLink: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
    }
  }
})

export default theme