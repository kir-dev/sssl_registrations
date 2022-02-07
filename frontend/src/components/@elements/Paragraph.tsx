import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'

export const Paragraph: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text marginTop={5} {...props}>
      {children}
    </Text>
  )
}
