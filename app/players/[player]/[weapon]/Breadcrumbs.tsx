import React from 'react'
import Link from 'next/link'

type Props = {
  playerName: string
  weaponName: string
}

export default function Breadcrumbs({ playerName, weaponName }: Props) {
  return (
    <span className="text-xl gap-2 hidden lg:flex">
      <Link className="underline text-sky-500" href={`/players`}>
        players
      </Link>
      &gt;
      <Link className="underline text-sky-500" href={`/players/${playerName}/`}>
        {playerName}
      </Link>{' '}
      &gt; {weaponName}
    </span>
  )
}
