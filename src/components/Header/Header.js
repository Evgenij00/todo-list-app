import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const Header = () => {

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Список задач</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Главная</Nav.Link>
      </Nav>
    </Navbar>
  )
}