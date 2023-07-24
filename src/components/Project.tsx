import { AiFillGithub } from "react-icons/ai";
import { ProjectProps } from "../interfaces/ProjectProps";

interface Props {
  project: ProjectProps;
  image: string;
}

const Project = ({ project, image }: Props) => {
  return (
    <article className="project">
      <a href={project.url_project} target="_blank">
        <img src={image} alt={project.title} />
      </a>
      <div className="project-info">
        <h4>{project.title}</h4>
        <div className="project-icon">
          <a href={project.github} target="_blank">
            <span className="project-icon">
              <AiFillGithub />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};
export default Project;
