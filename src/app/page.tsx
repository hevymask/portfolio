import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: `The anonymous digital artist - ${env.TITLE}`,
}

export default function Page() {
  return (
    <>Hello World</>
  )
}
