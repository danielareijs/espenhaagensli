import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import '../css/navbar.css';



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
            <Link to="navbar"><h1>ESPEN HAAGENSLI</h1></Link>
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



{/* <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="banner"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={1000}
                        offset={-navHeight}
                        onClick={closeDropdown}
                        >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="placements"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={1000}
                        offset={-navHeight}
                        onClick={closeDropdown}
                        >
                        Placements
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={1000}
                        offset={-navHeight}
                        onClick={closeDropdown}
                        >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="projects"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={1000}
                        offset={-navHeight}
                        onClick={closeDropdown}
                        >
                        Music
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="contact"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={1000}
                        offset={-navHeight}
                        onClick={closeDropdown}
                        >
                        Contact
                    </Link>
                </li> */}