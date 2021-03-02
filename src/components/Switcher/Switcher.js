import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import './Switcher.css'

export const Switcher = ({ onFilterTodo, doneCount, processCount }) => {

  const statuses = [
    {name: 'All', status: 'all'},
    {name: 'Done', status: 'done'},
    {name: 'In process', status: 'process'},
  ]

  const btns = statuses.map( (item, index) =>  <Button key={index} onClick={ () => onFilterTodo(item.status) }>{item.name}</Button>)

  return (
    <div className='switcher'>
      <ButtonGroup className='switcher__btns' size="sm">
        {btns}
      </ButtonGroup>
      <div className='switcher__view'>done <span>{doneCount}</span> / in process <span>{processCount}</span></div>
    </div>
  )
}