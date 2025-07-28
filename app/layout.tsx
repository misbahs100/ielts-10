import Footer from './(components)/layout/Footer'
import './globals.css'
import { ReactNode } from 'react'
import { fetchProductData } from './lib/api'

export async function generateMetadata() {
  const product = await fetchProductData('en')

  return {
    title: product?.title || 'IELTS Course - 10MS',
    description: product?.description || 'Product page for IELTS Course by Munzereen Shahid on 10 Minute School',
    // other seo tags will be added here.
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
