import { FaTools } from 'react-icons/fa'
import Loading from './components/Loading'

export const metadata = {
  title: {
    default: 'Ремонт кондиционеров в Ташкенте – Coolfix | Срочный ремонт и обслуживание',
    template: '%s | Coolfix — Ремонт кондиционеров в Ташкенте'
  },
  description: 'Срочный ремонт и обслуживание кондиционеров в Ташкенте. Бесплатный выезд мастера. Гарантия до 12 месяцев. Цены от 50 000 сум. ☎ Звоните!',
  alternates: {
    canonical: 'https://coolfix.uz',
  },
  metadataBase: new URL('https://coolfix.uz'),
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#4e73df'
      }
    ]
  },
  manifest: '/site.webmanifest',
  keywords: [
    'ремонт кондиционеров ташкент',
    'ремонт сплит систем ташкент',
    'обслуживание кондиционеров ташкент',
    'заправка фреоном ташкент',
    'установка кондиционеров ташкент',
    'чистка кондиционеров ташкент',
    'ремонт холодильников ташкент',
    'ремонт стиральных машин ташкент',
    'coolfix ташкент',
    'кульфикс ташкент',
    'ремонт бытовой техники ташкент',
    'кондиционер тамирлаш ташкент',
    'сплит система тамирлаш ташкент',
    'кондиционер хизмат кўрсатиш ташкент',
    'фреон тўлдириш ташкент',
    'кондиционер ўрнатиш ташкент',
    'кондиционер тозалаш ташкент',
    'музлатгич тамирлаш ташкент',
    'кир ювиш машинаси тамирлаш ташкент',
    'кулфикс ташкент',
    'маиший техника тамирлаш ташкент',
    'кондиционер ремонт ташкент',
    'сплит система ремонт ташкент',
    'кондиционер сервис ташкент',
    'кондиционер монтаж ташкент',
    'кондиционер техник хизмат ташкент',
    'кондиционер мастера ташкент',
    'кондиционер уста ташкент',
    'кондиционер нарх ташкент',
    'кондиционер гарантия ташкент',
    'кондиционер бекор ташкент'
  ],
  authors: [{ name: 'Baxtiyorovich' }],
  creator: 'Coolfix',
  publisher: 'Coolfix',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://thecoolfix.uz',
    siteName: 'Coolfix — Ремонт кондиционеров в Ташкенте',
    title: 'Ремонт кондиционеров в Ташкенте — Coolfix | Профессиональный сервис',
    description: 'Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества. Быстрое обслуживание. Доступные цены. Выезд мастера на дом. ☎ Звоните!',
    images: [
      {
        url: 'https://thecoolfix.uz/coolfix_logo.png',
        width: 1200,
        height: 630,
        alt: 'Coolfix — Ремонт кондиционеров в Ташкенте',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coolfix — Ремонт Кондиционеров',
    description: 'Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества и честные цены.',
    images: ['https://thecoolfix.uz/coolfix_logo.png'],
  },
  verification: {
    google: '0lWEnCpFDT7oyG2n_B-meQPQyUeATLN18QShvPq_3so',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Basic SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecoolfix.uz/" />
        
        {/* Additional meta tags */}
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="theme-color" content="#4e73df" />
        <meta name="msapplication-TileColor" content="#4e73df" />
        <meta name="msapplication-TileImage" content="/icon.svg" />
      </head>
      <body>
        <Loading />
        {children}
      </body>
    </html>
  )
}
