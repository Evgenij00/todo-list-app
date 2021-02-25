import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { AddItem } from './components/AddItem/AddItem';
import { Switcher } from './components/Switcher/Switcher';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const list = [
    {id: 0, name: 'Проснуться', done: false, readOnly: true },
    {id: 1, name: 'Позавтракать', done: false, readOnly: true },
    {id: 2, name: 'Помыть посуду', done: false, readOnly: true },
  ]

  const [todos, setTodos] = useState(list)

  function onChangeToggle(todoId) {
    setTodos( state => getUpdateTodos(todoId, 'done', state))
  }

  function onClickBtnChangeTodo(todoId) {
    setTodos( state => getUpdateTodos(todoId, 'readOnly', state))
  }

  function getUpdateTodos(id, property, list) {
      const findItem = list.find( item => item.id === id )
      const updateItem = {...findItem, [property]: !findItem[property]}

      const one = list.slice(0, id)
      const two = list.slice(id + 1)

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
        <AddItem />
        <Switcher />
        <Todos 
          todos={todos} 
          onChangeToggle={onChangeToggle}
          onClickBtnChangeTodo={onClickBtnChangeTodo}
        />
      </div>
    </div>
  );
}

export default App;
