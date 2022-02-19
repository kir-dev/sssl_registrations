import { Alert, AlertIcon, AlertProps } from '@chakra-ui/react'
import React from 'react'

export const StyledAlert: React.FC<AlertProps> = ({ children, my = 5, ...props }) => {
  return (
    <Alert {...props} my={my} borderRadius="md">
      <AlertIcon />
      {children}
    </Alert>
  )
}
