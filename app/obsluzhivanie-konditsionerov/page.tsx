import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Обслуживание кондиционеров в Ташкенте | Профессиональный сервис Coolfix',
  description: 'Профессиональное обслуживание кондиционеров в Ташкенте. Чистка, заправка, профилактика. Гарантия качества. Доступные цены. Выезд специалистов на дом. ☎ Звоните!',
  alternates: {
    canonical: 'https://coolfix.uz/obsluzhivanie-konditsionerov',
  },
}

export default function ObsluzhivanieKonditsionerov() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Обслуживание кондиционеров в Ташкенте</h1>
          <p className="lead">Профессиональное обслуживание кондиционеров для долгой и эффективной работы</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Услуги по обслуживанию кондиционеров</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Чистка кондиционера</h3>
              <p>Профессиональная чистка внутреннего и внешнего блока. Устранение запахов и бактерий.</p>
            </div>
            <div className="service-card">
              <h3>Заправка фреоном</h3>
              <p>Заправка кондиционеров качественным фреоном. Проверка герметичности системы.</p>
            </div>
            <div className="service-card">
              <h3>Профилактика</h3>
              <p>Регулярное техническое обслуживание. Предотвращение поломок.</p>
            </div>
            <div className="service-card">
              <h3>Диагностика</h3>
              <p>Комплексная проверка работы кондиционера. Выявление потенциальных проблем.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="importance">
        <div className="container">
          <h2>Почему важно регулярное обслуживание</h2>
          <ul>
            <li>Продление срока службы кондиционера</li>
            <li>Экономия электроэнергии</li>
            <li>Предотвращение поломок</li>
            <li>Чистый и свежий воздух</li>
            <li>Сохранение гарантии производителя</li>
          </ul>
        </div>
      </section>

      <section className="schedule">
        <div className="container">
          <h2>Рекомендуемый график обслуживания</h2>
          <div className="schedule-grid">
            <div className="schedule-item">
              <h3>Ежемесячно</h3>
              <p>Чистка фильтров внутреннего блока</p>
            </div>
            <div className="schedule-item">
              <h3>Каждые 3 месяца</h3>
              <p>Чистка внутреннего блока</p>
            </div>
            <div className="schedule-item">
              <h3>Каждые 6 месяцев</h3>
              <p>Комплексное обслуживание</p>
            </div>
            <div className="schedule-item">
              <h3>Ежегодно</h3>
              <p>Полное техническое обслуживание</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Нужно обслуживание кондиционера?</h2>
          <p>Оставьте заявку, и мы перезвоним вам в течение 5 минут</p>
          <button className="cta-button">Заказать обслуживание</button>
        </div>
      </section>
    </main>
  )
} 