import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const Header = ({ onSearchTodo }) => {

  const [searchString, setSearchString] = useState('')

  function onClickSearchBtn() {

    if ( searchString.trim() ) {
      onSearchTodo(searchString)
      setSearchString('')
    } else {
      alert('Введите название задачи')
    }
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">To-do List App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search Todo" className="mr-sm-2" 
          value={searchString}
          onChange={ (e) => setSearchString(e.target.value) }
        />
        <Button variant="outline-light" 
          onClick={ onClickSearchBtn }
        >Search</Button>
      </Form>
    </Navbar>
  )
}