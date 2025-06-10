import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimationPreloader } from "@/components/animation-preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI×プロダクト開発スクール",
  description: "非エンジニアのためのAI活用×プロダクト開発スクール",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" href="/images/rocket.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AnimationPreloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
