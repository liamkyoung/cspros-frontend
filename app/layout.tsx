import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CS-Pros | Counter-Strike Pro Skin Database',
  description:
    'Live database that shows popular skins used by players in professional counter-strike matches.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Home</title>
      </Head>
      <body className={`${outfit.className} bg-gray-800 text-gray-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
