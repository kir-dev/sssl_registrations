import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    // heading: 'Limelight'
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'red.700'
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
      '50': '#29dfff',
      '100': '#16dcff',
      '200': '#07d6fb',
      '300': '#07c6e7',
      '400': '#06b6d4',
      '500': '#09aac7',
      '600': '#0c9fb9',
      '700': '#0e94ac',
      '800': '#0f899e',
      '900': '#117e92'
    },
    kirDev: '#F15A29'
  }
})

export default customTheme
