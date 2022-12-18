import { useState, useEffect } from 'react'
import {debounce} from '../utilities/debounce.js'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 5);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    transition: 'top 0.3s'
  }

  return (
      <header className="header fixed h-11 md:h-24 px-2.5 md:px-8 top-0 left-0 w-full z-10 flex items-center bg-white" style={{ ...navbarStyles, top: visible ? '0' : '-94px' }}>
        <div className="headerContainer flex leading-5 w-full items-baseline justify-between">
          <div className="headerLeft flex flex-[1_1_50%] items-baseline">
            <button className="navButton flex relative justify-start items-start z-10 p-2.5 -mt-2.5 -ml-2.5 md:m-0" aria-label="Open navigation">
              <div className="navIconWrap block">
                <div className="navIcon w-5 md:w-6 h-3.5 md:h-4 relative block">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </div>
          <h1 className="headerTitle flex-[0_0_auto] text-base md:text-lg relative z-[3] text-center select-none">Gabriella Furno</h1>
          <div className="headerRight flex-[1_1_50%] items-baseline justify-end">&nbsp;</div>
        </div>
      </header>
  );
};

export default Navbar;
