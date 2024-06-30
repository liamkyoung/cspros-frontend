import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Logo({}: Props) {
  return (
    <div>
      <Image src="/cspros-logo.png" alt="cs-pros logo" width="75" height="75" />
    </div>
  )
}

Logo
