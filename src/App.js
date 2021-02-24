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

    setTodos( state => {

      const oldTodo = state.find( todo => todo.id === todoId )

      const newTodo = Object.assign({}, oldTodo)
      newTodo.done = !newTodo.done;

      const one = state.slice(0, todoId)
      const two = state.slice(todoId + 1)

      const updateTodos = [
        ...one,
        newTodo,
        ...two,
      ]

      return updateTodos
    })
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AddItem />
        <Switcher />
        <Todos todos={todos} onChangeToggle={onChangeToggle}/>
      </div>
    </div>
  );
}

export default App;
