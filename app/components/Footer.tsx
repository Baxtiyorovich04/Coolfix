import Link from "next/link"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTools, FaLaptop, FaTabletAlt, FaHome } from "react-icons/fa"
import styles from "./Footer.module.scss"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Link href="/">
                <span className={styles.logoText}>Coolfix</span>
              </Link>
            </div>
            <p className={styles.tagline}>Профессиональный ремонт техники с гарантией качества</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Услуги</h4>
              <ul>
                <li>
                  <Link href="#">
                    <FaTools className={styles.linkIcon} />
                    Ремонт смартфонов
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaLaptop className={styles.linkIcon} />
                    Ремонт ноутбуков
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaTabletAlt className={styles.linkIcon} />
                    Ремонт планшетов
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <FaHome className={styles.linkIcon} />
                    Ремонт бытовой техники
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Компания</h4>
              <ul>
                <li>
                  <Link href="#">О нас</Link>
                </li>
                <li>
                  <Link href="#benefits">Преимущества</Link>
                </li>
                <li>
                  <Link href="#contacts">Контакты</Link>
                </li>
                <li>
                  <Link href="#">Отзывы</Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Контакты</h4>
              <ul>
                <li>
                  <a href="tel:+71234567890">
                    <FaPhone className={styles.linkIcon} />
                    +7 (123) 456-7890
                  </a>
                </li>
                <li>
                  <a href="mailto:info@coolfix.com">
                    <FaEnvelope className={styles.linkIcon} />
                    info@coolfix.com
                  </a>
                </li>
                <li>
                  <FaMapMarkerAlt className={styles.linkIcon} />
                  г. Москва, ул. Примерная, д. 123
                </li>
                <li>
                  <FaClock className={styles.linkIcon} />
                  Ежедневно: 9:00 - 20:00
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} Coolfix. Все права защищены.</p>
          <div className={styles.legal}>
            <Link href="#">Политика конфиденциальности</Link>
            <Link href="#">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}