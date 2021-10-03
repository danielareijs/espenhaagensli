import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
// import SwipeableViews from 'react-swipeable-views';


const Carousel = ( {slides} ) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [index, setIndex] = useState(0);
    // const { isAuthenticated } = useAuth0();
   
    
    const nextSlide = () => {
        setCurrentImg((currentImg === slides.length - 1) ? 0 : currentImg + 1 )
    }

    const prevSlide = () => {
        setCurrentImg((currentImg === 0) ? slides.length - 1 : currentImg - 1)
    }

    const handleChangeIndex = (index) => {
        setIndex(index)
    };
    

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return (
        <section className="slider" id="placements">
            <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
            <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div onChangeIndex={()=> handleChangeIndex(index)} className={index === currentImg ? 'slide active' : 'slide'} key={index}>
                    {index === currentImg && (
                        <a href={slide.link} rel="noreferrer" target="_blank">
                        <div style={{
                            backgroundImage: `url(${slide.image})`
                        }} className="image">
                        </div>
                        </a>
                    )}
                    </div>
                )
                })}
        </section>
    )
}

export default Carousel
