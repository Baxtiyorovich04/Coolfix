import Link from "next/link"
import { FaBolt, FaShieldAlt, FaMoneyBillWave, FaTools } from "react-icons/fa"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Ремонт кондиционеров в Ташкенте с бесплатным выездом</h1>
          <p className={styles.subtitle}>Профессиональный сервис с гарантией качества и доступными ценами</p>
          
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <FaBolt className={styles.icon} />
              <span>Быстрый ремонт</span>
            </div>
            <div className={styles.highlight}>
              <FaShieldAlt className={styles.icon} />
              <span>Гарантия 3-6 месяцев</span>
            </div>
            <div className={styles.highlight}>
              <FaMoneyBillWave className={styles.icon} />
              <span>Доступные цены</span>
            </div>
          </div>
          
          <div className={styles.buttons}>
            <Link href="#contacts" className={`${styles.button} ${styles.primary}`}>
              Заказать ремонт
            </Link>
            <Link href="#benefits" className={`${styles.button} ${styles.secondary}`}>
              Наши преимущества
            </Link>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <FaTools className={styles.toolsIcon} />
          </div>
        </div>
      </div>
    </section>
  )
}