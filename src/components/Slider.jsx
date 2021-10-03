import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// import Pagination from 'docs/src/modules/components/Pagination';


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = ({slides}) => {
  const length = slides.length;
  const [slideIndex, setSlideIndex] = useState(0)
//   const [currentImg, setCurrentImg] = useState(0);
  
  const nextSlide = () => {
    // setCurrentImg((currentImg === length - 1) ? 0 : currentImg + 1 )
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex +1)
}

const prevSlide = () => {
    // setCurrentImg((currentImg === 0) ? length - 1 : currentImg - 1)
    setSlideIndex((slideIndex === 0) ? length - 1 : slideIndex - 1)
}

const handleChangeIndex = (index) => {
    setSlideIndex(index)
};


if(!Array.isArray(slides) || slides.length <= 0){
    return null
}

    return (
      <div className="slider" id="placements">
        <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
        <IoIosArrowForward className="right-arrow" onClick={nextSlide}/>
        <SwipeableViews enableMouseEvents onChangeIndex={handleChangeIndex}>
        {slides.map((slide, index) => {
          return (
            <a href={slide.link} rel="noreferrer" target="_blank">
                   <div style={{
                      backgroundImage: `url(${slide.image})`
                  }} className="image">
                  </div>
                  </a>

            //   <div onChangeIndex={()=> handleChangeIndex(index)} className={index === currentImg ? 'slide active' : 'slide'} key={index}>
            //   {index === currentImg && (
            //       <a href={slide.link} rel="noreferrer" target="_blank">
            //       <div style={{
            //           backgroundImage: `url(${slide.image})`
            //       }} className="image">
            //       </div>
            //       </a>
            //     )}
            //   </div> 
              )
          })}
        </SwipeableViews>
        <div className="dots">
                {Array.from({length: length}).map((item, index) => (
                    <div 
                    className={slideIndex === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    );
  }

export default Slider 