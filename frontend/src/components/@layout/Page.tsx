import React from 'react'
import { Container } from './Container'
import { Outlet } from 'react-router-dom'

type PageProps = {
  loginRequired?: boolean
}

export const Page: React.FC<PageProps> = ({ loginRequired, children, ...props }) => {
  return (
    <>
      <Container {...props}>
        <Outlet />
        {children}
      </Container>
    </>
  )
}
