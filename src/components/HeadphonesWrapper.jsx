import React, { useState } from 'react'
import { MainProduct, Devices, MainDescription } from '../components'
import { images } from '../constants'

const HeadphonesWrapper = () => {
  const [currentProduct, setCurrentProduct] = useState({ price: '$ 399.99', image: images.Hmain })
  return (
    <section>
      <MainProduct image={currentProduct.image} price={currentProduct.price} />
      <MainDescription />
      <Devices />
    </section>
  )
}

export default HeadphonesWrapper
