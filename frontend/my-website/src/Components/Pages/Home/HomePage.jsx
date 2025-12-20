import * as React from 'react'
import Delivery from './Delevery/Delivery'
import Arrival from './Arrival/Arrival'
import AllProduct from './AllProduct/AllProduct'
import Enhance from './Enhance/Enhance'
import Browse from './Browse/Browse'
import Banner from './Banner/Banner'

const HomePage = () => {
  return <div className="space-y-6">
    <Banner></Banner>
    <Browse></Browse>
    <Enhance></Enhance>
    <AllProduct></AllProduct>
    <Arrival></Arrival>
    <Delivery></Delivery>
  </div>
}

export default HomePage
