import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Task 1',
  description: 'Food Blog Landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
