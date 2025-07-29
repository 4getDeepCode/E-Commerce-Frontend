import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'
import HomePageImage from '../Assets/phone-home.png'

const HomePage = () => {
  return (
    <HomeLayout>

      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">

        <div className='w-1/2 space-y-6'>
          <h1 className='text-4xl font-bold'>Welcome to Our E-Commerce App</h1>
          <p className='text-lg'>Discover a wide range of products at unbeatable prices. Shop now and enjoy exclusive offers!</p>

          <div className="space-x-6 sm:justify-between" >
            <Link to="/products">
              <button className='bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer'>
                Shop Now
              </button>
            </Link>

            <Link to="/contact">
              <button className='border border-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer'>
                Contact US
              </button>
            </Link>

          </div>

        </div>

      <div className= "w-1/2 flex items-center justify-center ">
        <img src={HomePageImage} alt="E-Commerce-Banner" className='w-full h-auto rounded-lg shadow-lg' />

      </div>

      </div>

    </HomeLayout>
    // You can add more components or content here as needed
  )
}

export default HomePage