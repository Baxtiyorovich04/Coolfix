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
      // Редирект с www на без www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.coolfix.uz',
          },
        ],
        permanent: true,
        destination: 'https://coolfix.uz/:path*',
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
            value: '<https://coolfix.uz>; rel="canonical"',
          },
        ],
      },
    ]
  },
}

export default nextConfig;
