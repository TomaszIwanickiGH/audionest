import React from 'react';
import { styles, images } from '../constants';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className={`${styles.padding} mx-auto flex xl:flex-row flex-col-reverse mb-8 mt-4`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: '-40%' },
        }}
        className="flex flex-col justify-center xl:items-start items-center"
      >
        <h2 className="text-primary font-[600] lg:text-[42px] text-[24px] lg:text-start text-center mt-8">
          BRINGING YOU THE <br className="xl:block hidden" />
          <span className="text-secondary">BEST</span> AUDIO GEAR
        </h2>
        <p className="mt-4 text-veryLightGray xl:w-[60%] w-full">
          Located at the heart of New York City. Audionest is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms avaiable for you to browse and experience a wide range of our products. Stop by our store to
          meet some of the fantastic people who make Audionest the best place to buy your portable audio equipment.
        </p>
      </motion.div>
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: '40%' },
        }}
        src={images.manPhoto}
        alt="man"
        className="rounded-md"
      />
    </section>
  );
};

export default About;
