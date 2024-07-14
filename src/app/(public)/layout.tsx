import Footer from '@/components/public/footer'
import Navbar from '@/components/public/navbar'
import { currentRole } from '@/lib/auth'
import Link from 'next/link'
import { FaX } from 'react-icons/fa6'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const role = await currentRole()

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <div>{children}</div>
        <Footer />
      </div>
      <div className="drawer-side z-10">
        <section className="flex h-full w-screen flex-col gap-4 bg-base-100 px-4 py-6">
          {/* Sidebar content here */}
          <div className="flex self-end">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaX className="h-6 w-6" />
            </label>
          </div>

          <ul className="flex flex-col gap-4 text-center">
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
              <Link href="/pengumuman-lomba">Pengumuman Lomba</Link>
            </li>
            <li>
              {role === 'ADMIN' && <Link href="/admin">Administrasi</Link>}
              {role === 'USER' && <Link href="/dashboard">Administrasi</Link>}
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
