import React from 'react';
import './App.css';
import Header from './components/header'
import User from './components/User';
import Tasks from'./components/Tasks'
function App() {
  return (
    <div className="App">
      
      <div className='container'>
      <Header></Header>

        <div className='content'>
        <User></User>
        <Tasks></Tasks>
        </div>
        <img className='add' src="https://img.icons8.com/ultraviolet/64/000000/plus.png" alt='add'/>
      </div>
    </div>
  );
}

export default App;
