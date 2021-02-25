import React from 'react'

import { Todo } from '../Todo/Todo'

import './Todos.css'

export const Todos = ( {todos, onChangeToggle, onClickBtnChangeTodo} ) => {
  return (
    <ul className='list'>
      {
        todos.map( todo => {
          return (
            <li key={todo.id}>
              <Todo 
                todo={todo} 
                onChangeToggle={onChangeToggle}
                onClickBtnChangeTodo={onClickBtnChangeTodo}
              />
            </li>
          )
        })
      }
    </ul>
  )
}