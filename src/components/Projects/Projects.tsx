import { useEffect } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useProjectStore } from "../../store/useProject";
import * as styles from "./Project.css";

export const Projects = () => {
  const { projects: storeProjects, setProjects } = useProjectStore();

  useEffect(() => {
    setProjects(projects);
  }, [setProjects]);

  return (
    <section id="projects" className={styles.wrapper}>
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "bold",
        }}
      >
        Featured Projects
      </h2>

      <div className={styles.grid}>
        {storeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
