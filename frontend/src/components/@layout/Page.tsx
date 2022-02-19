import React from 'react'
import { Container } from './Container'
import { Outlet } from 'react-router-dom'
import { Box, ContainerProps, useBreakpointValue } from '@chakra-ui/react'
import { Footer } from './Footer'

type PageProps = {
  loginRequired?: boolean
}

export const Page: React.FC<PageProps & ContainerProps> = ({ loginRequired, children, ...props }) => {
  return (
    <Box bg={useBreakpointValue({ base: '', md: 'url(/img/left.svg) left top repeat-y, url(/img/right.svg) right top repeat-y' })}>
      <Container {...props}>
        <Outlet />
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
