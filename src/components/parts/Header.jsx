import React from 'react'
import { Container, NavBar, NavElement } from '../styles/Header';





const Header = () => {
  return (
    <Container>
      <NavBar>
        <NavElement to='/'>Converter</NavElement>
        <NavElement to='rates'>Rates</NavElement>
      </NavBar>
    </Container>
  )
}
export default Header;