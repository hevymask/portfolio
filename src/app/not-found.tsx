import type { Metadata } from 'next'
import { ScrambleTextAnimation } from '@/components/animation/scrambleText'

export const metadata: Metadata = (() => {
  const title = 'Not Found'
  const description = "The page you are looking for doesn't exist."

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  }
})()

export default function Page() {
  return (
    <main className='flex min-h-svh flex-col items-center justify-center p-8'>
      <p className='flex gap-4 items-center'>
        <ScrambleTextAnimation duration={450} className='text-3xl' text='404' />
        <ScrambleTextAnimation duration={450} className='text-2xl' text='Not Found' />
      </p>
    </main>
  )
}
