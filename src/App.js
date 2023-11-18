import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App = () => {

  const [name, setName] = useState('Felix dev')
  const [address, setAddress] = useState('')
  const handleEventClick = () => {
    setName(address)
  }

  const handleChangeInput = (e) => {
    setAddress(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world, I'm {name}
        </p>
        <input type='text' value={address} onChange={(e) => handleChangeInput(e)} />
        <button onClick={() => handleEventClick()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
