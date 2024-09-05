import React from 'react'
import Home from './pages/Home'
import CreateChallenge from './pages/CreateChallenge';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HackathonDetails from './components/HackathonDetails';
import EditHackathon from './components/EditHackathon';


const App = () => {
  return (
    <div className=''>
      <Router>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/CreateChallenge" element={<CreateChallenge/>} />
            <Route path="/hackathon/:id" element={<HackathonDetails />} />
            <Route path="/hackathon/:id/edit" element={<EditHackathon />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App