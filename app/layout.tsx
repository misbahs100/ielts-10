import Footer from './(components)/layout/Footer'
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'IELTS Course - 10MS',
  description: 'Product page for IELTS Course by Munzereen Shahid on 10 Minute School',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
