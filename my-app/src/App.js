import './App.css';
import React, { createContext } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom';
import {MyClock} from './components/ClassComponents/MyClock'


export const MyContext = createContext()
const App = () => {
  return (
    <div className='App'>
     <BrowserRouter>
      <Router>
        <Route path='/' element={<MyClock />}/>
        <Route index element={}/>
      </Router>
     </BrowserRouter>
    </div>
  )
}

export default App
