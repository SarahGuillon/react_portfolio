import ProjectCard from '../components/ProjectCard';
import ProjectCardHover from '../components/ProjectCardHover';
import '../styles/Projects.css';
import { useState } from 'react';
import CarouselComponent from '../components/CarouselComponent';
import BetNews1 from '../images/BetNews1.png';
import BetNews2 from '../images/BetNews2.png';
import BetNews3 from '../images/BetNews3.png';
import BetNews4 from '../images/BetNews4.png';
import BetNews5 from '../images/BetNews5.png';
import BetNews6 from '../images/BetNews6.png';
import baobab1 from '../images/baobab1.png';
import baobab2 from '../images/baobab2.png';
import baobab3 from '../images/baobab3.png';
import baobab4 from '../images/baobab4.png';
import baobab5 from '../images/baobab5.png';
import baobab6 from '../images/baobab6.png';
import portfolio1 from '../images/portfolio1.png';
import portfolio2 from '../images/portfolio2.png';
import portfolio3 from '../images/portfolio3.png';
import portfolio4 from '../images/portfolio4.png';
import portfolio5 from '../images/portfolio5.png';
import portfolio6 from '../images/portfolio6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

  const [betNewsSelected, setbetNewsSelected] = useState(false);
  const [BAOnBSelected, setBAOnBSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [projectHoverOne, setProjectHoverOne] = useState(false);
  const [projectHoverTwo, setProjectHoverTwo] = useState(false);
  const [projectHoverTree, setProjectHoverThree] = useState(false);
  const betNewsPictures = [BetNews1, BetNews2, BetNews3, BetNews4, BetNews5, BetNews6];
  const BAOnBPictures = [baobab2, baobab3, baobab4, baobab5, baobab6, baobab1];
  const portfolioPictures = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

  const betNewsProjectText = () => {
    return (
    <div>
      <p> Final team project of Le Wagon, created in 2 weeks with 3 other students.<br></br><br></br><span>Product :</span> Mobile application to bet on the news. <br></br> With BetNews, you can bet on an upcoming news event with betKoins, publish your own bet and challenge your friends to the leaderboard. Before betting, you can read articles to learn more about the subject selected.<br></br><br></br> <span>Target :</span> people between 18 and 30 years old who are not really interested in traditional media but want to follow the news while having fun.</p>
    </div>)
  }

  const BAOnBProjectText = () => {
    return (
    <div>
      <p> First team project of Le Wagon, created in 1 week with 3 other students. <br></br><br></br><span>Objective :</span> Create our first marketplace with basic CRUD features and learn to code in a team with Git branches and pull requests. <br></br> Tools : Git, Github, Figma, Bootstrap, Simple form, Cloudinary, Heroku and the mapbox API.</p>
    </div>)
  }

  const portfolioProjectText = () => {
    return (
    <div>
      <p> After Le Wagon, I continue to learn coding on my own. I am currently learning to use React JS and I chose to create my portfolio on this framework to practice. On this project I also worked on the responsive part of the website. </p>
    </div>)
  }

  const handleClose = () => {
    setbetNewsSelected(false);
    setBAOnBSelected(false);
    setPortfolioSelected(false);
    setProjectHoverOne(false);
    setProjectHoverTwo(false);
    setProjectHoverThree(false);
  }

  return (
    <div className="projects-content">
      { (betNewsSelected || BAOnBSelected || portfolioSelected) && <div className="back" onClick={handleClose}> <button ><FontAwesomeIcon icon={faArrowLeft}/> back </button> </div>}
      <div className="title">
        {!betNewsSelected && !BAOnBSelected && !portfolioSelected && <h1>Projects</h1>}
      </div>
      <div className="projects-container" >
        <div className="projects-cards" onMouseEnter={(e)=> setProjectHoverOne(true)} onMouseLeave={(e)=> setProjectHoverOne(false)} onClick={(e) => setbetNewsSelected(true)}>
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && !projectHoverOne && <ProjectCard projectName={"BetNews"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(255, 208, 132, 0.15)), url(https://images.unsplash.com/photo-1611159063981-b8c8c4301869)'}/>}
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && projectHoverOne && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(255, 208, 132, 0.15)), url(https://images.unsplash.com/photo-1611159063981-b8c8c4301869)'}/>}
          {betNewsSelected && <CarouselComponent projectPicture={betNewsPictures} projectName={"BetNews"} projectText={betNewsProjectText()} projectFramework={"Ruby on Rails"} projectGithubLink={"https://github.com/Xastiro/BetNews"} projectWebLink={"http://www.betnews.fr/"}/>}
        </div>
        <div className="projects-cards" onMouseEnter={(e)=> setProjectHoverThree(true)} onMouseLeave={(e)=> setProjectHoverThree(false)} onClick={(e) => setPortfolioSelected(true)}>
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && !projectHoverTree && <ProjectCard projectName={"Portfolio"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)'}/>}
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && projectHoverTree && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)'}/>}
          {portfolioSelected && <CarouselComponent projectPicture={portfolioPictures} projectName={"Portfolio"} projectText={portfolioProjectText()} projectFramework={"React JS"} projectGithubLink={"https://github.com/SarahGuillon/react_portfolio"} projectWebLink={"https://www.sguillonportfolio.fr/"}/>}
        </div>
        <div className="projects-cards" onMouseEnter={(e)=> setProjectHoverTwo(true)} onMouseLeave={(e)=> setProjectHoverTwo(false)} onClick={(e) => setBAOnBSelected(true)}>
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && !projectHoverTwo && <ProjectCard projectName={"Bao'n'B"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)'}/>}
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && projectHoverTwo && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)'}/>}
          {BAOnBSelected && <CarouselComponent projectPicture={BAOnBPictures} projectName={"BAOnB"} projectText={BAOnBProjectText()} projectFramework={"Ruby on Rails"} projectGithubLink={"https://github.com/Hugo-Ferrand/baobab"} projectWebLink={"https://stormy-brushlands-99936.herokuapp.com/"}/>}
        </div>
      </div>
    </div>
  );
}

export default Projects;
