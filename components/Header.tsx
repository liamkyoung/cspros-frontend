import React from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="flex items-center gap-16 bg-slate-600 p-4 px-10 md:px-20 mx-auto">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex items-center gap-8 text-lg font-medium hover:cursor-pointer">
        <Link href="/players">Players</Link>
        <Link href="/weapons">Weapons</Link>
        <Link href="/skins">Skins</Link>
      </div>
    </div>
  )
}
