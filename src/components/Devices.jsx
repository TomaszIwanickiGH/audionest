import React from 'react'
import { data, styles } from '../constants'

const Devices = () => {
  const { devices } = data
  return (
    <section className={`${styles.padding} mx-auto flex xl:flex-row flex-col xl:justify-around items-center xl:gap-16 gap-20 mt-20`}>
      <div className="bg-veryVeryLightGray xl:w-[400px] w-full h-[200px] relative flex flex-col items-center rounded-md">
        <img src={devices[0].image} alt="title" className={`${devices[0].className} absolute top-[-60px]`} />
        <h3 className="mt-28 font-[600] tracking-[.06rem]">{devices[0].title}</h3>
        <div className="mt-3 flex items-center justify-center gap-2">
          <p className="text-[13px] font-[700] hover:text-veryLightGray hover:cursor-pointer text-secondary">{devices[0].text}</p>
          <img src={devices[0].arrow} alt="arrow" className="w-[11px] h-[11px]" />
        </div>
      </div>

      <div className="bg-veryVeryLightGray xl:w-[400px] w-full h-[200px] relative flex flex-col items-center rounded-md">
        <img src={devices[1].image} alt="title" className={`${devices[1].className} absolute top-[-60px]`} />
        <h3 className="mt-28 font-[600] tracking-[.06rem]">{devices[1].title}</h3>
        <div className="mt-3 flex items-center justify-center gap-2">
          <p className="text-[13px] font-[700] hover:text-veryLightGray hover:cursor-pointer text-secondary">{devices[1].text}</p>
          <img src={devices[1].arrow} alt="arrow" className="w-[11px] h-[11px]" />
        </div>
      </div>

      <div className="bg-veryVeryLightGray xl:w-[400px] w-full h-[200px] relative flex flex-col items-center rounded-md">
        <img src={devices[2].image} alt="title" className={`${devices[2].className} absolute top-[-60px]`} />
        <h3 className="mt-28 font-[600] tracking-[.06rem]">{devices[2].title}</h3>
        <div className="mt-3 flex items-center justify-center gap-2">
          <p className="text-[13px] font-[700] hover:text-veryLightGray hover:cursor-pointer text-secondary">{devices[2].text}</p>
          <img src={devices[2].arrow} alt="arrow" className="w-[11px] h-[11px]" />
        </div>
      </div>
    </section>
  )
}

export default Devices
