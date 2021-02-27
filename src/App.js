import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { AddTodo } from './components/AddTodo/AddTodo';
import { Switcher } from './components/Switcher/Switcher';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const list = [
    {id: 0, title: 'Проснуться', done: false },
    {id: 1, title: 'Позавтракать', done: false },
    {id: 2, title: 'Помыть посуду', done: false },
  ]

  const [todos, setTodos] = useState(list)
  const [searchString, setSearchString] = useState('')

  function addTodo(title) {
    const id = new Date().getTime()
    const newTodo = {id, title, done: false }

    setTodos( state => {
      const updateTodos = [...state, newTodo]

      return updateTodos
    })
  }

  function removeTodo(todoId) {
    setTodos( state => {

      const currentTodo = state.find( todo => todo.id === todoId )

      const index = state.indexOf(currentTodo)
      const onePart = state.slice(0, index)
      const twoPart = state.slice(index + 1)

      const updateTodos = [
        ...onePart,
        ...twoPart,
      ]

      return updateTodos
    })
  }

  function changeTitleTodo( todoId, title ) {
    setTodos( state => {
      const currentTodo = state.find( todo => todo.id === todoId )
      const newTodo = {...currentTodo, title}

      const index = state.indexOf(currentTodo)
      const onePart = state.slice(0, index)
      const twoPart = state.slice(index + 1)

      const updateTodos = [
        ...onePart,
        newTodo,
        ...twoPart,
      ]

      return updateTodos
    })
  }

  function changeStatusTodo(todoId) {

    setTodos( state => {
      const currentTodo = state.find( item => item.id === todoId )
      const newTodo = {...currentTodo, done: !currentTodo.done}

      const index = state.indexOf(currentTodo)
      const onePart = state.slice(0, index)
      const twoPart = state.slice(index + 1)

      const updateTodos = [
        ...onePart,
        newTodo,
        ...twoPart,
      ]

      return updateTodos
    })
  }

  function onSearchTodo(string) {
    setSearchString(string)
  }

  function searchTodo(subtitle) {
    const searchTodos = todos.filter( todo => todo.title.toLowerCase().includes(subtitle.toLowerCase()))

    return searchTodos
  }

  const searchTodos = (searchString.trim()) ? searchTodo(searchString) : todos

  return (
    <div className="App">
      <Header onSearchTodo={onSearchTodo}/>
      <div className='container'>
        <AddTodo addTodo={addTodo}/>
        <Switcher />
        <Todos 
          todos={searchTodos} 
          changeStatusTodo={changeStatusTodo}
          changeTitleTodo={changeTitleTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
