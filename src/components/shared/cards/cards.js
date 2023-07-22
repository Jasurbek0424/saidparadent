import Image from "next/image";
import styles from "./cards.module.css";

const Card = ({ src, title, text }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        alt="card"
        src={src}
        width={320}
        height={200}
      />
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
