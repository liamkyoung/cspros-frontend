'use client'
import React from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { useState } from 'react'

type Props = {}

export default function Header({}: Props) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      {/* {Desktop Nav} */}
      <nav className="relative bg-gray-800">
        <div className="flex py-8 px-8 lg:px-32 justify-between items-center">
          <Link className="text-2xl text-white font-bold" href="/">
            <img className="h-12" src="cspros-logo.png" alt="" width="auto" />
          </Link>
          <div className="lg:hidden" onClick={() => setOpen(!isOpen)}>
            <button className="p-2">
              <svg
                className="w-10 h-3"
                width={39}
                height={13}
                viewBox="0 0 39 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={39} height={2} rx={1} fill="#C4C4C4" />
                <rect
                  x={19}
                  y={11}
                  width={20}
                  height={2}
                  rx={1}
                  fill="#C4C4C4"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <ul className="flex items-center text-white space-x-10">
              <li>
                <Link className="text-white font-bold text-lg" href="/players">
                  Players
                </Link>
              </li>
              <span>
                <svg
                  width={5}
                  height={5}
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                </svg>
              </span>
              <li>
                <Link className="text-white font-bold text-lg" href="/weapons">
                  Weapons
                </Link>
              </li>
              <span>
                <svg
                  width={5}
                  height={5}
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B" />
                </svg>
              </span>
              <li>
                <Link className="text-white font-bold text-lg" href="/skins">
                  Skins
                </Link>
              </li>
              <span></span>
            </ul>
          </div>
        </div>
      </nav>

      {/* {Mobile Nav} */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-800 opacity-80"
          onClick={() => {
            setOpen(false)
          }}
        />
        <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto font-semibold">
          <div className="flex items-center mb-16 pr-6">
            <Link
              className="ml-10 mr-auto text-2xl text-gray-800 font-bold"
              href="/"
            >
              <img className="h-24" src="cspros-logo.png" alt="" width="auto" />
            </Link>
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <Link
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  href="#"
                >
                  Players
                </Link>
              </li>
              <li className="mb-1 px-10">
                <Link
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  href="#"
                >
                  Weapons
                </Link>
              </li>
              <li className="mb-1 px-10">
                <Link
                  className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl"
                  href="#"
                >
                  Skins
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
