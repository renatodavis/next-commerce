import type { Metadata } from 'next'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next commerce',
  description: 'Renato Davis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className,'bg-slate-600 h-screen')}>
        <NavBar/>
        <main className='p-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
