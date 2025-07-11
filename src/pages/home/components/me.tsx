import Picture from "@components/ui/picture/picture.tsx"
import image from "@public/images/india.png"
import styles from "./me.module.css"

export default function Me() {
  return (
    <div className={styles.meContainer}>
      <div className={styles.pictureWrapper}>
        <Picture extraStyleContainer={'pictureContainer'} image={image} />
      </div>
    </div>
  )
}