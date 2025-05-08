import styles from "./Contacts.module.scss"

export default function Contacts() {
  const phoneNumbers = [
    { number: "+7 (123) 456-7890", label: "Основной" },
    { number: "+7 (987) 654-3210", label: "Сервисный центр" },
  ]

  const contactMethods = [
    { icon: "📱", title: "Позвоните нам", description: "Мы ответим на все ваши вопросы" },
    { icon: "📧", title: "Напишите нам", description: "Отправьте заявку на почту" },
    { icon: "🏢", title: "Посетите нас", description: "Приходите в наш сервисный центр" },
  ]

  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.title}>Свяжитесь с нами</h2>
        <p className={styles.subtitle}>Мы всегда готовы помочь вам с ремонтом</p>

        <div className={styles.contactsGrid}>
          {contactMethods.map((method, index) => (
            <div key={index} className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{method.icon}</span>
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
                  Написать письмо
                </a>
              )}

              {index === 2 && (
                <address className={styles.address}>
                  г. Москва, ул. Примерная, д. 123
                  <br />
                  Ежедневно: 9:00 - 20:00
                </address>
              )}
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <h3>Нужен срочный ремонт?</h3>
          <a href="tel:+71234567890" className={styles.actionButton}>
            Позвонить сейчас
          </a>
        </div>
      </div>
    </section>
  )
}
