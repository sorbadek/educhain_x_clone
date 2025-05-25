import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EDUCHAIN X CLONE',
  description: 'Created BY Educhain Frontend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
