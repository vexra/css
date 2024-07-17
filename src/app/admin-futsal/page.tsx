'use client'

import Admin from '@/components/Admin'
import Image from 'next/image'
import { useState } from 'react'

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Admin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
      <header className="fixed left-0 right-0 top-0 z-30 md:left-72">
        <div
          id="header"
          className="relative flex items-center bg-white py-2 md:p-4"
        >
          <div className="absolute left-4 top-4 z-50 md:hidden">
            <i
              id="hamburger"
              className="fa-solid fa-bars-staggered text-2xl"
            ></i>
          </div>
          <div
            id="title"
            className="flex w-full flex-col items-center px-12 md:flex-row md:items-center md:justify-between"
          >
            <h3 className="text-center text-2xl font-semibold text-secondary">
              Payment Information Futsal
            </h3>
            <h3 className="text-2xl font-semibold text-secondary">Admin</h3>
          </div>
        </div>
      </header>
      <div className="p-4 pt-24 md:container">
        <div className="">
          <div className="mt-10 w-full flex-nowrap justify-center overflow-hidden md:mt-5">
            <div className="h-80 overflow-x-auto bg-white">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="border-b px-8 py-3">Divisi</th>
                    <th className="border-b px-8 py-3">Nama Tim</th>
                    <th className="border-b px-8 py-3">Nama Pendaftar</th>
                    <th className="border-b px-8 py-3">Bukti Pembayaran</th>
                    <th className="border-b px-8 py-3">Status Pembayaran</th>
                    <th className="border-b px-8 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b px-8 py-3 text-center">Futsal</td>
                    <td className="border-b px-8 py-3 text-center">
                      asal-asalan
                    </td>
                    <td className="border-b px-8 py-3 text-center">Qee</td>
                    <td className="border-b px-8 py-3 text-center">
                      <div className="flex items-center justify-center">
                        <Image src="" alt="" width="100" height="100" />
                      </div>
                    </td>
                    <td className="border-b px-8 py-3 text-center">
                      <span className="rounded-full bg-red-100 px-2 py-1 font-semibold text-red-500">
                        Pending
                      </span>
                    </td>
                    <td className="border-b px-8 py-3 text-center">
                      <button className="w-24 justify-between whitespace-nowrap rounded-lg bg-emerald-400 bg-opacity-80 px-2 py-1 font-bold text-white hover:bg-opacity-100">
                        Detail
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>

                      <button className="mt-2 w-24 justify-between whitespace-nowrap rounded-lg bg-emerald-400 bg-opacity-80 px-2 py-1 font-bold text-white hover:bg-opacity-100">
                        Update
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  )
}

export default Page
