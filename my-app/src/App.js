import './App.css';
import React from 'react'
import ChangeName from './components/ClassComponents/ChangeName';
import ChangeName1 from './components/FunctionalComponents/ChangeName'


const App = () => {
  return (
    <div className='App'>
     <ChangeName />
     <ChangeName1 />
    </div>
  )
}

export default App
