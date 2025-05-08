"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FaMoon, FaSun, FaPhone } from "react-icons/fa"
import styles from "./Header.module.scss"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setDarkMode(savedMode === 'true')
      document.documentElement.classList.toggle('dark', savedMode === 'true')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    document.documentElement.classList.toggle('dark', newMode)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Coolfix</span>
          </Link>
        </div>

        <div className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? styles.open : ''}></span>
          <span className={isMenuOpen ? styles.open : ''}></span>
          <span className={isMenuOpen ? styles.open : ''}></span>
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

        <div className={styles.controls}>
          <button 
            className={styles.modeToggle} 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          
          <a href="tel:+71234567890" className={styles.button}>
            <FaPhone className={styles.phoneIcon} />
            <span>Позвонить</span>
          </a>
        </div>
      </div>
    </header>
  )
}