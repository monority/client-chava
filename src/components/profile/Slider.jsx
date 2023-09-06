import { Row, Col } from 'antd';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
// import SliderItem from './SliderItem';


const images = [
    '../src/assets/media/profile/1.jpg',
    '../src/assets/media/profile/2.jpg',
    '../src/assets/media/profile/3.jpg',
    '../src/assets/media/profile/4.jpg',
    '../src/assets/media/profile/5.jpg',
  ];

const Slider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length -1 ? 0 : currentIndex + 1)
}
console.log(currentIndex);
const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length -1 : currentIndex - 1)
}

  return (
    <div className='slider'>
        <div className="slider-item">
           <div className="slider-img">
                {images.map((image, index) => {
                    return (
                            <img 
                            src= {image}
                            key={index}
                            className={currentIndex === index ? 'slider__img' : 'hidden'}
                            />
                    );
                })}
            </div>
        </div>
            <div className="thumbnail-item">
                <IoIosArrowBack onClick={prevSlide} className='arrow arrow-left'/> 
                <div className="thumbnail-img thumbnail-before">
                    <img src={images[currentIndex - 1] || images[images.length - 1]} alt="" />
                </div>
                <div className="thumbnail-img thumbnail-actual">
                    <img src={images[currentIndex]} alt="" />
                </div>
                <div className="thumbnail-img thumbnail-after">
                    {/* image suivante reste dans les limites du tableau images même lorsque currentIndex atteint la fin du tableau. */}
                    <img src={images[(currentIndex + 1) % images.length]} alt="" /> 
                </div>
                <IoIosArrowForward onClick={nextSlide} className=' arrow arrow-right'/> 
            </div>
    </div>
  );
};

export default Slider
