import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const phoneNumbers = [
    { number: "+998 90 941 85 65", label: "Основной" },
    { number: "+998 94 622 19 58", label: "Telegram" },
  ];

  const contactMethods = [
    { 
      icon: <FaPhone size={24} />, 
      title: "Позвоните нам", 
      description: "Мы ответим на все ваши вопросы",
      color: "#4e73df"
    },
    { 
      icon: <FaTelegram size={24} />, 
      title: "Напишите в Telegram", 
      description: "Быстрый ответ в мессенджере",
      color: "#0088cc"
    },
    { 
      icon: <FaShieldAlt size={24} />, 
      title: "Гарантия качества", 
      description: "Профессиональный ремонт ",
      color: "#1cc88a"
    },
  ];

  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Свяжитесь с нами</h2>
          <p className={styles.subtitle}>Мы всегда готовы помочь вам с ремонтом</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.contactsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={styles.contactCard}>
              <div 
                className={styles.iconWrapper}
                style={{ backgroundColor: `${method.color}20`, color: method.color }}
              >
                {method.icon}
              </div>
              <h3 className={styles.contactTitle}>{method.title}</h3>
              <p className={styles.description}>{method.description}</p>

              {index === 0 && (
                <div className={styles.phoneNumbers}>
                  {phoneNumbers.map((phone, idx) => (
                    <div key={idx} className={styles.phoneItem}>
                      <a href={`tel:${phone.number.replace(/\D/g, "")}`} className={styles.phoneLink}>
                        {phone.number}
                      </a>
                      <span className={styles.phoneLabel}>{phone.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {index === 1 && (
                <a href="https://t.me/+998909418565" className={styles.contactButton}>
                  Написать в Telegram <FaArrowRight className={styles.buttonIcon} />
                </a>
              )}

              {index === 2 && (
                <div className={styles.addressWrapper}>
                  <div className={styles.workingHours}>
                    <FaClock className={styles.clockIcon} />
                    <span>Гарантия на ремонт с 3 до 6 месяцев</span>
                  </div>
                  <p className={styles.description}>
                    Используем только оригинальные запчасти
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <h3>Нужен срочный ремонт?</h3>
          <p>Наши мастера готовы выехать к вам в течение часа</p>
          <a href="tel:+998909418565" className={styles.actionButton}>
            Позвонить сейчас <FaArrowRight className={styles.buttonIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}