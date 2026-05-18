import type { Project } from "../../data/projects";
import * as styles from "./ProjectCard.css";

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.card}>
      {/* Image — only shown if provided */}
      {project.image && (
        <img src={project.image} alt={project.title} className={styles.image} />
      )}

      {/* Top row: type tag + year */}
      <div className={styles.cardTop}>
        <span className={styles.typeTag}>{project.type}</span>
        <span className={styles.year}>{project.year}</span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.usedAt}>@ {project.usedAt}</span>
        <p className={styles.description}>{project.description}</p>
      </div>

      {/* Tech stack */}
      <div className={styles.techStack}>
        {project.tech.map((tech) => (
          <span key={tech} className={styles.badge}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.cardLinks}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Open Project
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoLink}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
