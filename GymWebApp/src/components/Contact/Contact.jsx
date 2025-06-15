import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-60 p-14 m-8 bg-slate-200 w-auto'>
        <div>
        <span className='text-3xl text-orange-500 font-extrabold'>Sweat now shine later.</span>
        <span className='text-3xl font-extrabold'> Your body is a reflection of <br/> your lifestyle choices.</span>
        </div>
         <button className="px-6 py-2 border-2 border-orange-400 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition duration-300">
          Contact
        </button>
      </div>
      <div className='flex justify-center pt-6 pb-6 mb-4'>
        <span  className='text-3xl font-extrabold mr-5'>Why </span>
        <span className='text-3xl font-extrabold text-orange-500'>Choose </span>
        <span className='text-3xl font-extrabold ml-5'>Us</span>
      </div>
    </div>
  )
}

export default Contact
