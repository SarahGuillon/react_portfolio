import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BetNews1 from '../images/BetNews1.png';
import BetNews2 from '../images/BetNews2.png';
import BetNews3 from '../images/BetNews3.png';
import BetNews4 from '../images/BetNews4.png';
import BetNews5 from '../images/BetNews5.png';
import BetNews6 from '../images/BetNews6.png';

const CarouselComponent = () =>  {
    return (
      <div className="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows>
            <div>
              <img src={BetNews1} alt="BetNews image" className="project-image" />
            </div>
            <div>
              <img src={BetNews2} alt="BetNews image" className="project-image" />
            </div>
            <div>
              <img src={BetNews3} alt="BetNews image" className="project-image" />
            </div>
            <div>
              <img src={BetNews4} alt="BetNews image" className="project-image" />
            </div>
            <div>
              <img src={BetNews5} alt="BetNews image" className="project-image" />
            </div>
            <div>
              <img src={BetNews6} alt="BetNews image" className="project-image" />
            </div>
        </Carousel>
      </div>
    );
}

export default CarouselComponent;
