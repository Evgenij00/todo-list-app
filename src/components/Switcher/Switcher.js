import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import './Switcher.css'

export const Switcher = ({ changeFilterString, status}) => {

  const buttons = [
    {name: 'Все', status: 'all'},
    {name: 'Выполнено', status: 'done'},
    {name: 'В процессе', status: 'inProcess'},
  ]

  const items = buttons.map( (item, index) => {

    let variant = (item.status === status) ? 'primary' : 'outline-primary'

    return (
      <Button className='switcher__btn' variant={variant} 
        key={index} 
        onClick={ () => changeFilterString(item.status) }>
        {item.name}
      </Button>
    )

  })

  return (
    <ButtonGroup className='switcher' size="sm">
      {items}
    </ButtonGroup>
  )
}