function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-1 w-[300px] rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-100 overflow-hidden">
      <div className="w-full h-[300px] overflow-hidden">
        <img
          src={project.imageURL}
          alt="project image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap1 px-2 py-1 flex-wrap overflow-hidden w-full flex-grow items-center">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
export default ProjectCard;
