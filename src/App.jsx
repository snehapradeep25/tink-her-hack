import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Admin from './pages/home/AdminPanel/Admin'
import NewestAdditions from './pages/home/AdminPanel/NewAddition'
import Header from './components/header/header'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
