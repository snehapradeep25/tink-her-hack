import React from 'react'
import './Home.css'
import Header from '../../components/header/header'
import Explore from '../../components/Explore/Explore'
import { useState } from 'react'


const Home = () => {
  const [category,setCategory] =useState("All");
  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
