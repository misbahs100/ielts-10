// app/page.tsx
import { Metadata } from 'next'
import { ProductPage } from './(components)/layout/MainLayout'
import { ProductData } from './types/product'
import { fetchProductData } from './lib/api'

export const revalidate = 3600 // 1 hour ISR

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchProductData()
  return {
    title: data.seo?.title || data.title,
    description: data.seo?.description || '',
    openGraph: {
      title: data.seo?.title,
      description: data.seo?.description,
    },
  }
}

export default async function Page() {
  const res = await fetchProductData();
  // const result: ProductData = data;
  const result: ProductData = res.data;
  console.log(result);

  return <ProductPage data={result} />
}
