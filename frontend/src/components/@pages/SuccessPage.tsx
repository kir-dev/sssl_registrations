import React from 'react'
import { Page } from '../@layout/Page'
import { ButtonGroup, Heading, SlideFade, Text, VStack } from '@chakra-ui/react'
import { ArrowBackIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { LinkButton } from '../@elements/LinkButton'

export const SuccessPage: React.FC = () => {
  return (
    <Page>
      <VStack spacing={20} maxW="xl" mx="auto" mt={10} bgColor="white" p={10} boxShadow="lg" borderRadius="xl">
        <Heading as="h1" size="xl" mt={0}>
          Pacsi!
        </Heading>
        <Text fontSize="xl" color="gray.500" textAlign="center">
          Jelentkezésedet megkaptuk, hamarosan jelentkezünk!
        </Text>
        <SlideFade in offsetY={10}>
          <CheckCircleIcon boxSize={40} color="green.400" />
        </SlideFade>
        <ButtonGroup>
          <LinkButton href="/" size="lg" leftIcon={<ArrowBackIcon />}>
            Főoldal
          </LinkButton>
        </ButtonGroup>
      </VStack>
    </Page>
  )
}
