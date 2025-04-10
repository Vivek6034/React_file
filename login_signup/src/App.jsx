import React from 'react'
import Login from './login'
import Signup from './signup'
import Home from './home'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />

        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </>
  )
}

export default App
