import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Provinces from './views/Provinces';
import { CountDown, NewCountDown } from './views/CountDown';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  const onTimesUp = () => {
    alert('times up')
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <Switch>
          <Route path="/" exact>
            <Provinces />
          </Route>
          <Route path="/timer">
            <CountDown
            // onTimesUp={onTimesUp} 
            />
            <span>------------------------------</span>
            <NewCountDown
            // onTimesUp={onTimesUp}
            />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title='All todos'
              deleteTodo={handleDeteleTodo}
            />
            <input type='text' value={address} onChange={(e) => handleChangeInput(e)} />
            <button onClick={(e) => handleEventClick(e)}>Click me</button>
          </Route>
          <Route path="/blog" exact >
            <Blog />
          </Route>

          <Route path="/blog/:id" >
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog" >
            <AddNewBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
