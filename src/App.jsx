import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
// import HomeLayout from './Layouts/HomeLayout'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ProductList from './Pages/Product/ProductList'

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/products" element={<ProductList />} ></Route>

         <Route path="/contact" element={<Contact/>} ></Route>


        <Route path="*" element={<NotFound />} ></Route>

      </Routes>




    </>
  )
}

export default App