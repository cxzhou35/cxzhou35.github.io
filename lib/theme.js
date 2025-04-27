import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F0E7DB', '#1F2129')(props), // background color for light and dark mode
      fontSize: '16px'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#224B8E', '#FF63C3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca',
  iconLight: '#e4c6d0',
  iconDark: '#6880A6',
  linkLight: '#224B8E',
  linkDark: '#FF63C3'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const Theme = extendTheme({ config, styles, components, fonts, colors })
export default Theme
