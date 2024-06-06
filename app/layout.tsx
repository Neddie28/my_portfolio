import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
<link rel="icon" type="image/svg+xml" href="/logo.svg" />

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chinedu |  Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
