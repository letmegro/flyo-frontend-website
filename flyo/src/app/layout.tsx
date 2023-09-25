import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flyo',
  description: 'Flyo website',
}

 
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'normal'],
  variable: '--open_sans'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      
      <body className={` dark:bg-darkBlue dark:text-white ${openSans.className}`}>{children}</body>
    </html>
  )
}
