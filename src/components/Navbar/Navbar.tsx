import { useEffect } from "react";
import { useNavStore } from "../../store/useNavStore";
import * as styles from "./Navbar.css";
// import resumePdf from "../../assets/Roger_Toquero_DCWDCV.pdf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificate", href: "#certificates" },
  // { label: "FaQ", href: "#faq" },
  // { label: "", href: "#resume" },
];

export default function Navbar() {
  const { activeLink, setActiveLink } = useNavStore();

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = navLinks.find(
              (l) => l.href === `#${entry.target.id}`,
            );
            if (matched) setActiveLink(matched.label);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [setActiveLink]);

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <a href="#home" className={styles.logo}>
        <svg
          className={styles.logoIcon}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="16,3 30,27 2,27" fill="#5c3bff" opacity="0.9" />
          <polygon points="16,10 24,24 8,24" fill="rgba(255,255,255,0.15)" />
        </svg>
        Roger R. Toquero Jr.
      </a>

      {/* Nav Links */}
      <ul className={styles.links}>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`${styles.link} ${
                activeLink === item.label ? styles.linkActive : ""
              }`}
              onClick={() => setActiveLink(item.label)}
            >
              {item.label}
            </a>
          </li>
        ))}

        {/* Resume — opens in new tab, not a scroll target */}
        {/* <li>
          <a
            href="/Roger_Toquero_DCWDCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Resume
          </a>
        </li> */}
      </ul>

      {/* CTA */}
      <button className={styles.contactBtn}>Contact Me</button>
    </nav>
  );
}
