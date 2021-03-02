import React from 'react'

import { Todo } from '../Todo/Todo'

import './Todos.css'

export const Todos = ({ todos, changeStatusTodo, changeTitleTodo, removeTodo }) => {
  
  return (
    <ul className='list'>
      {
        todos.map( todo => {
          return (
            <li key={todo.id}>
              <Todo 
                todo={todo} 
                changeStatusTodo={changeStatusTodo}
                changeTitleTodo={changeTitleTodo}
                removeTodo={removeTodo}
              />
            </li>
          )
        })
      }
    </ul>
  )
}