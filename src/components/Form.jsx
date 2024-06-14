import React from 'react';

import { motion } from 'framer-motion';

const Form = () => {
  return (
    <div
      // initial={{ opacity: 0, x: '-30%' }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1.5 }}
      className="flex flex-col bg-white sm:px-16 px-8 sm:py-12 py-6 rounded-lg mt-8 lg:max-w-[900px] max-w-[400px]"
    >
      <h3 className="text-primary text-[32px] font-[500]">CHECKOUT</h3>
      <form className="flex flex-col mt-6">
        <p className="text-secondary text-[14px] font-[500]">BILLING DETAILS</p>
        <div className="flex flex-wrap gap-8 mt-4">
          <label
            htmlFor="name"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">Name</p>
            <input
              type="text"
              id="name"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="Alexis Ward"
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">Email Address</p>
            <input
              type="email"
              id="email"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="alexis@example.com"
            />
          </label>
          <label
            htmlFor="number"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">Phone Number</p>
            <input
              type="tel"
              id="number"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="111 222 333"
            />
          </label>
        </div>

        <p className="text-secondary text-[14px] font-[500] mt-16">SHIPPING INFO</p>
        <div className="flex flex-wrap gap-8 mt-4">
          <label
            htmlFor="address"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">Address</p>
            <input
              type="text"
              id="zip"
              className="lg:w-[632px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="1137 Williams Avanue"
            />
          </label>
          <label
            htmlFor="zip"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">Zip Code</p>
            <input
              type="text"
              id="zip"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="10001"
            />
          </label>
          <label
            htmlFor="city"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">City</p>
            <input
              type="text"
              id="city"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="New York"
            />
          </label>
          <label
            htmlFor="country"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">Country</p>
            <input
              type="text"
              id="country"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="United States"
            />
          </label>
        </div>

        <p className="text-secondary text-[14px] font-[500] mt-16">PAYMENT DETAILS</p>
        <div className="flex flex-wrap gap-8 mt-4">
          <label className="flex flex-col gap-2">
            <p className="font-[500] text-[15px]">Payment Method</p>
            <div className="flex border-2 border-solid outline-2 lg:w-[300px] w-full focus:border-secondary rounded-md px-6 py-3 text-[14px] gap-8">
              <input
                type="radio"
                id="emoney"
                name="payment"
                checked
                className="accent-secondary"
                onChange={() => {}}
              />
              <label
                htmlFor="emoney"
                className="font-[500] text-[15px]"
              >
                e-Money
              </label>
            </div>
          </label>
          <label className="flex flex-col gap-2">
            <p className="font-[500] text-[15px] text-white lg:flex hidden">.</p>
            <div className="flex border-2 border-solid outline-2 lg:w-[300px] w-full focus:border-secondary rounded-md px-6 py-3 text-[14px] gap-8">
              <input
                type="radio"
                id="cash"
                name="payment"
                className="accent-secondary"
              />
              <label
                htmlFor="cash"
                className="font-[500] text-[15px]"
              >
                Cash On Delivery
              </label>
            </div>
          </label>
          <label
            htmlFor="enumber"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">e-Money Number</p>
            <input
              type="text"
              id="enumber"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="0000000000"
            />
          </label>
          <label
            htmlFor="epin"
            className="flex flex-col gap-2"
          >
            <p className="font-[500] text-[15px]">e-Money Pin</p>
            <input
              type="text"
              id="epin"
              className="lg:w-[300px] w-full border-2 border-solid outline-2 focus:outline-secondary rounded-md px-6 py-3 text-[14px]"
              placeholder="4692"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
