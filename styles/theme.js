import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    borderGrey: "#E3E7ED",
    navLink: "#656565",
    buttonBlue: "#00BFFF"
  },
  textStyles: {
    navLink: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
    },
  }
})

export default theme