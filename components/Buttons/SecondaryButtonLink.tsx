'use client'
import React from 'react'

type Props = {
  text: string
  link: string
}

export default function SecondaryButtonLink({ text, link }: Props) {
  return (
    <a
      type="button"
      href={link}
      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {text}
    </a>
  )
}
