import Link from "next/link"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Быстрый и надежный ремонт техники</h1>
          <p className={styles.subtitle}>Профессиональный сервис с гарантией качества и доступными ценами</p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.icon}>⚡</span>
              <span>Быстрый ремонт</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.icon}>🛡️</span>
              <span>Гарантия 1 год</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.icon}>💰</span>
              <span>Доступные цены</span>
            </div>
          </div>
          <Link href="#contacts" className={styles.button}>
            Заказать ремонт
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  )
}
