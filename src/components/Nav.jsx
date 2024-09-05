import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/")
}

  return (
    <div className='w-full bg-white'>
      <button onClick={() => gotohome()}>
        <img src={logo} className='px-20 py-5' /></button>
    </div>
  )
}

export default Nav