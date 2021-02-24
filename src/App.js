import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { AddItem } from './components/AddItem/AddItem';
import { Switcher } from './components/Switcher/Switcher';

function App() {

  const list = [
    {id: 1, name: 'Проснуться', done: false, readOnly: true },
    {id: 2, name: 'Позавтракать', done: false, readOnly: true },
    {id: 3, name: 'Помыть посуду', done: false, readOnly: true },
  ]

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AddItem />
        <Switcher />
        <Todos todos={list}/>
      </div>
    </div>
  );
}

export default App;
