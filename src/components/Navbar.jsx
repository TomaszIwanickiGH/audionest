import React, { useState } from 'react'
import { images, styles, data } from '../constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className={`${styles.paddingSmall} mx-auto flex justify-between items-center relative text-white z-0 w-full bg-primary`} id="home">
      <div className="flex justify-center items-center gap-8">
        <img src={toggleMenu ? images.iconClose : images.iconHamburger} alt="menu" className="lg:hidden flex hover:cursor-pointer w-[18px] h-[18px]" onClick={() => setToggleMenu(!toggleMenu)} />
        <Link to="/" className="font-[800] lg:text-[24px] text-[30px]">
          audiophile
        </Link>
      </div>
      <ul className="hidden lg:flex justify-center items-center gap-8">
        {data.navLinks.map((link) => (
          <Link to={link.id} key={link.id}>
            <li className="hover:text-secondary smallcaps" onClick={() => setToggleMenu(false)}>
              {link.text}
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-[50px] flex justify-end">
        <img src={images.shoppingCart} alt="cart" className="h-[25px] w-[25px] hover:opacity-50 hover:cursor-pointer" />
      </div>
      {toggleMenu && (
        <div className="absolute top-[70px] left-[30px] bg-lightGray z-5 rounded-md">
          <ul className="flex flex-col justify-center items-center gap-4 last:pb-4 first:pt-4">
            {data.navLinks.map((link) => (
              <Link to={link.id} key={link.id}>
                <li className="hover:text-secondary smallcaps px-6 py-2 text-[18px]" onClick={() => setToggleMenu(false)}>
                  {link.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
