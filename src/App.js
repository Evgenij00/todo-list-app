import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { AddItem } from './components/AddItem/AddItem';
import { Switcher } from './components/Switcher/Switcher';
import { Search } from './components/Search/Search';
import { StatusPanel } from './components/StatusPanel/StatusPanel';
import { Row } from './components/Row/Row';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const list = [
    {id: 0, title: 'Проснуться', done: false },
    {id: 1, title: 'Позавтракать', done: false },
    {id: 2, title: 'Помыть посуду', done: false },
  ]

  const [todos, setTodos] = useState(list)
  const [searchString, setSearchString] = useState('')
  const [filterString, setFilterString] = useState('all')

  function addItem(title) {
    // TODO
    const id = new Date().getTime()
    const newItem = {id, title, done: false }

    setTodos( state => [...state, newItem])
  }

  function removeItem(id) {
    setTodos( state => {

      const currentItem = state.find( item => item.id === id )
      const index = state.indexOf(currentItem)

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]
    })
  }

  function changeTitle( id, title ) {
    setTodos( state => {
      const currentItem = state.find( item => item.id === id )
      const index = state.indexOf(currentItem)

      const newItem = {...currentItem, title}

      return [
        ...state.slice(0, index),
        newItem,
        ...state.slice(index + 1),
      ]
    })
  }

  function changeStatus(id) {

    setTodos( state => {
      const currentItem = state.find( item => item.id === id )
      const index = state.indexOf(currentItem)

      const newItem = {...currentItem, done: !currentItem.done}

      return [
        ...state.slice(0, index),
        newItem,
        ...state.slice(index + 1),
      ]
    })
  }

  function changeFilterString(string) {
    setFilterString(string)
  }

  function changeSearchString(string) {
    setSearchString(string)
  }

  function filter(list, string) {
    switch(string) {
      case 'all':
        return list
      case 'done':
        return list.filter( item => item.done)
      case 'inProcess':
        return list.filter( item => !item.done )
      default:
        throw new Error('Неверно заданы данные в фильтре!')
    }
  }

  function search(list, string) {
    return list.filter( item => item.title.toLowerCase().includes(string.toLowerCase()))
  }

  const visibleTodos = filter(search(todos, searchString), filterString)

  const doneCount = todos.filter( item => item.done ).length;
  const inProcessCount = todos.length - doneCount;

  const searchPanel = <Search changeSearchString={changeSearchString}/>
  const switcher = <Switcher changeFilterString={changeFilterString} status={filterString}/>

  return (
    <div className="app">
      <Header />
      <div className='wrapper'>
        <StatusPanel 
          doneCount={doneCount} 
          inProcessCount={inProcessCount}/>

        <AddItem addItem={addItem}/>

        <Row left={searchPanel} right={switcher}/>

        <Todos
          todos={visibleTodos} 
          changeStatus={changeStatus}
          changeTitle={changeTitle}
          removeItem={removeItem}/>

      </div>
    </div>
  );
}

export default App;
