import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { env } from '@/lib/env'

// Design
import { Oxanium } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme'
import '@/index.css'

const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: env.TITLE,
    template: `%s - ${env.TITLE}`,
  },

  description: "Hevy Mask's portfolio page.",
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
