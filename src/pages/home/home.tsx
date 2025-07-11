import Me from "@pages/home/components/me";
import styles from "./home.module.css";
export default function Home() {
  return (
      <div className={styles.homeContainer}>
        <div className={styles.textsContainer}  ></div>
      <div className={styles.pictureContainer}  ><Me/></div>
    </div>
  )
}