import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { env } from '@/lib/env'

// Design
import { Oxanium } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme'
import '@/index.css'

const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: env.URL,

  title: {
    default: env.TITLE,
    template: `%s - ${env.TITLE}`,
  },

  description: env.DESCRIPTION,

  authors: {
    name: env.NAME
  },

  keywords: [env.NAME, 'Portfolio', 'The anonymous digital artist'],

  openGraph: {
    title: env.SUBTITLE,
    description: env.DESCRIPTION,
    siteName: env.TITLE,
    locale: "en_US",
    type: 'profile'
  },

  twitter: {
    site: env.TWITTER_ACCOUNT,
    creator: env.TWITTER_ACCOUNT,
    description: env.DESCRIPTION,
    title: env.SUBTITLE,
    card: 'summary'
  }
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={cn('h-full antialiased', oxanium.variable)}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col'>
        <ThemeProvider/>
        {children}
      </body>
    </html>
  )
}
