import ProjectCard from "@/components/ProjectCard";

function ProjectsLayout({ projects }) {
  return (
    <div>
      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
    </div>
  );
}
export default ProjectsLayout;
