import { extendTheme, useBreakpointValue } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    heading: 'Limelight'
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
      50: '#fee2e2',
      100: '#fecaca',
      200: '#fca5a5',
      300: '#f87171',
      400: '#ef4444',
      500: '#dc2626',
      600: '#b91c1c',
      700: '#991b1b',
      800: '#7f1d1d',
      900: '#2f0d0d'
    },
    kirDev: '#F15A29'
  }
})

export default customTheme
