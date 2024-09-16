import { NextUIProvider } from '@nextui-org/react'
import '../css/main.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body>{children}</body>
      </NextUIProvider>
    </html>
  )
}
