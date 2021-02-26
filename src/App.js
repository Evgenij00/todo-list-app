import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { AddItem } from './components/AddItem/AddItem';
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

  function addTodo( title ) {
    const id = new Date().getTime()
    const newTodo = {id, title, done: false }

    setTodos( state => {
      const updateTodos = [...state, newTodo]

      return updateTodos
    })
  }

  function onChangeTitleTodo(todoId, title) {
    setTodos( state => {
      const oldTodo = state.find( todo => todo.id === todoId )
      const newTodo = {...oldTodo, title}

      const index = state.indexOf(newTodo)
      const one = state.slice(0, index)
      const two = state.slice(index + 1)

      const updateTodos = [
        ...one,
        newTodo,
        ...two,
      ]

      return updateTodos
    })
  }

  function onChangeToggle(todoId) {
    setTodos( state => getUpdateTodos(todoId, 'done', state))
  }

  function getUpdateTodos(id, property, list) {

      const findItem = list.find( item => item.id === id )
      const updateItem = {...findItem, [property]: !findItem[property]}

      const index = list.indexOf(findItem)
      const one = list.slice(0, index)
      const two = list.slice(index + 1)

      const updateList = [
        ...one,
        updateItem,
        ...two,
      ]

      return updateList
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AddItem addTodo={addTodo}/>
        <Switcher />
        <Todos 
          todos={todos} 
          onChangeToggle={onChangeToggle}
          onChangeTitleTodo={onChangeTitleTodo}
        />
      </div>
    </div>
  );
}

export default App;
