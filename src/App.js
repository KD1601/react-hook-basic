import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Provinces from './views/Provinces';

const App = () => {

  const [name, setName] = useState('Felix dev')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 'todo1', title: 'felix dev', type: 'felix'
    },
    {
      id: 'todo2', title: 'react hook',
    }
  ])

  useEffect(() => {
    // alert('run useEffect!')
  }, [])

  const handleEventClick = (e) => {
    if (!address) {
      alert('empty input')
      return
    }
    let id = Math.floor((Math.random() * 10000) + 1)
    setTodos([...todos, { id: id, title: address }])
    setAddress('')
  }

  const handleChangeInput = (e) => {
    setAddress(e.target.value)
  }

  const handleDeteleTodo = (id) => {
    let todosCopy = todos
    todosCopy = todosCopy.filter(todo => todo.id !== id)
    setTodos(todosCopy)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world, I'm {name}
        </p>
        <Provinces />
        {/* <Todo
          todos={todos}
          title='All todos'
          deleteTodo={handleDeteleTodo}
        />

        <Todo
          todos={todos.filter(item => item.type === 'felix')}
          title={`Felix todo`}
          deleteTodo={handleDeteleTodo}

        />
        <input type='text' value={address} onChange={(e) => handleChangeInput(e)} />
        <button onClick={(e) => handleEventClick(e)}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
