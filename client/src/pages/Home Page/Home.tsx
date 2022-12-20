import React from 'react'
import Banner from '../../components/Banner'
import Benefits from '../../components/Benefits'
import BestSelling from '../../components/BestSelling'
import FAQs from '../../components/FAQs'
import FeaturedCollections from '../../components/FeaturedCollections'
import Hero from '../../components/Hero'
import Testimonial from '../../components/Testimonial'

const Home = () => {
  return (
    <div className=''>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Banner />
      </div>
      {/* <div className="flex">
        <FeaturedCollections />
      </div> */}
      <div>
        <BestSelling />
      </div>
      <div className="">
        <Benefits />
      </div>
      {/* <div className="">
        <Testimonial />
      </div> */}
      <div className="">
        <FAQs />
      </div>
    </div>
  )
}

export default Home