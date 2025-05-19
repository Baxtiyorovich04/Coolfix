import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ремонт кондиционеров в Ташкенте | Профессиональный сервис Coolfix',
  description: 'Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества. Быстрое обслуживание. Доступные цены. Выезд мастера на дом. ☎ Звоните!',
  alternates: {
    canonical: 'https://coolfix.uz/remont-konditsionerov',
  },
}

export default function RemontKonditsionerov() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Ремонт кондиционеров в Ташкенте</h1>
          <p className="lead">Профессиональный ремонт кондиционеров с гарантией качества</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Наши услуги по ремонту кондиционеров</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Диагностика кондиционера</h3>
              <p>Бесплатная диагностика при ремонте. Определение точной причины неисправности.</p>
            </div>
            <div className="service-card">
              <h3>Ремонт сплит-систем</h3>
              <p>Профессиональный ремонт всех типов сплит-систем. Гарантия на все работы.</p>
            </div>
            <div className="service-card">
              <h3>Заправка фреоном</h3>
              <p>Заправка кондиционеров фреоном. Используем только качественный хладагент.</p>
            </div>
            <div className="service-card">
              <h3>Чистка кондиционера</h3>
              <p>Профессиональная чистка внутреннего и внешнего блока. Устранение запахов.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <ul>
            <li>Опытные мастера с сертификатами</li>
            <li>Гарантия на все виды работ</li>
            <li>Выезд мастера в день обращения</li>
            <li>Доступные цены на ремонт</li>
            <li>Используем оригинальные запчасти</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Нужен ремонт кондиционера?</h2>
          <p>Оставьте заявку, и мы перезвоним вам в течение 5 минут</p>
          <button className="cta-button">Заказать ремонт</button>
        </div>
      </section>
    </main>
  )
} 