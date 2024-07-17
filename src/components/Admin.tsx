'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const adminRoutes = [
  { name: 'Admin CPC', href: '/admin-cpc' },
  { name: 'Admin Futsal', href: '/admin-futsal' },
  { name: 'Admin LCT', href: '/admin-lct' },
  { name: 'Admin ML', href: '/admin-ml' },
]

interface AdminProps {
  children: React.ReactNode
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const Admin = ({ children, sidebarOpen, setSidebarOpen }: AdminProps) => {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-amber-200">
      <aside
        className={`fixed z-20 h-full w-64 bg-white p-4 text-gray-700 shadow-xl ${sidebarOpen ? '' : 'hidden md:block'}`}
      >
        <div className="mb-2 flex flex-col items-center">
          <Image
            src="/images/logo/computer-science-showdown.png"
            alt="Logo"
            width="80"
            height="80"
          />

          <h5 className="text-blue-gray-900 text-xl font-semibold">CSS</h5>
        </div>
        <nav className="text-blue-gray-700 flex flex-col gap-1 p-2 text-base font-normal">
          {adminRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`${pathname === route.href ? 'bg-cyan-100' : ''} flex items-center rounded-lg p-3 hover:bg-cyan-100`}
            >
              <span className="mr-4">{route.name}</span>
            </Link>
          ))}
          <hr className="border-blue-gray-50 my-2" />
          <button className="flex w-full items-center rounded-lg p-3 hover:bg-cyan-100">
            <svg
              className="mr-4 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Log Out
          </button>
        </nav>
      </aside>

      <main className="ml-0 flex-1 md:ml-64">{children}</main>
    </div>
  )
}

export default Admin
