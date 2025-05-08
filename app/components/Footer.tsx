import Link from "next/link"
import styles from "./Footer.module.scss"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.logoText}>Coolfix</span>
            </Link>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Услуги</h4>
              <ul>
                <li>
                  <Link href="#">Ремонт смартфонов</Link>
                </li>
                <li>
                  <Link href="#">Ремонт ноутбуков</Link>
                </li>
                <li>
                  <Link href="#">Ремонт планшетов</Link>
                </li>
                <li>
                  <Link href="#">Ремонт бытовой техники</Link>
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
                  <a href="tel:+71234567890">+7 (123) 456-7890</a>
                </li>
                <li>
                  <a href="mailto:info@coolfix.com">info@coolfix.com</a>
                </li>
                <li>г. Москва, ул. Примерная, д. 123</li>
                <li>Ежедневно: 9:00 - 20:00</li>
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
