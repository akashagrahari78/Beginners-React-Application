import React from 'react'
import banner2 from "../../assets/banner2.png"


const AboutUs2 = () => {
  return (
    <>
    <div className='grid grid-cols-2 gap-4 justify-items-center items-center p-2'>

      {/* left side - content section */}
      <div>
        <div className='flex space-x-4 items-center '>
          <h1 className='text-6xl font-extrabold text-orange-500'>02</h1>
          <div>
            <p className=' mx-3 text-orange-500 font-medium'>Global Fitness</p>
            <h1 className= 'font-extrabold text-4xl mx-2'>About Us</h1>
          </div>
        </div>
        <p className='font-sans leading-relaxed mt-4'>Strength training helps build muscle mass and enhances metabolism.</p>
        <p className='font-sans leading-relaxed mt-6'>Flexibility exercises, such as yoga, increase range of motion and reduce injury risk.</p>
        <button className="mt-6 px-6 py-2 border-2 border-orange-400 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
      
      {/* right side -image section */}
      <div>
 
        <img src= {banner2} alt="Banner of Gym" className = 'rounded-sm drop-shadow-lg' />
      </div>
    </div>
    </>
  )
}

export default AboutUs2
