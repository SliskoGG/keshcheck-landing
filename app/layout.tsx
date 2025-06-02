import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KeshCheck - AI Finansijski Savetnik',
  description: 'Tvoj AI drugar za pametne finansije! Zaboravi dosadne finansijske aplikacije - KeshCheck koristi AI koji te razume i motiviše sa dozom humora.',
  keywords: 'finansije, AI, štednja, budžet, troškovi, balkanske finansije, pametno štedenje',
  authors: [{ name: 'KeshCheck Team' }],
  openGraph: {
    title: 'KeshCheck - AI Finansijski Savetnik',
    description: 'Tvoj AI drugar za pametne finansije! Zaboravi dosadne finansijske aplikacije.',
    type: 'website',
    locale: 'sr_RS',
    siteName: 'KeshCheck'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeshCheck - AI Finansijski Savetnik',
    description: 'Tvoj AI drugar za pametne finansije!'
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className="antialiased">{children}</body>
    </html>
  )
}
