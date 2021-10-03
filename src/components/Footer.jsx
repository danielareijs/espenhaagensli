import React from 'react'
import {AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import '../css/footer.css';
import logo from '../images/espen-logo.png';


const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
                <img src={logo} />
                 <p>©2021 by Daniela Reijs.</p>
            </div> 
            <div className="footer-links">
                <a href="https://www.instagram.com/espenhmusic/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
                <a href="mailto:espen.haagensli@gmail.com" ><AiOutlineMail /></a>
            </div>
        </footer>
    )
}

export default Footer
