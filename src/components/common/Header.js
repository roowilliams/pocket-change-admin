import React from 'react'
import styled from 'styled-components'
import { Column } from 'components'
import { Link } from 'react-router-dom'

const Container = styled.header`
  width: 100%;
  display: flex;
  padding: 0.5rem 2rem;
`

const NavList = styled.ul``

const NavItemContainer = styled.li``

const StyledLink = styled(Link)`
  color: ${props => props.theme.actionColor};
`

const Nav = () => (
  <NavList>
    <NavItem to="/home" />
  </NavList>
)

const NavItem = () => (
  <NavItemContainer>
    <StyledLink />
  </NavItemContainer>
)

export const Header = ({ authed }) => {
  return (
    <Container>
      <Column>
        <h1>LOGO</h1>
      </Column>
      <Column>
        <Nav />
      </Column>
    </Container>
  )
}
