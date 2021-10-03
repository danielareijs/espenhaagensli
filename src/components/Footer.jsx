import React from 'react'
import {AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import '../css/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
                <h3>
                    ESPEN HAAGENSLI
                </h3>
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
