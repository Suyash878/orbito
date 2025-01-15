import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orbito360 | Deploy. Development. Marketing.",
  description: "Where vision meets innovation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={spaceGrotesk.className}>
        <div className="min-h-screen bg-gradient-to-b from-black to-blue-950">
          {children}
        </div>
      </body>
    </html>
  )
}

