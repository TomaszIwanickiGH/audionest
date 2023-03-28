import React from 'react'
import { styles, images } from '../constants'

const About = () => {
  return (
    <section className={`${styles.padding} mx-auto flex xl:flex-row flex-col-reverse mb-8 mt-4`}>
      <div className="flex flex-col justify-center xl:items-start items-center">
        <h2 className="text-primary font-[600] lg:text-[42px] text-[24px] lg:text-start text-center mt-8">
          BRINGING YOU THE <br className="xl:block hidden" />
          <span className="text-secondary">BEST</span> AUDIO GEAR
        </h2>
        <p className="mt-4 text-veryLightGray xl:w-[60%] w-full">
          Located at the heart of New York City. Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms avaiable for you to browse and experience a wide range of our products. Stop by our store to
          meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={images.manPhoto} alt="man" className="rounded-md" />
    </section>
  )
}

export default About
