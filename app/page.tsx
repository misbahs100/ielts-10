// app/page.tsx
import { Metadata } from 'next'
import Skeleton from './(components)/ui/Skeleton'
import { fetchProductData } from './lib/api'
import { ProductData, Seo } from './types/product'
import { ProductPage } from './(components)/layout/MainLayout'
import { genersateMetadata } from './lib/seo'

export async function generateMetadata(seo: Seo): Promise<Metadata> {
  try {
    const res = await fetchProductData('en')
    const data: ProductData = res.data;
    return genersateMetadata(data.seo)
  } catch {
    return {
      title: 'IELTS Course - 10MS',
      description: 'Product page',
    }
  }
}

export default async function Page() {
  let data: ProductData | null = null

  try {
    data = await fetchProductData('en')
    const res = await fetchProductData('en')
    data = res.data;
  } catch (e) {
    // Handle fetch error if needed
  }

  if (!data) {
    return (
      <main className="max-w-screen-xl mx-auto p-4">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-48 w-full" />
      </main>
    )
  }

  return <ProductPage data={data} />
}
