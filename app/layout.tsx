import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chess Learning Platform',
  description: 'Learn chess with interactive lessons',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))]`}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/lessons/coordinate-trainer" className="hover:text-gray-200">Coordinate Trainer</a></li>
              <li><a href="/lessons/alkhine-defense" className="hover:text-gray-200">Alekhine's Defense</a></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto p-4 max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  )
}