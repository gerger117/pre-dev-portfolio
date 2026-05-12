import * as styles from "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        Roger Toquero
      </a>

      <ul className={styles.links}>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
