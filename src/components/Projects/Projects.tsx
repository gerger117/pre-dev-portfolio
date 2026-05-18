import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import * as styles from "./Project.css";

type FilterOption = "All" | Project["type"];
const filterOptions: FilterOption[] = ["All", "Web App", "Mobile App"];

export default function Projects() {
  const [active, setActive] = useState<FilterOption>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>My Work</span>
          <h2 className={styles.heading}>Projects I&apos;ve Built</h2>
          <div className={styles.divider} />
        </div>

        {/* Filter tabs */}
        <div className={styles.filters}>
          {filterOptions.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${
                active === f ? styles.filterBtnActive : ""
              }`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
