import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50'
      },
      h1: {
        textAlign: 'center',
        mt: 20
      },
      h2: {
        color: 'theme.600',
        mt: 20
      },
      h3: {
        color: 'theme.700',
        mt: 14
      }
    }
  },
  colors: {
    theme: {
      100: '#d0dfe7',
      200: '#a2bfcf',
      300: '#73a0b8',
      400: '#4580a0',
      500: '#166088',
      600: '#124d6d',
      700: '#0d3a52',
      800: '#092636',
      900: '#04131b'
    },
    kirDev: '#F15A29'
  }
})

export default customTheme
