import React from 'react'
import Link from 'next/link'

export const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/teste">Teste</Link>
        </li>
      </ul>
    </nav>
  )
}
