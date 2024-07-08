import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Logo({}: Props) {
  return (
    <div>
      <Image
        src="/cs-pros-logo.png"
        alt="cs-pros logo"
        width="50"
        height="50"
      />
    </div>
  )
}

Logo
