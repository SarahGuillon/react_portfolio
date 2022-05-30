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



const Projects = () => {

  const [betNewsSelected, setbetNewsSelected] = useState(false);
  const [BAOnBSelected, setBAOnBSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [projectHoverOne, setProjectHoverOne] = useState(false);
  const [projectHoverTwo, setProjectHoverTwo] = useState(false);
  const [projectHoverTree, setProjectHoverThree] = useState(false);
  const betNewsPictures = [BetNews1, BetNews2, BetNews3, BetNews4, BetNews5, BetNews6];
  const BAOnBPictures = [baobab1, baobab2, baobab3, baobab4, baobab5, baobab6];
  const portfolioPictures = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

  const betNewsProjectText = () => {
    return (
    <div>
      <p> BetNews is an mobile application created in 2 weeks with 3 other students of Le Wagon. This is the final project after 9 weeks of an intensive bootcamp.<br></br><br></br>BetNews targets people between 18 and 30 years old who are not really interested in traditional media but want to follow the news while having fun. <br></br><br></br>With BetNews, you can bet on the news with betcoins (after studying the odds), you can create your own bet and you can challenge your friends to the leaderboard. Before betting, you can read articles to learn more about the subject selected. The bets are classified by categories (Economy, Politic, Planet, Entertainment, Culture, Sport...).</p>
    </div>)
  }

  const BAOnBProjectText = () => {
    return (
    <div>
      <p> BAO-n-B is a website made in 1 week by a team of 4 students of Le Wagon, Nantes. <br/><br/>The goal was to create our first marketplace. This web app was generated with lewagon/rails-templates with the framework Ruby on Rails. With BAOnB, you can book or rent a baboab or rent during the period you want ! To create this app, we used Ruby, HTML, CSS Simple form, bootstrap, Cloudinary, Heroku and the mapbox API.</p>
    </div>)
  }

  const portfolioProjectText = () => {
    return (
    <div>
      <p>
Since the end of my training at Le Wagon, I have continued to learn on my own. I am currently training on React JS and I chose to create my portfolio on this framework. I also trained myself to make this site responsive. </p>
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
      { (betNewsSelected || BAOnBSelected || portfolioSelected) && <p className="close" onClick={handleClose}> X </p>}
      <div className="title">
        {!betNewsSelected && !BAOnBSelected && !portfolioSelected && <h1>Projects</h1>}
      </div>
      <div className="projects-container" >
        <div onMouseEnter={(e)=> setProjectHoverOne(true)} onMouseLeave={(e)=> setProjectHoverOne(false)} onClick={(e) => setbetNewsSelected(true)}>
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && !projectHoverOne && <ProjectCard projectName={"BetNews"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(255, 208, 132, 0.15)), url(https://images.unsplash.com/photo-1611159063981-b8c8c4301869)'}/>}
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && projectHoverOne && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(255, 208, 132, 0.15)), url(https://images.unsplash.com/photo-1611159063981-b8c8c4301869)'}/>}
          {betNewsSelected && <CarouselComponent projectPicture={betNewsPictures} projectName={"BetNews"} projectText={betNewsProjectText()} projectFramework={"Ruby on Rails"} projectGithubLink={"https://github.com/Xastiro/BetNews"} projectWebLink={"http://www.betnews.fr/"}/>}
        </div>
        <div onMouseEnter={(e)=> setProjectHoverTwo(true)} onMouseLeave={(e)=> setProjectHoverTwo(false)} onClick={(e) => setBAOnBSelected(true)}>
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && !projectHoverTwo && <ProjectCard projectName={"Bao'n'B"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)'}/>}
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && projectHoverTwo && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)'}/>}
          {BAOnBSelected && <CarouselComponent projectPicture={BAOnBPictures} projectName={"BAOnB"} projectText={BAOnBProjectText()} projectFramework={"Ruby on Rails"} projectGithubLink={"https://github.com/Hugo-Ferrand/baobab"} projectWebLink={"https://stormy-brushlands-99936.herokuapp.com/"}/>}
        </div>
        <div onMouseEnter={(e)=> setProjectHoverThree(true)} onMouseLeave={(e)=> setProjectHoverThree(false)} onClick={(e) => setPortfolioSelected(true)}>
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && !projectHoverTree && <ProjectCard projectName={"Portfolio"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)'}/>}
          {!betNewsSelected && !BAOnBSelected && !portfolioSelected && projectHoverTree && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)'}/>}
          {portfolioSelected && <CarouselComponent projectPicture={portfolioPictures} projectName={"Portfolio"} projectText={portfolioProjectText()} projectFramework={"React JS"} projectGithubLink={"https://github.com/SarahGuillon/react_portfolio"} projectWebLink={"https://github.com/SarahGuillon/react_portfolio"}/>}
        </div>
      </div>
    </div>
  );
}

export default Projects;
