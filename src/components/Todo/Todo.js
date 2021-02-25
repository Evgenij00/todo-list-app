import React from 'react'

import Button from 'react-bootstrap/Button'

import './Todo.css'

export const Todo = ( {todo, onChangeToggle, onClickBtnChangeTodo} ) => {
  
  let classes = 'item__text'

  if (todo.done) {
    classes += ' item__text_done'
  }

  let btns = ''

  if (!todo.readOnly) {
    btns = <>
      <Button className='item__btn-ok' variant="outline-success">Ok</Button>
      <Button className='item__btn-cancel' variant="outline-secondary">cancel</Button>
    </>
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
          <input type='text' defaultValue={todo.name}/>
        </div>

        {btns}
      </div>

      <Button 
        className='item__btn-change' 
        variant="outline-primary" 
        onClick={ () => onClickBtnChangeTodo(todo.id) }
      >
        <i className="fas fa-pencil-alt"></i>
      </Button>
    
      <Button 
        className='item__btn-delete' 
        variant="outline-danger"
      >
        <i className="far fa-trash-alt"></i>
      </Button>

    </div>
  )
}