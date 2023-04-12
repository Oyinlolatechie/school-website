import React from 'react'
import './Hero.css'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

const HeroSection = () => {
    return ( 
        <>
    <Slider {...sliderSettings}>
    <div className='slider slide-1'> 
    <h2>Welcome to Divine Treasure School</h2> 
    <p>Where students are equipped to succeed in a changing world</p>
    </div>

    <div className='slider slide-2'>
      <h2>Nurturing and Insprinig Learning Environment </h2>

       <p>We provide a nurturing and inspiring learning environment where students can develop their skills, explore their interests, and uncover their own divine treasures.</p>
        </div>

    <div className='slider slide-3'>
        <h2>Committed to help every child</h2>

         <p>With dedicated teachers and staff, small class sizes, and a curriculum that emphasizes creativity, critical thinking, and problem-solving, we are committed to helping each and every student shine and succeed.</p>
         </div>
   
      </Slider>

      </>
     );
}
 
export default HeroSection;