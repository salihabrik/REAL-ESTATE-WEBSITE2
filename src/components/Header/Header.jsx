import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpened] = React.useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) 
      {
      return { right: !menuOpened && "-100%" };
    }
  }
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth  ">
        <img src='./logo.png' alt="logo" width={100} />

        <div className='flexCenter h-menu' style={getMenuStyle(menuOpened)}>
            <a href=''>Residencies</a>
            <a href=''>Our Value</a>
            <a href=''>Contact Us</a>
            <a href=''>Get Started</a>
            <button className='button'>
                <a href=''>Contact</a>
            </button>
            

        </div>
        <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30} />

      </div>
      </div>
      
    </section>
  )
}

export default Header
