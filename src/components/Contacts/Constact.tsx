import { Typography, message } from "antd";
import emailjs from "@emailjs/browser";
import { useContactStore } from "../../store/contactStore";
import * as styles from "./Constact.css";

const { Title, Paragraph } = Typography;

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialLinks = [
  { icon: <GithubIcon />, href: "https://github.com/gerger117" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/fcb.gaming31" },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/roger-toquero-2962603b5/",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/kshbdbjxkajnsnnn/",
  },
];

const Contact = () => {
  const {
    name,
    email,
    userMessage,
    setName,
    setEmail,
    setUserMessage,
    clearForm,
  } = useContactStore();

  const sendEmail = () => {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: userMessage,
    };

    emailjs
      .send(
        "service_8ksl28r",
        "template_e69td0e",
        templateParams,
        "yj3nn1Fr9gFfJKCDx",
      )
      .then(
        () => {
          message.success("Message sent successfully!");
          clearForm();
        },
        (error) => {
          message.error("Failed to send message.");
          console.log(error);
        },
      );
  };

  return (
    <section id="Contact" className={styles.section}>
      <div className={styles.glowRight} />
      <div className={styles.glowBottom} />

      <div className={styles.outerCard}>
        <div className={styles.contactContainer}>
          {/* Left Side */}
          <div className={styles.contactDetails}>
            <Title level={2} className={styles.title}>
              Get In Touch
            </Title>
            <div className={styles.divider} />
            <Paragraph className={styles.paragraph}>
              Feel free to contact me for collaborations,
              <br />
              projects, or just to say hello.
            </Paragraph>

            <div className={styles.contactRow}>
              <div className={styles.iconCircle}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span>rogertoquero515@gmail.com</span>
            </div>

            <div className={styles.contactRow}>
              <div className={styles.iconCircle}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Kidapawan City, Philippines</span>
            </div>

            <div className={styles.socialRow}>
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className={styles.socialBtn}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side — Contact Form */}
          <div className={styles.formCard}>
            <p className={styles.formTitle}>Contact Form</p>

            <input
              className={styles.inputField}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className={styles.inputField}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className={styles.textareaField}
              placeholder="Message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />

            <button className={styles.sendBtn} onClick={sendEmail}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
