import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Footer({}: Props) {
  return (
    <React.Fragment>
      <>
        <section className="py-20 2xl:py-40 bg-gray-800">
          <div className="container mx-auto px-4 mb-12 md:mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <Link
                className="inline-block mb-20 text-white text-xl font-bold"
                href="/"
              >
                <img
                  className="h-20"
                  src="cspros-logo.png"
                  alt=""
                  width="auto"
                />
              </Link>
              <ul className="mb-12 md:mb-20 flex flex-wrap items-center justify-center space-x-6 md:justify-between text-lg">
                <li className="mb-4 md:mb-0">
                  <Link
                    className="font-bold text-white hover:text-gray-100"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4 md:mb-0">
                  <Link
                    className="font-bold text-white hover:text-gray-100"
                    href="/players"
                  >
                    Players
                  </Link>
                </li>
                <li className="mb-4 md:mb-0">
                  <Link
                    className="font-bold text-white hover:text-gray-100"
                    href="/weapons"
                  >
                    Weapons
                  </Link>
                </li>
                <li className="mb-4 md:mb-0">
                  <Link
                    className="font-bold text-white hover:text-gray-100"
                    href="/skins"
                  >
                    Skins
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  )
}
