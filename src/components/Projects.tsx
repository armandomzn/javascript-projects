import { useFetchProjects } from "../fetchProjects";
import { ProjectProps } from "../interfaces/ProjectProps";
import Project from "./Project";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <div className="loading-parent">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <section className="projects">
      <div className="section-title">
        <h3>projects</h3>
        <div className="underline"></div>
      </div>
      <div className="project-items">
        {projects.map((project: ProjectProps) => {
          const image = project.image.fields.file.url;
          return <Project project={project} image={image} key={project.id} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
