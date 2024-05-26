import React from 'react'
import data from '../../utils/slider.json'
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import './Residencies.css'
import "swiper/css";
import { sliderSettings } from '../../utils/common';
const Residencies = () => {
  return (
    <section className='r-wrapper'>

        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residences</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons />
                {
                    data.map((card, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='r-card flexColStart'>
                                    <img src={card.image} alt='home' />
                                        
                                        <span className='secondaryText r-price'>
                                            <span>$</span><span>{card.price}</span>
                                        </span>

                                        <span className='primaryText'>{card.name}</span>
                                        <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper> 
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=' r-buttons'>
            <button onClick={() => swiper.slidePrev()} > &lt;</button>
             <button onClick={() => swiper.slideNext()}> &gt; </button>
        </div>
    )
}