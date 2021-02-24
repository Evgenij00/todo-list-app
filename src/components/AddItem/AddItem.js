import React from 'react'

import Button from 'react-bootstrap/Button'

import './AddItem.css'

export const AddItem = () => {
  return (
    <div className='add-item'>
      <div className='add-item__input'>
        <input type='text' placeholder='Добавить новую задачу' />
      </div>
      <div className='add-item__btn-add'>
        <Button variant="outline-success">
          <i className="fas fa-plus"></i>
        </Button>
      </div>
    </div>
  )
}