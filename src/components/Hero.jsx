import React from 'react'
import { images } from '../constants'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="w-full bg-primary">
      <div className={`sm:px-24 px-8 mx-auto h-[1.5px] bg-lightGray w-[88%]`}></div>
      <section id="home" className={`sm:px-24 px-8 mx-auto flex lg:flex-row flex-col-reverse justify-between items-center relative z-0 mt-4`}>
        <div className="flex flex-col lg:items-start items-center lg:mt-0 mt-8">
          <h4 className="text-lightGray tracking-[.4rem] mb-2">NEW PRODUCT</h4>
          <h2 className="text-white lg:text-[60px] md:text-[40px] text-[20px]">
            XX99 MARK II <br className="lg:block hidden" />
            HEADPHONES
          </h2>
          <p className="text-veryLightGray leading-6 md:w-[400px] w-[300px] my-4 lg:text-start text-center lg:text-[16px] text-[14px] md:mb-8">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className="bg-secondary hover:bg-white px-8 py-4 lg:w-[180px] w-[150px] text-white hover:text-secondary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]">
            <Link to="/headphones">See Product</Link>
          </button>
        </div>
        <div className="w-[50%]">
          <img src={images.headphonesImage} alt="hero" />
        </div>
      </section>
    </section>
  )
}

export default Hero
