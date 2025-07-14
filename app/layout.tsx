import Loading from "./components/Loading";

export const metadata = {
  title: 'The Cool Fix – Ремонт техники',
  description: 'Официальный сайт компании The Cool Fix. Профессиональный ремонт кондиционеров и бытовой техники в Ташкенте.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://thecoolfix.uz',
  },
  openGraph: {
    title: 'The Cool Fix',
    description: 'Профессиональный ремонт техники. Ташкент.',
    url: 'https://thecoolfix.uz',
    siteName: 'The Cool Fix',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Basic SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thecoolfix.uz/" />
        <meta name="description" content="Официальный сайт компании The Cool Fix. Профессиональный ремонт кондиционеров и бытовой техники в Ташкенте." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="The Cool Fix" />
        <meta property="og:description" content="Профессиональный ремонт техники. Ташкент." />
        <meta property="og:url" content="https://thecoolfix.uz" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Cool Fix" />
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Cool Fix",
            "url": "https://thecoolfix.uz",
            "logo": "https://thecoolfix.uz/logo.png",
            "description": "Ремонт кондиционеров и техники в Ташкенте",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tashkent",
              "addressCountry": "UZ"
            },
            "sameAs": [
              "https://t.me/coolfix",
              "https://instagram.com/coolfix"
            ]
          })
        }} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coolfix — Ремонт Кондиционеров" />
        <meta
          name="twitter:description"
          content="Профессиональный ремонт кондиционеров в Ташкенте. Гарантия качества и честные цены."
        />
        <meta
          name="twitter:image"
          content="https://thecoolfix.uz/coolfix_logo.png"
        />

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
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <Loading />
        {children}
      </body>
    </html>
  );
}
