import * as React from 'react'
import { Box, Flex, HStack, Image, Link, StackProps, Text, useColorModeValue, VStack, Wrap } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import { Container } from './Container'
import customTheme from '../../theme/customTheme'

export const Footer: React.FC = () => (
  <Box>
    <Container>
      <Wrap pt={24} justify="space-between" align="center">
        <FooterWrapItem>
          <FooterBigImage src="/img/sssl.svg" filter={useColorModeValue('', 'invert(100%)')} />
          <HStack align="center">
            <Link
              isExternal
              fontSize="xl"
              _hover={{ color: customTheme.colors.kirDev, textDecorationLine: 'underline' }}
              href="https://sssl.sch.bme.hu"
            >
              Weboldal
            </Link>
            <Text>|</Text>
            <Link
              isExternal
              fontSize="xl"
              _hover={{ color: customTheme.colors.kirDev, textDecorationLine: 'underline' }}
              href="mailto:skepzes22@gmail.com"
            >
              Kapcsolat
            </Link>
          </HStack>
        </FooterWrapItem>
        <FooterWrapItem>
          <Flex direction="row" align="center">
            <Text mr={2}>Made with</Text>
            <FaHeart color="red" size="1.5rem" />
            <Text ml={2}>by</Text>
          </Flex>
          <FooterBigImage src={useColorModeValue('/img/kirdev.svg', '/img/kirdev-white.svg')} />
          <HStack align="center">
            <Link
              isExternal
              fontSize="xl"
              _hover={{ color: customTheme.colors.kirDev, textDecorationLine: 'underline' }}
              href="https://kir-dev.sch.bme.hu"
            >
              Weboldal
            </Link>
          </HStack>
        </FooterWrapItem>
      </Wrap>
    </Container>
  </Box>
)

const FooterWrapItem: React.FC<StackProps> = ({ children, ...props }) => {
  return (
    <VStack py={3} spacing={1} align="center" width={{ base: '100%', md: 'fit-content' }} {...props}>
      {children}
    </VStack>
  )
}

const FooterBigImage: React.FC<{ src: string; filter?: string }> = ({ src, filter = '' }) => {
  return <Image src={src} w="10rem" h="10rem" my={3} filter={filter} />
}
