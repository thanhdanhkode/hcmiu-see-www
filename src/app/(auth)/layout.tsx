import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/features/Landing/Header'
import { Footer } from '@/templates/Footer'
import { NavbarMobile } from '@/templates/Navbar'
import { NextIntlClientProvider } from 'next-intl'
import { Roboto, Poppins } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-roboto',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-poppins',
})

export default async function PublicRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <head />
      <body className={` ${roboto.className} ${roboto.variable} antialiased relative w-screen h-screen`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute={'class'}
            defaultTheme={'light'}
            enableSystem
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
