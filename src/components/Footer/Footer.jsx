import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>

            <div className='flexColStart f-left'>
                <img src='./logo2.png' alt='' width={120}/>
                <span className='secondaryText'>The best real estate deals <br/>
                on the market right now .
                </span>
            </div>

            {/* right side */}

            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>234 New Clifton Street , Algeria MILA created by SALIHA BRIK</span>
                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>

                </div>
            </div>

        </div>
    
        
    </section>

  )
}

export default Footer
