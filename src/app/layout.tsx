import "@/styles.css"

import { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "@/config"
import clsx from "clsx"

import Sidebar from "@/app/_layout/Sidebar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
  },
}
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "bg-background text-foreground antialiased",
          inter.className
        )}
      >
        <div className="relative mx-auto flex max-w-[115rem] flex-col md:flex-row">
          <Sidebar />
          <main className=" flex-auto p-5 pt-8 md:pt-12">{children}</main>
        </div>
      </body>
    </html>
  )
}
