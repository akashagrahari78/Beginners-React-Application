import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {


    const {productName} = useParams();
 

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct