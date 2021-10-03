import React from 'react'
import { Slide } from 'react-slideshow-image';
import '../css/slideshow.css';

export const Slideshow = ( {slides} ) => {
    const properties = {
        indicators: true,
        duration: 1000,
        canSwipe: true,
        pauseOnHover: true
    };
    
    return (
        <div>
        <Slide id="placements" easing="ease" className="slider" {...properties}>
          {slides.map((slide, index) => {
          return (
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${slide.image})`}}>
                </div>
            </div>
            )
          })}
        </Slide>
      </div>
    )
}

export default Slideshow 