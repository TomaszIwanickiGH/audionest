import React from 'react'
import { styles } from '../constants'
import { Link } from 'react-router-dom'
import { Form } from '../components'

const CheckoutWrapper = () => {
  return (
    <section className={`${styles.padding} mx-auto flex flex-col bg-veryVeryLightGray`}>
      <Link to="/">
        <p className="text-veryLightGray hover:text-secondary hover:cursor-pointer">Go Back</p>
      </Link>

      <div className="flex lg:flex-row flex-col gap-8 lg:items-start items-center">
        <Form />
      </div>
    </section>
  )
}

export default CheckoutWrapper
