import { useState, useEffect } from 'react'
import {debounce} from '../utilities/debounce.js'
import Image from 'next/image'
import Link from 'next/link'



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

  // --font-family-serif: "Starling","Times New Roman",serif;
  //   --color-grey: #a6a6a6;
  //   --color-grey-light: #eee;
  //   --gutter: 30px;
  //   --margin-x-small: 20px;
  //   --margin-small: 40px;
  //   --margin-mid: 60px;
  //   --margin-large: 80px;
  //   --margin-x-large: 120px;
  //   --margin-xx-large: 210px;
  //   --sm-gutter: 10px;
  //   --sm-margin-x-small: 15px;
  //   --sm-margin-small: 20px;
  //   --sm-margin-mid: 30px;
  //   --sm-margin-large: 70px;
  //   --sm-margin-x-large: 150px;
  //   --sm-font-size-large: 19px;
  //   --sm-font-size-body: 14px;
  //   --sm-font-size-caption: 12px;

  //   --md-font-size-large: 19px;
  //   --md-font-size-body: 15px;
  //   --md-font-size-caption: 12px;

  //   --lg-font-size-large: 22px;
  //   --lg-font-size-body: 18px;
  //   --lg-font-size-caption: 15px;

  //   --font-size-large: 19px;
  //   --font-size-body: 15px;
  //   --font-size-caption: 12px;

  //   --line-height-body: 1.4;
  //   --header-height: 90px;
  //   --sm-header-height: 45px;

  //   --square-frame: calc((100vw - (var(--gutter) * 2) - var(--margin-large)) / 2);
  //   --page-width: 36.8em;
  //   --wide-page-width: 44.6666666em;

  return (
      <header className="header flex fixed top-0 left-0 w-full z-10 h-12 px-2.5 md:h-24 md:px-8 items-center bg-white" style={{ ...navbarStyles, top: visible ? '0' : '-96px' }}>
        <div className="headerContainer  flex leading-5 w-full items-baseline justify-between">
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
            <nav className="headerNav absolute block h-12 left-0 w-full bg-white top-11 px-2.5 md:pl-12 text-lg leading-7">
              <ul className="navLevelOne">
                <li>
                  <Link href="works/sculpture/overview">Works</Link>
                </li>
                <li>
                  <Link href="resources/profile">Profile</Link>
                </li>
                <li>
                  <Link href="resources/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <h1 className="headerTitle flex-[0_0_auto] --font-cormorant text-xl md:text-5xl relative z-[3] text-center select-none">Gabriella Furno</h1>
          <div className="headerRight flex-[1_1_50%] items-baseline justify-end">&nbsp;</div>
        </div>
      </header>
  );
};

export default Navbar;
