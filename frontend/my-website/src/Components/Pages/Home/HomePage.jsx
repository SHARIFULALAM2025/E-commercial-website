import * as React from 'react'
import Delivery from './Delevery/Delivery'
import Arrival from './Arrival/Arrival'
import AllProduct from './AllProduct/AllProduct'

const HomePage = () => {
  return <div className="">
    <AllProduct></AllProduct>
    <Arrival></Arrival>
    <Delivery></Delivery>
  </div>
}

export default HomePage
