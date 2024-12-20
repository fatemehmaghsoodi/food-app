import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default App
