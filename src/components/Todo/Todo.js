import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './Todo.css'

export const Todo = ({ todo, changeStatusTodo, changeTitleTodo, removeTodo }) => {

  const [title, setTitle] = useState(todo.title)

  function onChangeTitleTodo(title) {
    setTitle(title)
    changeTitleTodo(todo.id, title)
  }
  
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
            onChange={ () => changeStatusTodo(todo.id) }
          />
        </div>
        
        <div className={classes}>
          <input type='text'
            readOnly={todo.done}
            value={title} 
            onChange={ (e) => onChangeTitleTodo(e.target.value) }
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