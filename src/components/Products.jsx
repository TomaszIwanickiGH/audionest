import React from 'react'
import { styles, images } from '../constants'

const Products = () => {
  return (
    <section className={`${styles.padding} mx-auto flex flex-col items-center w-full gap-16`}>
      <div className="w-full bg-secondary rounded-md flex lg:flex-row flex-col items-center justify-around gap-8">
        <img src={images.speakersImage} alt="speaker" className="lg:w-[400px] lg:h-[376px] w-[300px] h-[252px]" />
        <div className="flex flex-col justify-center lg:items-start items-center lg:w-[40%] w-[70%] gap-4 lg:text-start text-center">
          <h2 className="text-white text-[48px] font-[500]">ZX9 SPEAKER</h2>
          <p className="lg:text-[14px] text-[16px] text-veryVeryLightGray lg:w-[70%] w-full">Upgrade to premium spakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className="bg-primary hover:bg-white lg:px-4 lg:py-2 px-8 py-4 lg:w-[150px] w-[180px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px] hover:outline-2 hover:outline-primary hover:outline mt-2">See Product</button>
        </div>
      </div>

      <div className="w-full bg-veryVeryLightGray rounded-md flex lg:flex-row flex-col-reverse justify-around py-6 items-center gap-8">
        <div className="flex flex-col justify-center lg:items-start items-center">
          <h2 className="text-primary lg:text-[28px] text-[32px] font-[500]">ZH7 SPEAKER</h2>
          <button className="bg-veryVeryLightGray lg:px-4 lg:py-2 px-8 py-4 lg:w-[150px] w-[180px] text-primary  hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px] outline-2 outline-veryLightGray hover:outline-primary outline mt-4">See Product</button>
        </div>
        <img src={images.speakersLogo} alt="zh7" className="lg:w-[350px] lg:h-[225px] w-[300px] h-[192px]" />
      </div>

      <div className="w-full rounded-md flex lg:flex-row flex-col lg:gap-8 gap-2">
        <img src={images.yx1Earphones} alt="yx1" className="rounded-md" />
        <div className="flex flex-col items-center justify-center bg-veryVeryLightGray w-full rounded-md pt-8">
          <h2 className="text-primary lg:text-[28px] text-[32px] font-[500]">ZH7 SPEAKER</h2>
          <button className="bg-veryVeryLightGray lg:px-4 lg:py-2 px-8 py-4 lg:w-[150px] w-[180px] text-primary  hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px] outline-2 outline-veryLightGray hover:outline-primary outline mt-4">See Product</button>
        </div>
      </div>
    </section>
  )
}

export default Products
