import React from 'react'
import { Container } from './Container'
import { Outlet } from 'react-router-dom'
import { Box, useBreakpointValue } from '@chakra-ui/react'

type PageProps = {
  loginRequired?: boolean
}

export const Page: React.FC<PageProps> = ({ loginRequired, children, ...props }) => {
  return (
    <Box bg={useBreakpointValue({ base: '', md: 'url(/img/left.svg) left top repeat-y, url(/img/right.svg) right top repeat-y' })}>
      <Container {...props}>
        <Outlet />
        {children}
      </Container>
    </Box>
  )
}
