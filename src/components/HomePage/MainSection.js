import React from 'react'
import AdminBanner from './AdminBanner'
import AboutUs from './AboutUs' 
import News from './News'
import OurSchool from './OurSchool'
import Testimonial from './Testimonial'
import NewsLetter from './NewsLetter'

import './MainSection.css'

import adminImg from '../../assets/images/DTS-Boy-Girl.png'



const MainSection = () => {
    return ( 
       <div className="main-section">
        <AdminBanner adminImg={adminImg}/> 
        <AboutUs />
        <News />
        <OurSchool />
        <Testimonial />
        <NewsLetter />
       </div>
     );
}
 
export default MainSection;