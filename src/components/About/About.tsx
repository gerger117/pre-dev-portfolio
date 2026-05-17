import * as styles from "./About.css";

const skills = [
  {
    icon: "⚛️",
    name: "React & TypeScript",
    desc: "Building scalable, type-safe web applications with modern React patterns.",
  },
  {
    icon: "🎨",
    name: "Figma",
    desc: "Designing clean UI/UX wireframes, prototypes, and design systems.",
  },
  {
    icon: "🖼️",
    name: "Photoshop",
    desc: "Photo manipulation, digital artwork, and visual asset creation.",
  },
  {
    icon: "✏️",
    name: "Illustrator",
    desc: "Vector graphics, logos, branding, and print-ready illustrations.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        {/* ── Left: Bio ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>About Me</span>

          <h2 className={styles.heading}>
            Crafting code &amp;&nbsp;art with&nbsp;purpose.
          </h2>

          <div className={styles.divider} />

          <p className={styles.bio}>
            I'm <strong style={{ color: "#fff" }}>Roger R. Toquero Jr.</strong>,
            a FullStack Developer and Graphic Artist passionate about building
            clean, performant digital experiences. I bridge the gap between
            engineering and design — writing solid code while keeping a sharp
            eye for aesthetics.
          </p>

          {/* Education */}
          <div className={styles.eduBlock}>
            <span className={styles.eduLabel}>Education</span>
            <span className={styles.eduDegree}>BS Information Technology</span>
            <span className={styles.eduSchool}>
              Notre Dame Of Kidapawan College - Kidapawan City
            </span>
          </div>
        </div>

        {/* ── Right: Skills ── */}
        <div className={styles.right}>
          <span className={styles.skillsLabel}>Tech Stack &amp; Tools</span>
          <div className={styles.skillsGrid}>
            {skills.map((s) => (
              <div key={s.name} className={styles.skillCard}>
                <div className={styles.skillIcon}>{s.icon}</div>
                <span className={styles.skillName}>{s.name}</span>
                <span className={styles.skillDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
