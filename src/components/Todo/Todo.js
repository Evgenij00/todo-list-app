import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './Todo.css'

export const Todo = ( {todo, onChangeToggle, onChangeTitleTodo, removeTodo} ) => {

  const [title, setTitle] = useState(todo.title)
  
  let classes = 'item__text'

  if (todo.done) {
    classes += ' item__text_done'
  }

  return (
    <div className='item'>
      <div className='item__content'>
        <div className='item__checkbox'>
          <input type='checkbox' 
            checked={todo.done} 
            onChange={ () => onChangeToggle(todo.id) }
          />
        </div>
        
        <div className={classes}>
          <input type='text' 
            value={title} 
            onChange={ (event) => setTitle(event.target.value) }
          />
        </div>
      </div>

      <Button className='item__btn-delete' variant="outline-danger"
        onClick={ () => removeTodo(todo.id) }
      >
        <i className="far fa-trash-alt"></i>
      </Button>
    </div>
  )
}