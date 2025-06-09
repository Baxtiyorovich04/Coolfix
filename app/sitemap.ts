import { MetadataRoute } from 'next'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecoolfix.uz'
  
  // Define your routes
  const routes = [
    '',
    '/services',
    '/contacts',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as ChangeFreq,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 