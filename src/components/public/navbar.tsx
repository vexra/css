import logout from '@/actions/logout'
import { currentUser } from '@/lib/auth'
import { UserRole } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'

export default async function Navbar() {
  const user = await currentUser()

  return (
    <header className="bg-gradient-css navbar w-full justify-between px-4 py-4 lg:px-8">
      <div>
        <Link href="/">
          <Image
            src="/images/logo/computer-science-showdown.png"
            alt="Computer Science Showdown Logo"
            width={80}
            height={80}
            className="mr-4"
          />
        </Link>

        <ul className="menu menu-horizontal hidden lg:flex">
          <li>
            <Link href="/#about" className="text-base font-medium text-zinc-50">
              About
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-bottom dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="text-base font-medium text-zinc-50"
              >
                Lomba
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-zinc-50 bg-opacity-5 p-2 shadow backdrop-blur-md"
              >
                <li>
                  <Link
                    href="/lct"
                    className="text-base font-medium text-zinc-50"
                  >
                    LCT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cpc"
                    className="text-base font-medium text-zinc-50"
                  >
                    CPC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/futsal"
                    className="text-base font-medium text-zinc-50"
                  >
                    Futsal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ml"
                    className="text-base font-medium text-zinc-50"
                  >
                    ML
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/pengumuman-lomba"
              className="text-base font-medium text-zinc-50"
            >
              Pengumuman Lomba
            </Link>
          </li>
          {/* <li>
            {user?.role === UserRole.ADMIN && (
              <Link
                href="/admin"
                className="text-base font-medium text-zinc-50"
              >
                Administrasi
              </Link>
            )}
            {user?.role === UserRole.USER && (
              <Link
                href="/dashboard"
                className="text-base font-medium text-zinc-50"
              >
                Administrasi
              </Link>
            )}
          </li> */}
        </ul>
      </div>

      <div className="hidden lg:block">
        {!!user ? (
          <>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-lg bg-[#3A0CA3] px-4 py-2.5 text-center text-sm font-bold text-zinc-50"
              >
                Keluar
              </button>
            </form>
          </>
        ) : (
          <Link
            href="/login"
            className="rounded-lg bg-[#3A0CA3] px-4 py-2.5 text-center text-sm font-bold text-zinc-50"
          >
            Masuk
          </Link>
        )}
      </div>

      <div className="lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <FaBars className="h-6 w-6" />
        </label>
      </div>
    </header>
  )
}
