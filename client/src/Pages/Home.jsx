import React from 'react'
import Hero from '../Components/Landing/Hero'


import Category from '../Components/Landing/Category'
import Pricing from './Pricing'
import Blogs from './Blogs'
import Calculator from './Calculator'
import BestTrainers from '../Components/Landing/BestTrainers'

const Home = () => {
  return (
    <div>
      <Hero /> 
     <BestTrainers/>
      <Category />
         <Calculator/>
      <Blogs/>
 

    </div>
  )
}
export default Home
