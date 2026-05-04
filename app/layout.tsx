import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Recticode - Practice Debugging Real Code',
  description: 'Most coding platforms teach algorithms. Real engineering jobs require understanding messy codebases, tracing bugs, and fixing real systems. Recticode lets you practice that.',
  icons: {
    icon: [
      {
        url: '/recticode-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/recticode-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/recticode-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4C967PR2VD" />
      <Script id="google-analytics">
          {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', 'G-4C967PR2VD');
                    `}
      </Script>
    </html>
  )
}
