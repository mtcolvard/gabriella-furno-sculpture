import { useState, useEffect } from 'react'
import {debounce} from '../utilities/debounce.js'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [navActive, setNavActive] = useState(false)
  const [worksActive, setWorksActive] = useState(false)

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

  // <header className="header flex fixed top-0 left-0 w-full z-100 h-12 md:h-24 px-2.5  md:px-8 items-center bg-white" style={{ ...navbarStyles, top: visible ? '0' : '-96px' }}>


  return (
      <header className="header flex fixed top-0 left-0 w-full z-100 h-12 md:h-24 px-2.5 md:px-8 items-center bg-white" style={{ ...navbarStyles, top: visible ? '0' : '-96px' }}>
        <div className="headerContainer flex leading-5 w-full items-baseline justify-between">
          <div className="headerLeft flex grow shrink basis-1/2 items-baseline">
            <button
              className="navButton flex relative justify-start items-start z-100 p-2.5 -mt-2.5 -ml-2.5 "
              aria-label="Open navigation"
              onClick={() => {setNavActive(!navActive); setWorksActive(false)} }
            >
              <div className="navIconWrap block">
                {navActive ?
                  <div className="navIcon navIconX w-5 md:w-6 h-3.5 md:h-4 relative block">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div> :
                  <div className="navIcon navIconHamburger w-5 md:w-6 h-3.5 md:h-4 relative block">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                }
              </div>
            </button>
            { navActive &&
            <nav className="headerNav navLeft opacity-100 top-12 px-2.5 md:mt-6 absolute left-0 w-full bg-white leading-tight block text-xl  ">
              <ul className="navLevelOne">
                <li>
                  <button onClick={() => {setWorksActive(!worksActive)}}
                  >Works</button>
                    {worksActive &&
                      <ul className="navLevelTwo ml-7">
                        <li>
                        <Link href="/works/exhibitions">Exhibitions</Link>
                        </li>
                        <li>
                        <Link href="/works/sculptures">Sculpture</Link>
                        </li>
                      </ul>
                    }
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          }
          </div>
          <div className="headerTitle grow-0 shrink-0 basis-auto leading-none relative z-30 --font-cormorant text-xl md:text-2xl text-center select-none">
            <Link href="/">Gabriella Furno</Link>
          </div>
          <div className="headerRight flex grow shrink basis-1/2 items-baseline justify-end">&nbsp;</div>
        </div>
      </header>
  );
};

export default Navbar;
