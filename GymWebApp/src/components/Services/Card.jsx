import React from 'react'

const Card = ({title, price, features, duration}) => {
  return (
    <>
     <div className='group p-6 pt-10 rounded-xl bg-slate-200 h-[500px] hover:bg-orange-100'>
        <div >
            <h2 className= "text-2xl font-bold text-center mb-4">{title} </h2>
            <p className="text-orange-500 text-3xl font-semibold text-center"> ${price} </p>
        </div>

        <div>
         {features.map((item, index)=>(
          <p className='my-4 text-center space-y-2 '  key={index}> {item} </p>
         ))}
            {/* <p  className="my-4 text-center space-y-2">Monthly access to fitness area.</p>
            <p  className="my-4 text-center space-y-2">Training sessions on demand.</p>
            <p  className="my-4 text-center space-y-2">Personal trainer on demand.</p>
            <p  className="my-4 text-center space-y-2">Live classes on demand.</p> */}
        </div>

        <div className="font-bold text-center mb-4 mt-6"> Duration: {duration} month </div>

        <div className='text-center'>
          <button className='bg-orange-500 text-white px-4 py-2 rounded mt-6  group-hover:scale-110 duration-300'>Learn More</button>
        </div>
     </div> 
    </>
  )
}

export default Card
