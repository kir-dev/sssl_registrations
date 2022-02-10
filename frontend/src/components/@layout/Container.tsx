import * as React from 'react'
import { Flex } from '@chakra-ui/react'

export const Container: React.FC = ({ children }) => (
  <Flex
    flexDirection="column"
    px={{ base: 4, sm: 6, md: 10, lg: 12, xl: 16 }}
    py={4}
    mx="auto"
    maxWidth={{ base: '100%', sm: '42rem', md: '42rem', lg: '58rem', xl: '64rem', '2xl': '80rem' }}
    bgGradient="linear(to-r, orange.900 0%, orange.100 3%, orange.100 50%, orange.100 97%, orange.900 100%)"
    boxShadow="10px 5px 3px 0px rgba(0,0,0,0.3),-10px 5px 3px 0px rgba(0,0,0,0.3)"
  >
    {children}
  </Flex>
)
