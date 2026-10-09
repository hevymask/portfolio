import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found',
  description: "The page you are looking for doesn't exist."
}

export default function Page() {
  return (
    <main className='flex min-h-svh flex-col items-center justify-center p-12'>
      <div className='flex gap-4 items-center'>
        <h1 className='text-3xl'>404</h1>
        <h2 className='text-2xl'>Not Found</h2>
      </div>
    </main>
  )
}
