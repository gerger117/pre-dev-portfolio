import { useEffect, useState } from "react";
import * as styles from "./certificate.css";

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
}

// ─── Add your certificates here ──────────────────────────────
// Put images in public/certificates/ and use "/certificates/filename.jpg"
// or import from src/assets/certificates/
const certificates: Certificate[] = [
  {
    id: 1,
    name: "Certificate Name Here",
    issuer: "Issuer / Organization",
    year: "2025",
    image: "/certificates/TOQUERO.png",
    description:
      "Brief description of what this certificate covers and what you learned or accomplished.",
  },
  {
    id: 2,
    name: "Certificate Name Here",
    issuer: "Issuer / Organization",
    year: "2025",
    image: "/certificates/cert-2.jpg",
    description:
      "Brief description of what this certificate covers and what you learned or accomplished.",
  },
  {
    id: 3,
    name: "Certificate Name Here",
    issuer: "Issuer / Organization",
    year: "2024",
    image: "/certificates/cert-3.jpg",
    description:
      "Brief description of what this certificate covers and what you learned or accomplished.",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section id="certificates" className={styles.section}>
        <div className={styles.inner}>
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.eyebrow}>Credentials</span>
            <h2 className={styles.heading}>Certificates</h2>
            <div className={styles.divider} />
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className={styles.card}
                onClick={() => setSelected(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(cert)}
                aria-label={`View ${cert.name}`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <span className={styles.certYear}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className={styles.overlay}
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className={styles.closeBtn}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1l12 12M13 1L1 13"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Certificate image */}
            <img
              src={selected.image}
              alt={selected.name}
              className={styles.modalImage}
            />

            {/* Details */}
            <div className={styles.modalBody}>
              <h3 className={styles.modalName}>{selected.name}</h3>

              <div className={styles.modalMeta}>
                <span className={styles.modalIssuer}>{selected.issuer}</span>
                <span className={styles.modalDot} />
                <span className={styles.modalYear}>{selected.year}</span>
              </div>

              <div className={styles.modalDivider} />

              <p className={styles.modalDesc}>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
