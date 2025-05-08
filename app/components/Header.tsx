"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.scss"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Coolfix</span>
          </Link>
        </div>

        <div className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="#benefits">Преимущества</Link>
            </li>
            <li>
              <Link href="#contacts">Контакты</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.callButton}>
          <a href="tel:+71234567890" className={styles.button}>
            Позвонить
          </a>
        </div>
      </div>
    </header>
  )
}
