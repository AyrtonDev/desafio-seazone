const URL = process.env.NEXT_PUBLIC_BASE_URL

export const baseUrl = 
  process.env.NODE_ENV === 'production'
    ? URL!
    : 'http://localhost:3000/api/property/';