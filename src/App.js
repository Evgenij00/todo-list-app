import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { Todos } from './components/Todos/Todos';
import { AddItem } from './components/AddItem/AddItem';
import { Switcher } from './components/Switcher/Switcher';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AddItem />
        <Switcher />
        <Todos />
      </div>
    </div>
  );
}

export default App;
