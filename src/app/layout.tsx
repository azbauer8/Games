import "./globals.css"

import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Games</title>
      </head>
      <body className={inter.className}>
        <div className="relative mx-auto flex max-w-[115rem] flex-col md:flex-row">
          <Sidebar />
          <main className=" flex-auto p-5 pt-8 md:pt-12">{children}</main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
