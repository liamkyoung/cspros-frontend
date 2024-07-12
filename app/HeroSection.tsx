import React from 'react'
import Link from 'next/link'

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <React.Fragment>
      <>
        <section className="pb-20 bg-gray-800">
          <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
            <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <span className="text-lg font-bold text-blue-400 p-3 bg-white rounded-lg">
                  CS2 Skin Database
                </span>
                <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
                  See The Skins Pro Players Use
                </h2>
                <p className="mb-12 lg:mb-16 2xl:mb-24 text-xl text-gray-100">
                  Want to use the same weapon skins as your CS2 esport players?
                  See what they&apos;re rocking here.
                </p>
                <Link
                  className="inline-block px-12 py-5 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                  href="/players"
                >
                  See All Players
                </Link>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <img className="w-full" src="hero_image2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  )
}
