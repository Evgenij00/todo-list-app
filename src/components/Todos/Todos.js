import React from 'react'

import { Todo } from '../Todo/Todo'

import './Todos.css'

export const Todos = () => {
  return (
    <ul className='list'>
      <li>
        <Todo />
      </li>
      <li>
        <Todo />
      </li>
      <li>
        <Todo />
      </li>
    </ul>
  )
}