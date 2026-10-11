import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata: Metadata = (() => {
  const subtitle = env.SUBTITLE

  return {
    title: `${subtitle} - ${env.TITLE}`,
    openGraph: { title: subtitle },
    twitter: { title: subtitle },
  }
})()

export default function Page() {
  return (
    <div className='min-h-svh'>
      <main className='md:my-[7.5%] md:mx-[10%] py-15 md:px-12.5 px-5 md:border h-[200svh]'>
        Hello World
      </main>
    </div>
  )
}
