import { MetadataRoute } from 'next'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecoolfix.uz'
  
  // Define your routes
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
} 