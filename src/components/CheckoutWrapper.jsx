import React, { useState } from 'react'
import { styles, images } from '../constants'
import { Link } from 'react-router-dom'
import { Form } from '../components'

const CheckoutWrapper = ({ displayProducts }) => {
  const [summary, setSummary] = useState([
    {
      id: 1,
      image: images.HEX1,
      title: 'XX99 MK I',
      price: '$ 299.99',
      amount: '1',
    },
    {
      id: 2,
      image: images.HEX2,
      title: 'XX99 MK II',
      price: '$ 199.99',
      amount: '2',
    },
  ])
  return (
    <section className={`${styles.padding} mx-auto flex flex-col bg-veryVeryLightGray`}>
      <Link to="/">
        <p className="text-veryLightGray hover:text-secondary hover:cursor-pointer">Go Back</p>
      </Link>

      <div className="flex lg:flex-row flex-col gap-8 lg:items-start items-center">
        <Form />
        <div className="bg-white rounded-lg flex flex-col gap-4 sm:px-8 px-6 sm:py-8 py-6 mt-8 min-w-[400px]">
          <h3 className="text-primary font-[500] text-[24px]">SUMMARY</h3>

          {displayProducts.map((product) => (
            <div className="flex gap-4">
              <div className="flex justify-center items-center bg-veryVeryLightGray w-[80px] h-[80px] rounded-lg">
                <img src={product.image} alt="img" className="w-[65px] h-[55px]" />
              </div>
              <div className="flex flex-1 justify-between mt-2">
                <div>
                  <p className="font-[600] text-[15px] text-primary">{product.title}</p>
                  <p className="font-[500] text-[14px] text-veryLightGray mt-2">{product.price}</p>
                </div>
                <p className="font-[500] text-[15px] text-veryLightGray">x{product.amount}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-6">
            <p className="text-[15px] text-veryLightGray">TOTAL</p>
            <p className="text-[15px] text-primary font-[600]">$ 5,346</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[15px] text-veryLightGray">SHIPPING</p>
            <p className="text-[15px] text-primary font-[600]">$ 20</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-[15px] text-veryLightGray">GRAND TOTAL</p>
            <p className="text-[15px] text-secondary font-[600]">$ 5,366</p>
          </div>

          <button className="bg-secondary px-6 py-3 w-full text-white hover:text-primary hover:font-[500] lg:text-[16px] text-[14px] mt-4" onClick={() => console.log(displayProducts)}>
            Continue & Pay
          </button>
        </div>
      </div>
    </section>
  )
}

export default CheckoutWrapper
