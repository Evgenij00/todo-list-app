import React from 'react'

import './Todo.css'

import Button from 'react-bootstrap/Button'

export const Todo = ({todo}) => {
  return (
    <div className='item'>
      <div className='item__content'>
        <div className='item__checkbox'>
          <input type='checkbox' />
        </div>
        
        <div className='item__text'>
          <input type='text' defaultValue={todo.name}/>
        </div>

        {/* <div className='item__btn-ok'>
          <Button variant="outline-success">
            Ok
          </Button>
        </div>

        <div className='item__btn-cancel'>
          <Button variant="outline-secondary">
            cancel
          </Button>
        </div> */}
      </div>
      <div className='item__btn-change'>
        <Button variant="outline-primary">
          <i className="fas fa-pencil-alt"></i>
        </Button>
      </div>
      <div className='item__btn-delete'>
        <Button variant="outline-danger">
          <i className="far fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  )
}