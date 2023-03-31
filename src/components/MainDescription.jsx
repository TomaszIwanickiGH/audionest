import React from 'react'
import { styles } from '../constants'

const MainDescription = () => {
  return (
    <section className={`${styles.padding} mx-auto flex lg:flex-row flex-col gap-8 lg:mt-4 mt-0`}>
      <div className="flex flex-col lg:items-start items-center gap-8 lg:w-[60%] w-full">
        <h3 className="text-primary text-[30px] font-[500]">FEATURES</h3>
        <p className="text-[14px] text-veryLightGray lg:text-start text-justify">
          Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto
          on/off and pause features ensure that you'll never miss a beat.
        </p>

        <p className="text-[14px] text-veryLightGray lg:text-start text-justify">
          The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surrounding when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery
          life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a moders design aesthetic.
        </p>
      </div>
      <div className="flex flex-col lg:ml-40 ml-0 lg:items-start items-center lg:mt-0 mt-4">
        <h3 className="text-primary text-[30px] font-[500]">IN THE BOX</h3>
        <ul className="flex flex-col gap-4 mt-6">
          <li className="text-veryLightGray">
            <span className="text-secondary mr-4">1x</span>Headphone Unit
          </li>
          <li className="text-veryLightGray">
            <span className="text-secondary mr-3">2x</span>Replacement Earcups
          </li>
          <li className="text-veryLightGray">
            <span className="text-secondary mr-4">1x</span>User Manual
          </li>
          <li className="text-veryLightGray">
            <span className="text-secondary mr-4">1x</span>5m Audio Cable
          </li>
          <li className="text-veryLightGray">
            <span className="text-secondary mr-4">1x</span>Travel Bag
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MainDescription
