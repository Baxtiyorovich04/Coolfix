import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml')
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')

  return new NextResponse(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 