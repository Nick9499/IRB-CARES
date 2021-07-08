import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import logo from '../../Images/logo4.svg'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 800) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 800) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: '150px',
                                padding: '3%',
                            }}
                        />
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to="#"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            What We Do <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/waystogive"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Ways To Give
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
