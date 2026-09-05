function ProjectCard({ project }) {
  return (
    <div className="w-[300px]">
      <div className="w-full">
        <img src={project.imageURL} alt="project image" />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
export default ProjectCard;
