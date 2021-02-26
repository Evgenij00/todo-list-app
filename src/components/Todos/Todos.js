import React from 'react'

import { Todo } from '../Todo/Todo'

import './Todos.css'

export const Todos = ( {todos, onChangeToggle, onChangeTitleTodo, removeTodo} ) => {
  
  return (
    <ul className='list'>
      {
        todos.map( todo => {
          return (
            <li key={todo.id}>
              <Todo 
                todo={todo} 
                onChangeToggle={onChangeToggle}
                onChangeTitleTodo={onChangeTitleTodo}
                removeTodo={removeTodo}
              />
            </li>
          )
        })
      }
    </ul>
  )
}