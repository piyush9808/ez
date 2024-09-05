import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home'
import CreateChallenge from './pages/CreateChallenge';


const App = () => {
  return (
    <div className=''>
      <Home/>
      <CreateChallenge />
    </div>
  )
}

export default App