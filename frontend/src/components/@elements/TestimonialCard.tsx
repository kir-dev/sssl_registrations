import React from 'react'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import customTheme from '../../theme/customTheme'

export type TestimonialCardProps = {
  name: string
  content: string[]
  avatar: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, content, avatar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        boxShadow="lg"
        maxW="3xl"
        direction={{ base: 'column-reverse', md: 'row' }}
        width="full"
        rounded="xl"
        p={10}
        justifyContent="space-between"
        position="relative"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Flex direction="column" textAlign="left" justifyContent="space-between">
          <Text fontWeight="medium" size="xs" mb={4}>
            {content[0]}
          </Text>
          <Text fontWeight="bold" size="xs">
            {name}
          </Text>
          <ButtonGroup mt={5}>
            <Button color="theme.500" _hover={{ textDecoration: 'underline' }} variant="unstyled" onClick={onOpen}>
              Teljes leírás
            </Button>
          </ButtonGroup>
        </Flex>
        <Avatar src={avatar} height={32} width={32} alignSelf="center" mb={{ base: 10, md: 0 }} ml={{ base: 0, md: 10 }} />
        <QuoteMark side="left" size={3} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name} tapasztalata</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5}>
              {content.map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="theme" mr={3} onClick={onClose}>
              Bezár
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

type QuoteMarkProps = {
  side: 'left' | 'right'
  size: number
}

const QuoteMark: React.FC<QuoteMarkProps> = ({ side, size }) => {
  return (
    <Box
      position="absolute"
      top={side === 'left' ? -size / 2 + 'rem' : undefined}
      bottom={side === 'right' ? -size / 2 + 'rem' : undefined}
      left={side === 'left' ? '3rem' : undefined}
      right={side === 'right' ? '3rem' : undefined}
    >
      {side === 'left' ? (
        <ImQuotesLeft size={size + 'rem'} color={customTheme.colors.theme['500']} />
      ) : (
        <ImQuotesRight size={size + 'rem'} color={customTheme.colors.theme['500']} />
      )}
    </Box>
  )
}
