import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import AboutMainImage from '../Assets/miA5.webp'
import moto from '../Assets/moto.jpeg'
import newphone from '../Assets/newphone.jpeg'
import vivoy19 from '../Assets/vivoy19.webp'
import y400 from '../Assets/y400.webp'
function AboutUs() {
    return (

        <HomeLayout>
            <div className='pl-20 pt-20 flex flex-col text-white'>
                <div className='flex items-center gap-5 mx-10'>
                    <section className='w-1/2 space-y-10 ' >
                        <h1 className=' text-4xl font-semibold text-yellow-500'>Beleive in Best</h1>
                        <p className='text-xl text-gray-200'>  Lorem ipsum dolor  Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Explicabo facilis similique, blanditiis saepe tempora
                            quas voluptate repellendus magnam vitae e
                            aque. sit amet consectetur adipisicing elit. Illo, dolorum.</p>
                    </section>

                    <div className='w-1/2'>

                        <img
                            id='test1'
                            src={AboutMainImage}
                            alt="about-img"
                            className='rounded-2xl drop-shadow-26xl' />


                    </div>

                </div>


                <div className="carousel w-1/2 m-auto my-16">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='flex  flex-col justify-center items-center gap-5 px-[15%]'>
                            <img
                                src={moto}
                                className="w-40 rounded-full border-2 border-yellow-400" />
                                <p className='text-xl text-gray-200'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum.</p>
                                <h1 className='text-2xl font-semibold'>moto</h1>
                            <div className=" absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='flex  flex-col justify-center items-center gap-5 px-[15%]'>
                            <img
                                src={vivoy19}
                                className="w-40 rounded-full border-2 border-yellow-400" />
                                <p className='text-xl text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum.</p>
                                <h1 className='text-2xl font-semibold'>Vivo y19</h1>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                       <div className='flex  flex-col justify-center items-center gap-5 px-[15%]'>
                            <img
                                src={newphone}
                                className="w-40 rounded-full border-2 border-yellow-400" />
                                <p className='text-xl text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum.</p>
                                <h1 className='text-2xl font-semibold'>New Phone</h1>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex  flex-col justify-center items-center gap-5 px-[15%]'>
                            <img
                                src={y400}
                                className="w-40 rounded-full border-2 border-yellow-400" />
                                <p className='text-xl text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum.</p>
                                <h1 className='text-2xl font-semibold'>Vivo y400</h1>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </HomeLayout>


    )
}

export default AboutUs