import * as styles from "./Hero.css";
import rogerImg from "../../assets/grad.png";

const skillPills = [
  { label: "UI/UX Designer", className: styles.pill1 },
  { label: "Mobile Dev", className: styles.pill2 },
  { label: "Web Dev", className: styles.pill3 },
  { label: "Product Design", className: styles.pill4 },
];

// const avatars = [
//   { initial: "A", className: styles.avatar },
//   { initial: "B", className: `${styles.avatar} ${styles.avatar2}` },
//   { initial: "C", className: `${styles.avatar} ${styles.avatar3}` },
// ];

export default function Hero() {
  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick = () => {
    window.location.href = "#projects";
  };
  const handleResume = () => {
    window.location.href = "/Roger_Toquero_DCWDCV.pdf";
  };

  return (
    <>
      {/* Grain overlay */}
      <div className={styles.grain} aria-hidden="true" />

      <section id="home" className={styles.hero}>
        {/* Heading */}
        <div className={styles.heroText}>
          <div className={styles.heroGreeting}>Hello i&apos;m Roger </div>
          <div className={styles.heroTitle}>FullStack Dev/Graphic Artist</div>
        </div>

        {/* Floating skill pills */}
        {skillPills.map((p) => (
          <div key={p.label} className={`${styles.pill} ${p.className}`}>
            {p.label}
          </div>
        ))}

        {/* Person silhouette placeholder */}
        <div className={styles.personWrap}>
          <div className={styles.personPlaceholder}>
            <img
              src={rogerImg}
              alt="Roger"
              style={{
                width: "55%",
                objectFit: "contain",
                objectPosition: "top",
                // mixBlendMode: "luminosity", // blends purple bg into dark page
                // filter: "brightness(1.1) contrast(1.05)",
              }}
            />
            {/*
             * Swap this SVG block for a real <img> with a transparent-bg photo:
             * <img src="/nahid.png" alt="Nahid" style={{ width: "100%" }} />
             */}
          </div>
        </div>

        {/* Scroll Down */}
        <button
          className={styles.scrollPill}
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <svg
            className={styles.scrollIcon}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Scroll
        </button>

        {/* CTA buttons */}
        <div className={styles.ctaRow}>
          <button onClick={handleResume} className={styles.btnPrimary}>
            Resume
          </button>
          <button onClick={handleClick} className={styles.btnSecondary}>
            Discover My Works
          </button>
        </div>

        {/* Happy Clients badge
        <div className={styles.clientsBadge}>
          <div className={styles.avatarStack}>
            {avatars.map((a) => (
              <span key={a.initial} className={a.className}>
                {a.initial}
              </span>
            ))}
          </div>
          <div className={styles.clientsInfo}>
            <div className={styles.clientsCount}>90K</div>
            <div className={styles.clientsLabel}>Happy Clients</div>
          </div>
        </div> */}
      </section>
    </>
  );
}
