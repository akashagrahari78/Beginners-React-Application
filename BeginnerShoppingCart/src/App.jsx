import React from 'react'
import Page from './components/ProductDisplay'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductDisplay from './components/ProductDisplay'
import SingleProduct from './components/SingleProduct'

const App = () => {
  return (
    <div >
      {/* <Page/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element = {<ProductDisplay/>} />
        <Route path='/:productName' element = {<SingleProduct/>} />
      </Routes>
    </div>
  )
}

export default App
