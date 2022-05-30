import ProjectCard from '../components/ProjectCard';
import ProjectCardHover from '../components/ProjectCardHover';
import '../styles/Projects.css';
import { useState } from 'react';
// import CarouselComponent from '../components/CarouselComponent';



const Projects = () => {

  const [projectHoverOne, setProjectHoverOne] = useState(false);
  const [projectHoverTwo, setProjectHoverTwo] = useState(false);
  const [projectHoverTree, setProjectHoverTree] = useState(false);

  return (
    <div className="projects-content">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container" >
        <div onMouseEnter={(e)=> setProjectHoverOne(true)} onMouseLeave={(e)=> setProjectHoverOne(false)}>
          {!projectHoverOne && <ProjectCard projectName={"BetNews"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(255, 208, 132, 0.15)), url(https://images.unsplash.com/photo-1611159063981-b8c8c4301869)'}/>}
          { projectHoverOne && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(255, 208, 132, 0.15)), url(https://images.unsplash.com/photo-1611159063981-b8c8c4301869)'}/>}
        </div>
        <div onMouseEnter={(e)=> setProjectHoverTwo(true)} onMouseLeave={(e)=> setProjectHoverTwo(false)}>
          {!projectHoverTwo && <ProjectCard projectName={"Bao'n'B"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)'}/>}
          { projectHoverTwo && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869)'}/>}
        </div>
        <div onMouseEnter={(e)=> setProjectHoverTree(true)} onMouseLeave={(e)=> setProjectHoverTree(false)}>
          {!projectHoverTree && <ProjectCard projectName={"Portfolio"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)'}/>}
          { projectHoverTree && <ProjectCardHover projectName={"view project"} projectPicture={'linear-gradient(rgba(255, 208, 132, 0.15), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170)'}/>}
        </div>
      </div>
    </div>
  );
}

export default Projects;
