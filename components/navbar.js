import { useState, useEffect } from 'react'
import {debounce} from '../utilities/debounce.js'
import Image from 'next/image'

import burgerMenu from '../public/menuIcon50px.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos, 'currentScrollPos')
    console.log(prevScrollPos, 'prevScrollPos')
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 15);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    transition: 'top 0.6s'
  }

  useEffect(() => {
    mediaSize = Window.innerWidth
  })
  let mediaSize = 100
  const burgerSize = mediaSize > 500 ? '2xl' : 'xl'
  console.log(mediaSize)

  // <button className="navButton flex relative justify-start items-start z-10 p-2.5 -mt-2.5 -ml-2.5 md:m-0" aria-label="Open navigation">
  // <div className="navIcon w-5 md:w-6 h-3.5 md:h-4 relative block">
  // <FontAwesomeIcon icon={faBars} size={`${burgerSize}`} />

  return (
      <header className="header fixed h-11 md:h-24 px-2.5 md:px-8 top-0 left-0 w-full z-10 flex items-center bg-white" style={{ ...navbarStyles, top: visible ? '0' : '-96px' }}>
        <div className="headerContainer flex leading-5 w-full items-baseline justify-between">
          <div className="headerLeft flex flex-[1_1_50%] items-baseline">
            <button className="navButton flex relative justify-start items-start z-10 p-2.5 -mt-2.5 -ml-2.5 " aria-label="Open navigation">
              <div className="navIconWrap block">
                <div className="navIcon w-5 md:w-6 h-3.5 md:h-4 relative block">
                  <Image
                    src={burgerMenu}
                    alt='navigation menu'
                    />
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </div>
          <h1 className="headerTitle flex-[0_0_auto] --font-cormorant text-3xl md:text-5xl relative z-[3] text-center select-none">Gabriella Furno</h1>
          <div className="headerRight flex-[1_1_50%] items-baseline justify-end">&nbsp;</div>
        </div>
      </header>
  );
};

export default Navbar;
