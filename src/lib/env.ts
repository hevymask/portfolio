import { z } from 'zod'

const envSchema = z.object({
  TITLE: z.string()
})

export const env = envSchema.parse(process.env)
