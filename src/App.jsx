import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Admin from './pages/home/AdminPanel/Admin'
import NewestAdditions from './pages/home/AdminPanel/NewestAddition'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/NewestAdditions' element={<NewestAdditions />} />
      </Routes>
    
    </div>
  )
}

export default App
