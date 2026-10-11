import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata = (() => {
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
      <main className='lg:border lg:my-25 lg:mx-auto lg:py-15 lg:px-12.5 lg:w-3xl p-10 h-[200svh]'>
        <div className='border-b py-10'>

        </div>
      </main>
    </div>
  )
}
