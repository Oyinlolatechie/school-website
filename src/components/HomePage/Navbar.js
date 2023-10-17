import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <>
            <nav className="navbar-container">
                <Link to="/"><img src={logo}
                    alt="DTC Logo"
                    id="logo"
                /></Link>

                <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                    <li><Link className='nav-item' to="/">Home</Link></li>
                    <li><Link className='nav-item' to='/About-us'>About</Link></li>
                    <li><Link className='nav-item' to="/Admission">Admission</Link></li>
                    <li><Link className='nav-item' to="https://divinetreasureschools.com/">School portal</Link></li>
                    <li><Link className='nav-item' to="/News">News&Events</Link></li>
                    {/* <li><Link className='nav-item' to="/">Login</Link></li> */}
                    <li><Link className='nav-item' to="/contact">Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={25} />) : (<FaBars size={25} />)}

                </div>
            </nav >
        </>
    );
}

export default Navbar;