import '../styles/Projects.css';
import CarouselComponent from '../components/CarouselComponent';

const Projects = () => {
  return (
    <div className="card-projects">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <h2> BetNews </h2>
      <div className="projects-container">
        {< CarouselComponent />}
        <p> jldldjfhfh ekldjdj dldkdk </p>
      </div>
    </div>
    );
}

export default Projects;
