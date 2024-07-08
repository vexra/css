import Footer from '@/components/public/footer'
import Navbar from '@/components/public/navbar'
import Navlink from '@/components/public/navlink'
import { FaX } from 'react-icons/fa6'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        <div className="bg-zinc-100 dark:bg-zinc-900">{children}</div>
        <Footer />
      </div>
      <div className="drawer-side z-10">
        <section className="flex h-full w-screen flex-col gap-4 bg-zinc-50 p-4 dark:bg-zinc-950">
          {/* Sidebar content here */}
          <div className="flex self-end">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <span className="sr-only">Close main menu</span>
              <FaX className="inline-block h-8 w-8 stroke-current font-bold" />
            </label>
          </div>

          <Navlink href="/about" text="About" />
          <Navlink href="/lomba" text="Lomba" />
          <Navlink href="/bazar" text="Bazar" />
          <Navlink href="/pengumuman-lomba" text="Pengumuman Lomba" />
          <Navlink href="/administrasi" text="Administrasi" />
        </section>
      </div>
    </div>
  )
}
