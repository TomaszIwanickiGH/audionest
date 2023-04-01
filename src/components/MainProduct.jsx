import React, { useState } from 'react'
import { styles, images } from '../constants'
import { Link } from 'react-router-dom'

const MainProduct = ({ image, price, title, width = 'w-full', padding = 'py-0' }) => {
  const [count, setCount] = useState(1)
  return (
    <section className={`${styles.padding} mx-auto flex flex-col`}>
      <Link to="/">
        <p className="text-veryLightGray hover:text-secondary hover:cursor-pointer">Go Back</p>
      </Link>

      <div id="home" className={`flex lg:flex-row flex-col items-center justify-between relative z-0 lg:mt-10 mt-5`}>
        <div className={`lg:w-[50%] w-full bg-veryVeryLightGray flex justify-center items-center ${padding}`}>
          <img src={image} alt="hero" className={`${width} rounded-md`} />
        </div>
        <div className="flex flex-col lg:items-start items-center lg:mt-0 mt-8">
          <h4 className="text-secondary tracking-[.2rem] mb-2 text-[14px]">NEW PRODUCT</h4>
          <h2 className="text-primary lg:text-[30px] md:text-[20px] text-[20px] font-[500]">{title}</h2>
          <p className="text-veryLightGray leading-6 md:w-[400px] w-[300px] my-4 lg:text-start text-center lg:text-[16px] text-[14px]">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefiness your premium headphone experience by reproducing the balanced depth and precission of studio-quality sound.
          </p>
          <p className="text-primary font-[700] mb-4 flex">
            {price} {count > 1 ? <p className="ml-1">* {count}</p> : <p></p>}
          </p>
          <div className="flex gap-4">
            <div className="bg-veryVeryLightGray px-6 py-3 w-[100px] text-primary font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px] flex justify-between">
              <button onClick={() => (count >= 2 ? setCount(count - 1) : setCount(1))}>-</button>
              {count}
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="bg-secondary px-6 py-3 lg:w-[180px] w-[150px] text-white hover:text-primary hover:font-[500] lg-mb-0 mb-8 lg:text-[16px] text-[14px]">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainProduct
