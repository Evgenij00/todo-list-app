import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './AddItem.css'

export const AddItem = ( {addTodo} ) => {

  const [title, setTitle] = useState('')

  function changeInput(title) {

    if (title.trim()) {
      addTodo(title)
      setTitle('')
    } else {
      alert('Введите название Todo')
    }
  }

  return (
    <div className='add-item'>
      <div className='add-item__input'>
        <input type='text' placeholder='Добавить новую задачу'
          value={title}
          onChange={ (event) => setTitle(event.target.value) }
        />
      </div>
      <div className='add-item__btn-add'>
        <Button variant="outline-success"
          onClick={ () => changeInput(title) }
        >
          <i className="fas fa-plus"></i>
        </Button>
      </div>
    </div>
  )
}