import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WaseerHost - Blazing-fast hosting for modern sites',
  description: 'NVMe storage, free SSL, daily backups, and 24/7 human support. Launch your site in minutes, keep it fast forever. Start for $1.',
  keywords: 'web hosting, shared hosting, cloud hosting, VPS, dedicated servers, NVMe, SSL, backups, cPanel, WordPress hosting',
  authors: [{ name: 'WaseerHost' }],
  creator: 'WaseerHost',
  publisher: 'WaseerHost',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://waseerhost.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WaseerHost - Blazing-fast hosting for modern sites',
    description: 'NVMe storage, free SSL, daily backups, and 24/7 human support. Launch your site in minutes, keep it fast forever.',
    url: 'https://waseerhost.com',
    siteName: 'WaseerHost',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WaseerHost - Professional Web Hosting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaseerHost - Blazing-fast hosting for modern sites',
    description: 'NVMe storage, free SSL, daily backups, and 24/7 human support. Launch your site in minutes, keep it fast forever.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
