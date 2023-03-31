import React from 'react'
import { styles, images } from '../constants'

const SectionImages = () => {
  return (
    <section className={`${styles.padding} mx-auto flex lg:flex-row flex-col justify-center gap-6 mt-4`}>
      <div className="flex flex-col gap-6">
        <img src={images.Hman} alt="man" className="rounded-md" />
        <img src={images.Hlaptop} alt="laptop" className="rounded-md" />
      </div>
      <img src={images.Hmain} alt="main" className="w-[800px] rounded-md" />
    </section>
  )
}

export default SectionImages
