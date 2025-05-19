import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Установка кондиционеров в Ташкенте | Профессиональный монтаж Coolfix',
  description: 'Профессиональная установка кондиционеров в Ташкенте. Гарантия качества монтажа. Быстрая установка. Доступные цены. Выезд специалистов на дом. ☎ Звоните!',
  alternates: {
    canonical: 'https://coolfix.uz/ustanovka-konditsionerov',
  },
}

export default function UstanovkaKonditsionerov() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Установка кондиционеров в Ташкенте</h1>
          <p className="lead">Профессиональный монтаж кондиционеров с гарантией качества</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Услуги по установке кондиционеров</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Стандартный монтаж</h3>
              <p>Установка кондиционера в стандартных условиях. Включает все необходимые работы.</p>
            </div>
            <div className="service-card">
              <h3>Нестандартный монтаж</h3>
              <p>Установка в сложных условиях. Высотные работы. Дополнительные коммуникации.</p>
            </div>
            <div className="service-card">
              <h3>Перенос кондиционера</h3>
              <p>Демонтаж и установка на новое место. Сохранение работоспособности.</p>
            </div>
            <div className="service-card">
              <h3>Мульти-сплит системы</h3>
              <p>Установка мульти-сплит систем. Профессиональный монтаж нескольких блоков.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>Процесс установки</h2>
          <ol>
            <li>Выезд специалиста для оценки</li>
            <li>Выбор оптимального места установки</li>
            <li>Монтаж внутреннего и внешнего блока</li>
            <li>Прокладка коммуникаций</li>
            <li>Вакуумирование и заправка фреоном</li>
            <li>Проверка работоспособности</li>
          </ol>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2>Преимущества работы с нами</h2>
          <ul>
            <li>Опытные монтажники</li>
            <li>Гарантия на монтаж</li>
            <li>Современное оборудование</li>
            <li>Чистый монтаж</li>
            <li>Доступные цены</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Нужна установка кондиционера?</h2>
          <p>Оставьте заявку, и мы перезвоним вам в течение 5 минут</p>
          <button className="cta-button">Заказать установку</button>
        </div>
      </section>
    </main>
  )
} 