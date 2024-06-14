import React from 'react';
import { styles, images } from '../constants';
import { Link } from 'react-router-dom';
import { Form } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { motion } from 'framer-motion';

const CheckoutWrapper = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  let total = 0;
  let arr = [];

  return (
    <section className={`${styles.padding} mx-auto flex flex-col bg-veryVeryLightGray`}>
      <Link to="/">
        <p className="text-veryLightGray hover:text-secondary hover:cursor-pointer">Go Back</p>
      </Link>

      <div className="flex xl:flex-row flex-col gap-8 xl:items-start items-center">
        <Form />
        <div
          // initial={{ opacity: 0, x: '30%' }}
          // animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1.5 }}
          className="bg-white rounded-lg flex flex-col gap-4 sm:px-8 px-6 sm:py-8 py-6 mt-8 sm:min-w-[400px] min-w-[300px]"
        >
          <h3 className="text-primary font-[500] text-[24px]">SUMMARY</h3>
          {allProducts.length > 0 ? (
            allProducts.map((product) => {
              arr.push(parseFloat(product.price.slice(2) * parseInt(product.amount)));
              return (
                <div
                  key={product.id}
                  className="flex gap-4"
                >
                  <div className="flex justify-center items-center bg-veryVeryLightGray w-[80px] h-[80px] rounded-lg">
                    <img
                      src={product.image}
                      alt="img"
                      className="w-[65px] h-[55px]"
                    />
                  </div>
                  <div className="flex flex-1 justify-between mt-2">
                    <div>
                      <p className="font-[600] text-[15px] text-primary">{product.title}</p>
                      <p className="font-[500] text-[14px] text-veryLightGray mt-2">{product.price}</p>
                    </div>
                    <div>
                      <img
                        src={images.iconCloseBlack}
                        alt="remove"
                        className="w-[12px] h-[12px] opacity-80 hover:cursor-pointer"
                        onClick={() => dispatch({ type: 'DEL', payload: product.id })}
                      />
                      <p className="font-[500] text-[15px] text-veryLightGray mt-4">x{product.amount}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-secondary text-center my-4 font-[600]">No Items Found!</p>
          )}

          {allProducts.length !== 0 && (
            <>
              <div className="flex justify-between mt-6">
                <p className="text-[15px] text-veryLightGray">TOTAL</p>
                <p className="text-[15px] text-primary font-[600]">
                  ${' '}
                  {
                    (total = arr.reduce((total, item) => {
                      return total + item;
                    }, 0))
                  }
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[15px] text-veryLightGray">SHIPPING</p>
                <p className="text-[15px] text-primary font-[600]">$ {arr.length * 10}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-[15px] text-veryLightGray">GRAND TOTAL</p>
                <p className="text-[15px] text-secondary font-[600]">$ {total + arr.length * 10}</p>
              </div>

              <button
                className="bg-secondary px-6 py-3 w-full text-white hover:text-primary hover:font-[500] lg:text-[16px] text-[14px] mt-4"
                onClick={() => {
                  alert("This function doesn't currently work");
                  console.log(allProducts.length);
                }}
              >
                Continue & Pay
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutWrapper;
