import React from 'react';
import { images, styles, data } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${styles.padding} bg-primary mx-auto sm:pb-10 pb-6`}>
      <div className="flex justify-between lg:flex-row flex-col md:items-start items-center">
        <Link
          to="/"
          className="font-[800] lg:text-[28px] text-[30px] text-white"
        >
          <p onClick={() => window.scrollTo(0, 0)}>audionest</p>
        </Link>
        <ul className="flex xs:flex-row flex-col md:gap-12 gap-6 md:mt-4 mt-6">
          {data.navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
            >
              <li
                className="text-white hover:cursor-pointer hover:text-secondary md:text-start text-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex md:flex-row flex-col gap-8 justify-between">
        <p className="md:w-[50%] w-full md:text-start text-center text-veryLightGray text-[14px]">
          Audionest is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
        </p>
        <div className="flex items-end justify-center gap-4">
          <img
            src={images.iconFacebook}
            alt="facebook"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src={images.iconTwitter}
            alt="twitter"
            className="hover:opacity-50 hover:cursor-pointer"
          />
          <img
            src={images.iconInstagram}
            alt="instagram"
            className="hover:opacity-50 hover:cursor-pointer"
          />
        </div>
      </div>
      <p className="md:mt-12 mt-8 text-veryLightGray text-[13px] md:text-start text-center">Copyright 2023. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
