import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.URL,
      lastModified: new Date('2026-10-11')
    }
  ]
}
