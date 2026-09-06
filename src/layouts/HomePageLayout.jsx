import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import ProjectsLayout from "@/layouts/ProjectsLayout";
import { projects as projectData } from "@/data/projects";
import { skillCategories } from "@/data/skills";

function HomePageLayout() {
  return (
    <>
      <Hero />
      <Skills skills={skillCategories} />
      <ProjectsLayout projects={projectData} />
      <About />
      <Contact />
    </>
  );
}
export default HomePageLayout;
