import styles from './picture.module.css'

export default function Picture({ image,extraStyleContainer }: { image: string,extraStyleContainer: string }) {
  return (
    <div className={extraStyleContainer}>
      <img className={styles.picture} src={image} alt="Picture" />
    </div>
  )
}