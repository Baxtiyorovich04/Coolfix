import { FaTools, FaClock, FaFileAlt, FaTruck, FaAward, FaMoneyBillAlt } from "react-icons/fa";
import styles from "./Benefits.module.scss";

export default function Benefits() {
  const benefitsList = [
    {
      icon: <FaTools size={24} />,
      title: "Профессиональный сервис",
      description: "Наши мастера имеют многолетний опыт и сертификаты от производителей",
      color: "#4e73df"
    },
    {
      icon: <FaClock size={24} />,
      title: "Быстрое обслуживание",
      description: "Большинство ремонтов выполняется в течение 24 часов",
      color: "#1cc88a"
    },
    {
      icon: <FaFileAlt size={24} />,
      title: "Прозрачные условия",
      description: "Никаких скрытых платежей, честная диагностика и фиксированные цены",
      color: "#36b9cc"
    },
    {
      icon: <FaTruck size={24} />,
      title: "Выезд на дом",
      description: "Бесплатный выезд мастера если будеть ремонт. Без ремонта 100.000 сум",
      color: "#f6c23e"
    },
    {
      icon: <FaAward size={24} />,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ и запчасти",
      color: "#e74a3b"
    },
    {
      icon: <FaMoneyBillAlt size={24} />,
      title: "Доступные цены",
      description: "Оптимальное соотношение цены и качества на рынке",
      color: "#858796"
    },
  ];

  return (
    <section id="benefits" className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши преимущества</h2>
          <p className={styles.subtitle}>Почему клиенты выбирают именно нас</p>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid}>
          {benefitsList.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.iconWrapper}
                style={{ backgroundColor: `${benefit.color}20`, color: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}