import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './Todo.css'

export const Todo = ({ todo, changeStatusTodo, changeTitleTodo, removeTodo }) => {

  const [title, setTitle] = useState(todo.title)
  
  let classes = 'item__text'
  let btn = null

  if (todo.done) {
    classes += ' item__text_done'
  } else if ( todo.title !== title ) {
    btn = (
      <Button variant="outline-success" size="sm"
        onClick={ () => changeTitleTodo(todo.id, title) } 
      >Сохранить</Button>
    )
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
            onChange={ (e) => setTitle(e.target.value) }
          />
          {btn}
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