import login from '@/actions/login'
import logout from '@/actions/logout'
import { currentUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'

export default async function Navbar() {
  const user = await currentUser()

  return (
    <div className="navbar w-full justify-between px-2 lg:px-4">
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/images/logo/computer-science-showdown.png"
            alt="Computer Science Showdown Logo"
            width={64}
            height={64}
            className="mr-4"
          />
        </Link>

        <ul className="menu menu-horizontal hidden lg:block">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button">
                Lomba
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href="/lct">LCT</Link>
                </li>
                <li>
                  <Link href="/cpc">CPC</Link>
                </li>
                <li>
                  <Link href="/futsal">Futsal</Link>
                </li>
                <li>
                  <Link href="/ml">ML</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/">Bazar</Link>
          </li>
          <li>
            <Link href="/">Pengumuman Lomba</Link>
          </li>
          <li>
            <Link href="/">Administrasi</Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block">
        {!!user ? (
          <>
            <form action={logout}>
              <button>Keluar</button>
            </form>
          </>
        ) : (
          <>
            <form action={login}>
              <button>Masuk</button>
            </form>
          </>
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
    </div>
  )
}
