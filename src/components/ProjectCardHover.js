const ProjectCardHover = (props) => {
  const projectName = props.projectName;
  const projectPicture = props.projectPicture;

  return (
    <div className="project-card" style={{background: `${projectPicture}`, backgroundPosition: 'center', backgroundSize: 'cover', height: '300px', width:'350px'}}>
      <div className="project-card-text-hover">
        <h2>{projectName}</h2>
      </div>
    </div>
  );
}

export default ProjectCardHover;
