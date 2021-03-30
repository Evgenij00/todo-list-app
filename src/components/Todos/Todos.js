import React from 'react'

import { Todo } from '../Todo/Todo'

import './Todos.css'

export const Todos = ( props ) => {

  const {todos, ...configTodo} = props;

  const items = todos.map( todo => {

    return (
      <li key={todo.id}>
        <Todo todo={todo} {...configTodo} />
      </li>
    )
  })
  
  return (
    <ul className='list'>
      { items }
    </ul>
  )
}