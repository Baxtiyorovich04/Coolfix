import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const phoneNumbers = [
    { number: "+7 (123) 456-7890", label: "Основной" },
    { number: "+7 (987) 654-3210", label: "Сервисный центр" },
  ];

  const contactMethods = [
    { 
      icon: <FaPhone size={24} />, 
      title: "Позвоните нам", 
      description: "Мы ответим на все ваши вопросы",
      color: "#4e73df"
    },
    { 
      icon: <FaEnvelope size={24} />, 
      title: "Напишите нам", 
      description: "Отправьте заявку на почту",
      color: "#1cc88a"
    },
    { 
      icon: <FaMapMarkerAlt size={24} />, 
      title: "Посетите нас", 
      description: "Приходите в наш сервисный центр",
      color: "#f6c23e"
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
                <a href="mailto:info@coolfix.com" className={styles.contactButton}>
                  Написать письмо <FaArrowRight className={styles.buttonIcon} />
                </a>
              )}

              {index === 2 && (
                <div className={styles.addressWrapper}>
                  <address className={styles.address}>
                    г. Москва, ул. Примерная, д. 123
                  </address>
                  <div className={styles.workingHours}>
                    <FaClock className={styles.clockIcon} />
                    <span>Ежедневно: 9:00 - 20:00</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <h3>Нужен срочный ремонт?</h3>
          <p>Наши мастера готовы выехать к вам в течение часа</p>
          <a href="tel:+71234567890" className={styles.actionButton}>
            Позвонить сейчас <FaArrowRight className={styles.buttonIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}