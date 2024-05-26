import React from 'react'
import './Header.css'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    } else {
      // Return an empty object for larger screens, allowing default styles to apply
      return {}; 
    }
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth  ">
        <img src='./logo.png' alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>

          <div className={`flexCenter h-menu ${menuOpened ? 'open' : ''}`} 
          style={getMenuStyles(menuOpened)}>
            <a href=''>Residencies</a>
            <a href=''>Our Value</a>
            <a href=''>Contact Us</a>
            <a href=''>Get Started</a>
            <button className='button'>
                <a href=''>Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        
        <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
      
    </section>
  )
}

export default Header