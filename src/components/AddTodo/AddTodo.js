import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './AddTodo.css'

export const AddTodo = ( {addTodo} ) => {

  const [title, setTitle] = useState('')

  function onClickAddBtn(title) {

    if ( title.trim() ) {
      addTodo(title)
      setTitle('')
    } else {
      alert('Введите название задачи')
    }
  }

  return (
    <div className='add-item'>
      <div className='add-item__input'>
        <input type='text' placeholder='Добавить новую задачу'
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
        />
      </div>

      <Button className='add-item__btn-add' variant="outline-success"
        onClick={ () => onClickAddBtn(title) }
      >
        <i className="fas fa-plus"></i>
      </Button>
    </div>
  )
}