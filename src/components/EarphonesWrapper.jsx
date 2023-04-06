import React, { useState } from 'react'
import { MainProduct, Devices, MainDescription, SectionImages } from '../components'
import { images, styles } from '../constants'

const EarphonesWrapper = () => {
  const [currentProduct, setCurrentProduct] = useState({ id: 9, price: '$ 99.99', image: images.yx1Earphones, title: 'YX1 EARPHONES' })

  return (
    <section>
      <MainProduct image={currentProduct.image} price={currentProduct.price} title={currentProduct.title} />
      <MainDescription />
      <SectionImages image1={images.EMain1} image2={images.EMain2} image3={images.EMain3} />

      <div className={`${styles.padding} mx-auto flex flex-col mb-[-4rem]`}>
        <h2 className="text-primary text-center text-[36px] font-[500]">YOU MAY ALSO LIKE</h2>
        <div className="flex lg:flex-row flex-col items-center justify-between mt-16 gap-4">
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.EEX1} alt="hex1" className="w-[230px] px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">EDIFIER X11</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 10, price: '$ 89.99', image: images.EEX1, title: 'EDIFIER X11' })
              }}
            >
              See Product
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.EEX2} alt="hex3" className="w-full px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">AIRPODS 28D</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 11, price: '$ 109.99', image: images.EEX2, title: 'AIRPODS 28E' })
              }}
            >
              See Product
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <div className="bg-veryVeryLightGray w-[300px] h-[300px] flex justify-center items-center rounded-md">
              <img src={images.EEX3} alt="hex2" className="w-[230px] px-4 py-6 rounded-md" />
            </div>
            <h3 className="text-primary font-[500] text-[24px]">AIRPODS 3C</h3>
            <button
              className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]"
              onClick={() => {
                window.scrollTo(0, 0)
                setCurrentProduct({ id: 12, price: '$ 149.99', image: images.EEX3, title: 'AIRPODS 3C' })
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

export default EarphonesWrapper
