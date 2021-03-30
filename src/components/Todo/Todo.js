import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

import './Todo.css'

export const Todo = ({ todo, changeStatus, changeTitle, removeItem }) => {

  const [title, setTitle] = useState(todo.title)
  
  let classNames = 'item__text'
  let btn = null

  if (todo.done) {
    classNames += ' item__text--done'
  } else if ( todo.title !== title ) {
    btn = (
      <Button className='item__btn-save' variant="outline-success" size="sm"
        onClick={ () => changeTitle(todo.id, title) }>
        Сохранить
      </Button>
    )
  }

  return (
    <div className='item'>
      <div className='item__content'>
        <div className='item__checkbox-box'>
          <input className='item__checkbox' type='checkbox' 
            checked={todo.done} 
            onChange={ () => changeStatus(todo.id) }/>
        </div>
        
        <div className={classNames}>
          <input type='text'
            readOnly={todo.done}
            value={title} 
            onChange={ (e) => setTitle(e.target.value) }/>
        </div>
      </div>

      {btn}

      <Button className='item__btn-delete' variant="outline-danger" size="sm"
        onClick={ () => removeItem(todo.id) }>
        <i className="far fa-trash-alt"></i>
      </Button>
    </div>
  )
}