import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import '../css/navbar.css';
import logo from '../images/espen-logo.png';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const [navHeight, setNavHeight] = useState(0);
    const navLinks = [
        {
            title: 'Home',
            to: 'banner'
        }, {
            title: 'Placements',
            to: 'placements'
        },{
            title: 'About',
            to: 'about'
        },{
            title: 'Music',
            to: 'projects'
        },{
            title: 'Contact',
            to: 'contact'
        }
    ]

    const handleClick = () => setClick(!click)

    const closeDropdown = () => {
        setClick(false)
    }


    useEffect(() => {
        const height = document.querySelector('#navbar').clientHeight
        setNavHeight(height)
    }, [navHeight])
    
    return (
        <nav id="navbar">
            <Link to="banner"><img src={logo} /></Link>
            <div>
            <div className="menu-icon" onClick={handleClick}>
                {click && <FaTimes />}
                {!click && <GiHamburgerMenu />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                { navLinks.map(navlink => {
                    return (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to={navlink.to}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={1000}
                            offset={-navHeight}
                            onClick={closeDropdown}
                            >
                            {navlink.title}
                        </Link>
                    </li>
                    )
                })}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
