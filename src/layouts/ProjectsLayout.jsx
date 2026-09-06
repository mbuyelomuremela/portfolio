import ProjectCard from "@/components/ProjectCard";

function ProjectsLayout({ projects }) {
  return (
    <div
      id="projects"
      className="flex flex-col gap-1 items-center w-full md:max-w-[1100px] mx-auto px-6 py-4 my-15"
    >
      <h2>My Projects</h2>
      <div className="w-full grid justify-items-center md:grid-cols-3 gap-1 flex-grow mt-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}
export default ProjectsLayout;
