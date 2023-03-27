import React from 'react'
import { data, styles } from '../constants'

const Device = ({ title, text, arrow }) => (
  <div className="bg-veryVeryLightGray w-[300px] h-[200px] relative flex flex-col items-center z-[-5]">
    <h3 className="mt-28 font-[600] tracking-[.06rem]">{title}</h3>
    <div className="mt-3 flex items-center justify-center gap-2">
      <p className="text-[13px] font-[700] hover:text-veryLightGray hover:cursor-pointer text-secondary">{text}</p>
      <img src={arrow} alt="arrow" className="w-[11px] h-[11px]" />
    </div>
  </div>
)

const Devices = () => {
  return (
    <div className={`${styles.padding} mx-auto flex flex-wrap justify-around mt-12`}>
      {data.devices.map((device, index) => (
        <div key={index} className="relative z-10">
          <img src={device.image} alt="title" className={`${device.className} absolute top-[-60px]`} />
          <Device {...device} />
        </div>
      ))}
    </div>
  )
}

export default Devices
