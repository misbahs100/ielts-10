// lib/api.ts

import { ProductData } from "../types/product"

export async function fetchProductData(lang = 'en'): Promise<ProductData> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        accept: 'application/json',
      },
      next: { revalidate: 3600 }, // for ISR
    }
  )

  if (!res.ok) throw new Error('Failed to fetch product data')

  return res.json()
}
