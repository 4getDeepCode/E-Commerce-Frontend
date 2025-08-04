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
import Contact from './Pages/Product/Contact'
import Denied from './Pages/Denied'
import ProductDescription from './Pages/Product/ProductDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateProduct from './Pages/Product/CreateProduct'


const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/products" element={<ProductList />} ></Route>
        <Route path="/product/description" element={<ProductDescription/>} ></Route>

        <Route path="/contact" element={<Contact />} ></Route>
        <Route  element={<RequireAuth allowedRoles={["ADMIN"]} />} >
        <Route path="/product/create" element={<CreateProduct />} ></Route>

        </Route>


        <Route path="*" element={<NotFound />} ></Route>

      </Routes>




    </>
  )
}

export default App