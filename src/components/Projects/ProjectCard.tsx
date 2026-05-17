import type { Project } from "../../store/useProject";
import * as styles from "./Project.css";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.badge}>
              {tech}
            </span>
          ))}
        </div>

        <a href={project.github} target="_blank" className={styles.button}>
          View Project
        </a>
      </div>
    </div>
  );
};
