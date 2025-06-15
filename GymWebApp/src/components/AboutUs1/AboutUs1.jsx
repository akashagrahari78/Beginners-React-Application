import React from 'react'
import PushUp from "../../assets/pushups.png"

const AboutUs1 = () => {
  return (
    <> 
    <div className='flex items-center justify-evenly px-10 py-16 bg-slate-200 -z-30'>
      {/* left side photo*/}  
      <div className='relative'> 
        <div className='absolute top-5 left-5 w-full h-full bg-orange-500 z-0 rounded-sm drop-shadow-2xl'></div>
        <img src= {PushUp} alt='Pushups Image' className='w-[400px] rounded-sm drop-shadow-lg' />
      </div>

      {/* right side content */}
      <div >

          <div className='flex items-center space-x-4'>
            <h1 className='text-6xl font-extrabold text-orange-500'>01</h1>
            <div >
             <p className='text-orange-500 font-medium'>Global Fitness</p>
             <h1 className='font-extrabold text-4xl'>About Us</h1>
            </div>

          </div>
        
          <p className='font-sans leading-relaxed mt-4'>Fitness is a vital aspect of a healthy lifestyle.It encompasses physical activity, proper nutrition, and mental well-being.</p>

          <p  className='font-sans leading-relaxed mt-6'>Regular exercise strengthens muscles and improves cardiovascular health.</p>
          <button className="mt-6 px-6 py-2 border-2 border-orange-400 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition duration-300">
          Get Started
          </button>
        
      </div>
    </div>
    </>
  )
}

export default AboutUs1
