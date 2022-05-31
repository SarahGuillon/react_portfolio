import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {MarkGithubIcon} from '@primer/octicons-react';
import { faMobileScreen, faCode, faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselComponent = (props) =>  {

  const projectName = props.projectName;
  const projectPicture = props.projectPicture;
  const projectText = props.projectText;
  const projectFramework = props.projectFramework;
  const projectWebLink = props.projectWebLink;
  const projectGithubLink = props.projectGithubLink;



    return (
      <div className="carousel-wrapper">
        <div className="project-title">
          <h2>{projectName} project</h2>
        </div>
        <div className="project-slide">
          <Carousel infiniteLoop useKeyboardArrows>
            <div>
              <img src={projectPicture[0]} alt="project screenshot" className="project-picture" />
            </div>
            <div>
              <img src={projectPicture[1]} className="project-picture" />
            </div>
            <div>
              <img src={projectPicture[2]} className="project-picture" />
            </div>
            <div>
              <img src={projectPicture[3]} className="project-picture" />
            </div>
            <div>
              <img src={projectPicture[4]} className="project-picture" />
            </div>
            <div>
              <img src={projectPicture[5]} className="project-picture" />
            </div>
          </Carousel>
          <div className="project-text">
            {projectText}
            <div className="icons">
              <p><FontAwesomeIcon icon={faCode} /> <span> {projectFramework}</span>  </p>
              <p><MarkGithubIcon size={16} /><a href={projectGithubLink} target="_blank" rel="noopener noreferrer">   {projectGithubLink}</a></p>
              <p><FontAwesomeIcon icon={faLink} /> <a href={projectWebLink} target="_blank" rel="noopener noreferrer">  {projectWebLink}</a></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CarouselComponent;
