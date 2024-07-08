'use client'
import React from 'react'

type Props = {
  text: string
  href: string
  hasArrow?: boolean
}

export default function PrimaryButtonLink({ text, href, hasArrow }: Props) {
  return (
    <a
      type="button"
      href={href}
      className="inline-flex items-center gap-x-2 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
      {text}
      {hasArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      )}
    </a>
  )
}
