import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import './Search.css'

export const Search = ({ onSearchTodo, clearSearch, string }) => {

  const [searchString, setSearchString] = useState('')

  function onClickSearchBtn() {

    if ( searchString.trim() ) {
      onSearchTodo(searchString)
      setSearchString('')
    } else {
      alert('Введите название задачи')
    }
  }

  let viewSearchString = null

  if (string.trim()) {
    viewSearchString = (
      <div className="result">
        <div className='result__text'><span>{string}</span></div>
        <Button className='result__btn-cross' variant="outline-danger" size="sm"
            onClick={ () => clearSearch() }
        >
          <i className="far fa-times-circle"></i>
        </Button>
      </div>
    )
  }

  return (
    <div className='form-search-wrap'>
      <Form className='form-search' inline>
        <FormControl type="text" placeholder="Search Todo" className="mr-sm-2" 
          value={searchString}
          onChange={ (e) => setSearchString(e.target.value) }
        />
        <Button variant="outline-success"
          onClick={ onClickSearchBtn }
        >Search</Button>
      </Form>
      {viewSearchString}
    </div>
  )
}