import { useState } from 'react';
import { MdPhonelinkRing, MdLocationPin } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../HomePage/Footer';


import './contact.css'

const ContactPage = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [enquiry, setEnquiry] = useState("appoinment")
    const [message, setMesage] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()
        const contactReport = { fullname, email, enquiry, message }


        console.log(contactReport);

    }


    return (
        <div className="contact-page">
            <div className="news-bg">
                <div className="news-header">
                    <h2>Contact us</h2>
                    <hr />

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
                    <form onSubmit={handleSubmit}>
                        <p>GET IN TOUCH WITH US</p>

                        <h2>Make Enquiry Here</h2>
                        <div className='input-wrap'>
                            <input
                                type="text"
                                placeholder='Full name'
                                required
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}

                            />
                            <span className='input-icon'><BsFillPersonFill /></span>

                        </div>

                        <div className='input-wrap'>
                            <input
                                type="email"
                                placeholder='Email address'
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <span className='input-icon'><HiOutlineMail /></span>
                        </div>


                        <select
                            value={enquiry}
                            onChange={(e) => setEnquiry(e.target.value)}

                        >
                            <option value="inquiry">General Inquiry</option>
                            <option value="appoinment">Need appointment</option>
                        </select>

                        <textarea
                            cols="30"
                            rows="10"
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMesage(e.target.value)}
                        ></textarea>

                        <button>Send Message</button>
                    </form>

                </div>

            </div>

            <Footer />
        </div>
    );
}

export default ContactPage;