
import Me from "@pages/home/components/me";
import styles from "./home.module.css";

export default function Home() {
  return (
      <div className={styles.homeContainer}>
          <div className={styles.main}  >
            
                  <div className={styles.header}> DevIndia</div>
                <div className={styles.navContainer}>
                  <div className={styles.navItem}>What I do</div>
                  <div className={styles.navItem}> Who I am</div>
                  <div className={styles.navItem}> Find me</div>
              </div>
        </div>
      <div className={styles.pictureContainer}  ><Me/></div>
    </div>
  )
}