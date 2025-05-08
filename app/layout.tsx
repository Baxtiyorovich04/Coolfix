export const metadata = {
  title: 'Home | Coolfix',
  description: 'Welcome to Coolfix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
