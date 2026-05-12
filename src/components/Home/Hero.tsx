import { heroData } from "../../data/about";
import * as styles from "./Hero.css";
import img from "../../assets/roger.jpg";

export default function Hero() {
  const { name, title, tagline } = heroData;

  return (
    <section className={styles.section}>
      <div className={styles.textSide}>
        <p className={styles.title}>{title}</p>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.tagline}>{tagline}</p>
      </div>

      <div className={styles.photoSide}>
        <img src={img} alt={`${name} profile photo`} className={styles.photo} />
      </div>
    </section>
  );
}
