import React, { useState } from 'react'
import { MainProduct, Devices, MainDescription, SectionImages } from '../components'
import { images, styles } from '../constants'

const SpeakersWrapper = () => {
  const [currentProduct, setCurrentProduct] = useState({ id: 5, price: '$ 199.99', image: images.SEX1, title: 'ZH7 SPEAKER' })
  return (
    <section>
      <MainProduct id={currentProduct.id} image={currentProduct.image} price={currentProduct.price} title={currentProduct.title} width="500px" padding="pt-8 pb-16" />
      <MainDescription />
      <SectionImages image1={images.SMain2} image2={images.SMain1} image3={images.SEX2} />

      <div className={`${styles.padding} mx-auto flex flex-col mb-[-4rem]`}>
        <h2 className="text-primary text-center text-[36px] font-[500]">YOU MAY ALSO LIKE</h2>
        <div className="flex lg:flex-row flex-col items-center justify-between mt-16 gap-4">
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.SEX3} alt="hex1" className="w-[230px] px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">ZY 21</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 6, price: '$ 229.99', image: images.SEX3, title: 'ZY 21' })
              }}
            >
              See Product
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.SEX1} alt="hex3" className="w-full px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">ZH 7</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 7, price: '$ 199.99', image: images.SEX1, title: 'ZH7 SPEAKER' })
              }}
            >
              See Product
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.speakersLogo} alt="hex2" className="w-[230px] px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">X 25 GEN 2</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 8, price: '$ 299.99', image: images.speakersLogo, title: 'X 25 GEN 2' })
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      <Devices />
    </section>
  )
}

export default SpeakersWrapper
