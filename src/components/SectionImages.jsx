import React from 'react'
import { styles, images } from '../constants'

const SectionImages = ({ image1, image2, image3 }) => {
  return (
    <section className={`${styles.padding} mx-auto flex lg:flex-row flex-col justify-center gap-6 mt-4`}>
      <div className="flex flex-col gap-6">
        <img src={image1} alt="man" className="rounded-md" />
        <img src={image2} alt="laptop" className="rounded-md" />
      </div>
      <img src={image3} alt="main" className="w-[800px] rounded-md" />
    </section>
  )
}

export default SectionImages
