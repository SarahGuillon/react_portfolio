const ProjectCard = (props) => {
  const projectName = props.projectName;
  const projectPicture = props.projectPicture;

  return (
    <div className="project-card" style={{background: `${projectPicture}`, backgroundPosition: 'center', backgroundSize: 'cover', height: '220px', width: '280px'}}>
      <div className="project-card-text">
        <h2>{projectName}</h2>
      </div>
    </div>
  );
}

export default ProjectCard;
