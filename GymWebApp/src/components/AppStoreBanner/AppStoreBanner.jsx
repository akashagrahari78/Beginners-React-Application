  import React from 'react'
  import dumbell from "../../assets/dumbell.jpg"
  import app_store from "../../assets/storelogo/app_store.png"
  import play_store from "../../assets/storelogo/play_store.png"

  const AppStoreBanner = () => {
    return (
      <div className='flex justify-center p-6 relative' >
        <img src= {dumbell} alt='dumbell' className='w-full object-cover h-96 rounded-lg' />
        
        <div className='absolute right-16 top-1/2 transform -translate-y-1/2 max-w-md'>
          <h1 className='text-white font-extrabold font-serif text-3xl mb-4'> Get Started With Our App</h1>
          <p className='text-white text-pretty mb-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore delectus, sapiente maiores fuga quod? Aliquid rem at suscipit est.</p>

          <div className='flex gap-4 mt-4'>
            <img  src= {app_store} alt='App Store' className='w-36 cursor-pointer' />
            <img src= {play_store} alt='play_store_logo' className='w-36 cursor-pointer'/>
          </div>

        </div>
      </div>
    )
  }

  export default AppStoreBanner
