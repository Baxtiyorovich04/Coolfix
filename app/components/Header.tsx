"use client"

import { useState } from "react"
import Link from "next/link"
import { FaPhone } from "react-icons/fa"
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

        <div className={styles.mobileControls}>
          <a href="tel:+998909418565" className={styles.mobileCallButton}>
            <FaPhone className={styles.phoneIcon} />
          </a>
          
          <div 
            className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            </li>
            <li>
              <Link href="#benefits" onClick={() => setIsMenuOpen(false)}>Преимущества</Link>
            </li>
            <li>
              <Link href="#contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.desktopCallButton}>
          <a href="tel:+998909418565" className={styles.button}>
            <FaPhone className={styles.phoneIcon} />
            <span>Позвонить</span>
          </a>
        </div>
      </div>
    </header>
  )
}