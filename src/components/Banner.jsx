import React from 'react'
import banner from '../images/banner-piano.jpg';
import '../css/banner.css';

const Banner = () => {
    // const backgroundImg = 'banner.jpg'
    return (
        <div className="banner" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
        }}>
            <div className="banner-text">
                <h2>ESPEN HAAGENSLI</h2>
                <h4>Music For Media</h4>
            </div>
        </div>
    )
}

export default Banner
