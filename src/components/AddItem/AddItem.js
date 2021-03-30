import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './AddItem.css'

export const AddItem = ({ addItem }) => {

  const [title, setTitle] = useState('')

  function hendleSubmit(e) {

    e.preventDefault()

    if ( title.trim() ) {
      
      addItem(title)
      setTitle('')
    } else {
      alert('Введите название задачи')
    }
  }

  return (
    <form className='add-item app__add-item' onSubmit={hendleSubmit}>
      <div className='add-item__input-box'>
        <input className='add-item__input' type='text' placeholder='Добавить новую задачу'
          value={title}
          onChange={ (e) => setTitle(e.target.value) }
        />
      </div>

      <Button className='add-item__btn' type='submit' variant="outline-success" size="sm">
        Добавить
      </Button>
    </form>
  )
}