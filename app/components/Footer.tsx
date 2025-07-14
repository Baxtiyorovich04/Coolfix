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
                  <a href="#services">
                    <FaTools className={styles.linkIcon} />
                    Ремонт кондиционеров 
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <FaTools className={styles.linkIcon} />
                    Ремонт стиральных машин 
                  </a>
                </li>
           
                <li>
                  <a href="#services">
                    <FaHome className={styles.linkIcon} />
                    Ремонт двухконтурных котлов
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Компания</h4>
              <ul>
                <li>
                  <a href="#about">О нас</a>
                </li>
           
                <li>
                  <a href="#contacts">Контакты</a>
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
                  <a href="tel:+998946221958">
                    <FaPhone className={styles.linkIcon} />
                    +998 90 941 85 65
                  </a>
                </li>
                <li>
                  <a href="https://t.me/+998909418565">
                    <FaEnvelope className={styles.linkIcon} />
                    t.me/coolfix_uz
                  </a>
                </li>
              
                <li>
                  <FaClock className={styles.linkIcon} />
                  Ежедневно: 8:00 - 20:00
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
      {/* Секция О нас для якоря #about */}
      <section id="about" style={{display: 'none'}} aria-hidden="true"></section>
    </footer>
  )
}