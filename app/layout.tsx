import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

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
      <Image
          src="/assets/icons/blob.svg"
          alt="blob image"
          width={735}
          height={700}
          className="absolute w-full md:w-1/2 z-40 right-0 -top-1/5 overflow-hidden"
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
