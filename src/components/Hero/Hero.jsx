import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
       <div className='paddings innerWidth flexCenter hero-container '>

        <div className='flexColStart hero-left '>
                <div className='hero-title'>
                  <div className='orange-circle'/>
                    <motion.h1
                    initial={{y:"2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:2 , type:"spring"}}>
                        Discover
                        <br/>
                        extraordinary<br/> NFTs
                    </motion.h1>

                </div>
                <div className='flexColStart hero-des'>
                  <span  className='secondaryText'>Find the most outstanding NFTs in all topics of life. </span>
                  <span  className='secondaryText'>Collect them and sell them at the best price.</span>
                </div>
                <div className='flexCenter search-bar'>
                  <HiLocationMarker color='var(--blue)' size={25}/>
                  <input type='text'  />
                  <button className='button'>Search</button>
                </div>
                
                <div className='flexCenter Stats'> 
                    <div className='flexColCenter stat'>
                      
                        <span >
                          <CountUp start={8800} end={9000} duration={4}/>
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>

                    </div>
                    
                 
                    <div className='flexColCenter stat'>
                        <span >
                          <CountUp start={19500} end={3000} duration={4}/>
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>

                    </div>
                
                 
                    <div className='flexColCenter stat'>
                        <span >
                          <CountUp end={28}/>
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>

                    </div>
                </div>
                </div>

        <div className='flexCenter hero-right'>
            <motion.div 
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 3, type: "spring"}}
            className='image-container'>
                <img src='./herro.jpg' alt='' />
                </motion.div>
            </div>
        </div> 

    </section>
  )
}

export default Hero
