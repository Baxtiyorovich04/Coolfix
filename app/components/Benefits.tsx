import styles from "./Benefits.module.scss"

export default function Benefits() {
  const benefitsList = [
    {
      icon: "🔧",
      title: "Профессиональный сервис",
      description: "Наши мастера имеют многолетний опыт и сертификаты от производителей",
    },
    {
      icon: "⏱️",
      title: "Быстрое обслуживание",
      description: "Большинство ремонтов выполняется в течение 24 часов",
    },
    {
      icon: "📋",
      title: "Прозрачные условия",
      description: "Никаких скрытых платежей, честная диагностика и фиксированные цены",
    },
    {
      icon: "🚚",
      title: "Выезд на дом",
      description: "Бесплатный выезд мастера в удобное для вас время",
    },
    {
      icon: "💯",
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ и запчасти",
    },
    {
      icon: "💰",
      title: "Доступные цены",
      description: "Оптимальное соотношение цены и качества на рынке",
    },
  ]

  return (
    <section id="benefits" className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <p className={styles.subtitle}>Почему клиенты выбирают именно нас</p>

        <div className={styles.grid}>
          {benefitsList.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{benefit.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
