import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
// import HomeLayout from './Layouts/HomeLayout'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'

const App = () => {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/about" element={<AboutUs/>} ></Route>

      </Routes>

   
    
    
    </>
  )
}

export default App