//import React from 'react';
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <Link href='/'>Etusivu</Link>
      <Link href='/hallitus'>Hallitus</Link>
      <Link href='/saannot'>Säännöt</Link>
      <Link href='/ohjesaannot'>Ohjesäännöt</Link>
      <Link href='/jasenyys'>Jäsenyys</Link>
      <Link href='/killat'>Killat</Link>
    </nav>
  )
}

export default function RootLayout({children}) {
    return (
      <html lang="en">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    )
}