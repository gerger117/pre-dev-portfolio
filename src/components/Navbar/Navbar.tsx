import { useEffect, useState } from "react";
import { useNavStore } from "../../store/useNavStore";
import * as styles from "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificate", href: "#certificates" },
];

export default function Navbar() {
  const { activeLink, setActiveLink } = useNavStore();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleContact = () => {
    const section = document.querySelector("#Contact");
    section?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

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

            if (matched) {
              setActiveLink(matched.label);
            }
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [setActiveLink]);

  return (
    <>
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

        {/* Desktop Nav */}
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
        </ul>

        {/* Desktop Contact Button */}
        <button onClick={handleContact} className={styles.contactBtn}>
          Contact Me
        </button>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`${styles.hamburgerLine} ${
              open ? styles.hamburgerLineTopOpen : ""
            }`}
          />
          <span
            className={`${styles.hamburgerLine} ${
              open ? styles.hamburgerLineMidOpen : ""
            }`}
          />
          <span
            className={`${styles.hamburgerLine} ${
              open ? styles.hamburgerLineBottomOpen : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <>
          <div className={styles.drawerOverlay} onClick={closeMenu} />

          <div className={styles.drawer}>
            <ul className={styles.drawerLinks}>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={styles.drawerLink}
                    onClick={() => {
                      setActiveLink(item.label);
                      closeMenu();
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button onClick={handleContact} className={styles.drawerContactBtn}>
              Contact Me
            </button>
          </div>
        </>
      )}
    </>
  );
}
