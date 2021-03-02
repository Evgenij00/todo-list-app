import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import './Switcher.css'

export const Switcher = ({onFilterTodo}) => {

  const statuses = [
    {name: 'All', status: 'all'},
    {name: 'Done', status: 'done'},
    {name: 'In process', status: 'process'},
  ]

  const btns = statuses.map( (item, index) =>  <Button key={index} onClick={ () => onFilterTodo(item.status) }>{item.name}</Button>)

  return (
    <div className='btn-switcher'>
      <ButtonGroup size="sm">
        {btns}
      </ButtonGroup>

    </div>
  )
}