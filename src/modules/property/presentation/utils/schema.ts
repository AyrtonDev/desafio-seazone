import { z } from 'zod'

export const filterSchema = z.object({
  city: z.string().optional().default(''),
  state: z.string().optional().default(''),
  type: z.string().optional().default(''),
  priceMin: z.string().optional().default(''),
  priceMax: z.string().optional().default(''),
  capacity: z.string().optional().default(''),
  bedrooms: z.string().optional().default(''),
  amenities: z.array(z.string()).optional().default([]),
  onlyAvailable: z.boolean().optional().default(false),
})