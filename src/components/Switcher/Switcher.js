import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import './Switcher.css'

export const Switcher = () => {
  return (
    <div className='btn-switcher'>
      <ButtonGroup size="sm">
        <Button>All</Button>
        <Button>Done</Button>
        <Button>In process</Button>
      </ButtonGroup>
    </div>
  )
}