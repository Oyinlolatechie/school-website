import { MdPhonelinkRing, MdLocationPin } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../HomePage/Footer';




import './contact.css'

const contactPage = () => {
    return (
        <div className="contact-page">
            <div className="news-bg">
                <div className="news-header">
                    <h2>Contact us</h2>
                    <hr />
                    {/* <p>  The admissions process at New Hall International School consists of a sequence of steps which vary depending upon the age of the child. Below is a summary of the process
            </p> */}
                </div>
            </div>

            <div className='contact-section'>
                <div className="contact-section-left">
                    <div className='contact-title'>
                        <p>WE’D LOVE TO HEAR FROM YOU</p>
                        <h2>Visit Or Call Us</h2>
                    </div>

                    <div className='contact-content-container'>
                        <div className='contact-mobile'>
                            <div className='contact-icon'>
                                <MdPhonelinkRing />
                            </div>
                            <div className='contact-content'>
                                <h2>Get In Touch</h2>
                                <p>Mobile: 08054737187, 09066171738</p>
                                <p>Mail: ckcgwagwalada@yahoo.com</p>
                            </div>
                        </div>

                        <div className='contact-address'>
                            <span className='contact-icon'>
                                <MdLocationPin />
                            </span>

                            <div className='contact-content'>
                                <h2>Visit Our School</h2>
                                <p>Christ The King College,</p>
                                <p>Gwagwalada, Abuja. Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-section-right">
                    <form action="">
                        <p>GET IN TOUCH WITH US</p>

                        <h2>Make Enquiry Here</h2>
                        <div className='input-wrap'>
                            <input type="text" placeholder='Full name' />
                            <span className='input-icon'><BsFillPersonFill /></span>

                        </div>

                        <div className='input-wrap'>
                            <input type="email" placeholder='Email address' />
                            <span className='input-icon'><HiOutlineMail /></span>
                        </div>


                        <select name="" id="">
                            <option value="">General Inquiry</option>
                            <option value="">Need appointment</option>
                        </select>

                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>

                        <button>Send Message</button>
                    </form>

                </div>

            </div>

            <Footer />
        </div>
    );
}

export default contactPage;