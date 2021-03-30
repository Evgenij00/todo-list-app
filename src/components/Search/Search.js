import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import './Search.css'

export const Search = ({ changeSearchString }) => {

  const [searchString, setSearchString] = useState('')

  function handleChange(event) {

    const {value} = event.target

    setSearchString(value)

    changeSearchString(value)

  }

  return (
    <Form inline>
      <FormControl type="text" placeholder="Поиск..." className="mr-sm-2" 
        value={searchString}
        onChange={ handleChange }/>
    </Form>
  )
}