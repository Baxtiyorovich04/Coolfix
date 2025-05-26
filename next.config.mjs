/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_source',
          },
        ],
        permanent: true,
        destination: '/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'ref',
          },
        ],
        permanent: true,
        destination: '/:path*',
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.thecoolfix.uz',
          },
        ],
        permanent: true,
        destination: 'https://thecoolfix.uz/:path*',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Link',
            value: '<https://thecoolfix.uz>; rel="canonical"',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ]
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // Add trailing slash configuration
  trailingSlash: true,
}

export default nextConfig;
