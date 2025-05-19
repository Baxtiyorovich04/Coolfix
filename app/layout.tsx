import { FaTools } from 'react-icons/fa'
import Loading from './components/Loading'

export const metadata = {
  title: {
    default: 'Coolfix — Ремонт Кондиционеров',
    template: '%s | Coolfix'
  },
  description: 'Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества и честные цены.',
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
    // Russian keywords
    'Ремонт кондиционеров',
    'Ремонт холодильников',
    'Ташкент',
    'Coolfix',
    'coolfix',
    'coolfix.uz',
    'кульфикс',
    'coolfix toshkent',
    'кулфикс ташкент',
    'кулфикс ташкент ремонт',
    'кулфикс ташкент обслуживание',
    'кулфикс ташкент установка',
    'кулфикс ташкент заправка',
    'обслуживание кондиционеров',
    'установка кондиционеров',
    'ремонт бытовой техники',
    'Ремонт стиральных машин',
    'Кондиционерный сервис в Ташкенте',
    'Ремонт кондиционеров на дому',
    'Профессиональный ремонт холодильников',
    'Услуги по ремонту стиральных машин',
    'Обслуживание и чистка кондиционеров',
    'Установка и настройка кондиционера',
    'Ремонт бытовой техники всех марок',
    'Заправка фреоном для кондиционеров',
    'Диагностика и профилактика кондиционеров',
    'Ремонт морозильных камер и холодильников',
    'Техническое обслуживание кондиционеров',
    'Экспресс ремонт холодильников и морозильников',
    'Срочный ремонт стиральных машин в Ташкенте',
    'кульфикс',
    'кульфикс ташкент',
    'кульфикс ташкент ремонт',
    'кульфикс ташкент обслуживание',
    'кульфикс ташкент установка',
    'кульфикс ташкент заправка',
    
    // Uzbek keywords
    'Konditsioner ta\'mirlash',
    'Muzlatkich ta\'mirlash',
    'Toshkent',
    'Coolfix',
    'Konditsioner xizmati',
    'Konditsioner o\'rnatish',
    'Maishiy texnika ta\'mirlash',
    'Konditsioner servisi',
    'Konditsioner tozalash',
    'Konditsioner zaryadlash',
    'Muzlatkichni uyda ta\'mirlash',
    'Muzlatkich o\'rnatish',
    'Konditsioner ta\'mirlash va xizmat ko\'rsatish',
    'Toshkentda konditsioner o\'rnatish va ta\'mirlash',
    'Muzlatkichni uyda ta\'mirlash',
    'Stiralka ta\'mirlash xizmati',
    'Konditsioner tozalash va gaz to\'ldirish',
    'Maishiy texnika ta\'mirlash va diagnostika',
    'Konditsioner sovutish tizimi to\'liq xizmat ko\'rsatish',
    'Muzlatkich kompressor ta\'miri',
    'Konditsioner o\'rnatish va sozlash',
    'Ekspress xizmat - Tezkor ta\'mirlash',
    'Konditsioner ventilyatsiya tizimi tozalash',
    'Konditsioner freon zaryadlash',
    'Muzlatkich termostat va dvigatel ta\'mirlash'
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
    url: 'https://coolfix.uz',
    siteName: 'Coolfix',
    title: 'Coolfix — Ремонт Кондиционеров',
    description: 'Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества и честные цены.',
    images: [
      {
        url: 'https://coolfix.uz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Coolfix — Ремонт Кондиционеров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coolfix — Ремонт Кондиционеров',
    description: 'Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества и честные цены.',
    images: ['https://coolfix.uz/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
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
        <link rel="canonical" href="https://coolfix.uz" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
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
