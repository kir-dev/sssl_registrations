import React from 'react'
import { Box, BoxProps, Heading } from '@chakra-ui/react'

type SectionProps = {
  title: string
} & BoxProps

export const Section: React.FC<SectionProps> = ({ title, children, ...props }) => {
  return (
    <Box {...props}>
      <Heading as="h3" size="xl">
        {title}
      </Heading>
      {children}
    </Box>
  )
}
