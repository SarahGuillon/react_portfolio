import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BetNews1 from '../images/BetNews1.png';
import BetNews2 from '../images/BetNews2.png';
import BetNews3 from '../images/BetNews3.png';
import BetNews4 from '../images/BetNews4.png';
import BetNews5 from '../images/BetNews5.png';
import BetNews6 from '../images/BetNews6.png';
import {MarkGithubIcon} from '@primer/octicons-react';
import { faMobileScreen, faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="project-description">
          <h2> BetNews </h2>
          <p> BetNews is an mobile application created in 2 weeks with 3 other students of Le Wagon, Nantes. This is the final project after 9 weeks of an intensive bootcamp. <br></br>BetsNews targets people between 18 and 30 years old who are not really interested in traditional media but want to follow the news while having fun. With BetNews, you can bet on the news with betcoins (after studying the odds), you can create your own bet and you can challenge your friends to the leaderboard. The bets are classified by categories (Economy, Politic, Planet, Entertainment, Culture, Sport...). If you want to learn more about a subject before betting, you can read more information and find additionnal links to medias by clicking on the "bet card".</p>
          <br />
          <div className="icons">
            <p><FontAwesomeIcon icon={faCode} /> <strong> Ruby on Rails</strong>  </p>
            <p><MarkGithubIcon size={16} /><a href="https://github.com/Xastiro/BetNews" target="_blank" rel="noopener noreferrer">   https://github.com/Xastiro/BetNews</a></p>
            <p><FontAwesomeIcon icon={faMobileScreen} /> <a href="http://www.betnews.fr/" target="_blank" rel="noopener noreferrer">   http://www.betnews.fr/</a></p>
          </div>
        </div>
      </div>
    );
}

export default CarouselComponent;
