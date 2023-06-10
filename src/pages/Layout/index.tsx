import React from 'react'
import { Outlet } from 'react-router-dom'
import { Section, Container, SideMenu } from './styles'
import NavBar from '../../components/NavBar'

const Layout = () => {
  return (
    <>
      <Container>
        <SideMenu>
          <NavBar />
        </SideMenu>
        <Section>
          <Outlet />
        </Section>
      </Container>
    </>
  )
}

export default Layout;
