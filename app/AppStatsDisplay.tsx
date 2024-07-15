'use client'
import { AppStats } from '@/types/viewmodels/types'
import { getAppStats } from '@/utils/data/General'
import { useEffect, useState } from 'react'
import React from 'react'

type Props = {}

export default function AppStatsDisplay({}: Props) {
  const [stats, setStats] = useState<AppStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const apiData = await getAppStats()
      setStats(apiData)
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <React.Fragment>
      <>
        {stats && (
          <section className="py-20 2xl:py-40 bg-gray-800">
            <div className="max-w-7xl px-4 mx-auto">
              <div>
                <div className="flex flex-wrap -mx-6 lg:-mx-14">
                  <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        className="size-9"
                      >
                        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
                      </svg>
                    </span>
                    <div className="py-px mb-12 bg-gray-500" />
                    <h3 className="mt-12 mb-8 text-2xl font-bold font-heading text-white">
                      {stats?.totalGames}
                    </h3>
                    <p className="text-xl text-gray-200 font-medium">Games</p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 lg:mb-0">
                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        className="size-9"
                      >
                        <path d="M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H32C14.3 64 0 78.3 0 96V208c0 17.7 14.3 32 32 32H42c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352H321.4c23.7 0 44.8-14.9 52.7-37.2L400.9 240H432c8.5 0 16.6-3.4 22.6-9.4L477.3 208H544c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H528V56zM321.4 304H229l16-64h105l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zM80 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                      </svg>
                    </span>
                    <div className="py-px mb-12 bg-gray-500" />
                    <h3 className="mt-12 mb-8 text-2xl font-bold font-heading text-white">
                      {stats?.totalSkins}
                    </h3>
                    <p className="text-xl text-gray-200 font-medium">
                      Skins Used
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14 mb-16 md:mb-0">
                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="size-9"
                      >
                        <path d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM96 256a64 64 0 1 1 128 0A64 64 0 1 1 96 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </span>
                    <div className="py-px mb-12 bg-gray-500" />
                    <h3 className="mt-12 mb-8 text-2xl font-bold font-heading text-white">
                      {stats?.totalKills}
                    </h3>
                    <p className="text-xl text-gray-200 font-medium">
                      Kills Logged
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/4 px-6 lg:px-14">
                    <span className="flex mb-10 justify-center items-center w-20 h-20 bg-pink-500 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="size-9"
                      >
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                    </span>
                    <div className="py-px mb-12 bg-gray-500" />
                    <h3 className="mt-12 mb-8 text-2xl font-bold font-heading text-white">
                      {stats?.totalMinutes}
                    </h3>
                    <p className="text-xl text-gray-200 font-medium">
                      Minutes Analyzed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    </React.Fragment>
  )
}
