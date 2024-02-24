import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    // heading: 'Limelight'
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.700'
      },
      h1: {
        fontWeight: 400,
        textAlign: 'center',
        mt: 20
      },
      h2: {
        fontWeight: 400,
        color: 'theme.600',
        mt: 20
      },
      h3: {
        fontWeight: 400,
        color: 'theme.700',
        mt: 14
      }
    }
  },
  colors: {
    theme: {
      '50': '#f2faec',
      '100': '#e4f6d9',
      '200': '#caedb3',
      '300': '#afe38e',
      '400': '#95da68',
      '500': '#7ad142',
      '600': '#62a735',
      '700': '#497d28',
      '800': '#2f5e1b',
      '900': '#1a3f0f'
    },
    kirDev: '#F15A29'
  }
})

export default customTheme
