import Image from 'next/image'
import Link from 'next/link'
import {
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLocationDot,
  FaTiktok,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-gradient-css p-4 lg:px-16 lg:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section>
          <div className="flex items-center gap-8">
            <Image
              src="/images/logo/computer-science-showdown.png"
              alt="Computer Science Showdown Logo"
              width={80}
              height={80}
            />

            <Image
              src="/images/logo/himakom.png"
              alt="Himakom Logo"
              width={60}
              height={60}
            />
          </div>

          <div className="mt-2 w-min">
            <p className="text-base font-normal text-zinc-50">
              Himpunan Mahasiswa Jurusan Ilmu Komputer
            </p>

            <section className="mt-4 flex items-center gap-7">
              <Link
                href="https://www.instagram.com/himakomunila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram Himakom</span>
                <FaInstagram className="h-6 w-6 text-zinc-50" />
              </Link>

              <Link
                href="https://www.tiktok.com/@css.himakom.unila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Tiktok Himakom</span>
                <FaTiktok className="h-6 w-6 text-zinc-50" />
              </Link>

              <Link
                href="https://x.com/himakom_unila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">X Himakom</span>
                <FaXTwitter className="h-6 w-6 text-zinc-50" />
              </Link>

              <Link
                href="https://himakom.fmipa.unila.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Website Himakom</span>
                <FaGlobe className="h-6 w-6 text-zinc-50" />
              </Link>

              <Link
                href="https://www.youtube.com/c/himakommedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Youtube Himakom</span>
                <FaYoutube className="h-8 w-8 text-zinc-50" />
              </Link>
            </section>
          </div>
        </section>

        <section className="text-zinc-50 text-center lg:text-left">
          <h2 className="font-extrabold uppercase">KONTAK</h2>

          <div className="mt-4 flex flex-col gap-2">
            <address className="not-italic">
              Jl. Prof.Dr. Ir. SumatriBrojonegoro No.1 Gedong Meneng, Kec.
              Rajabasa, Kota Bandar Lampung, Indonesia
            </address>

            <div className="flex items-center gap-1">
              <FaLocationDot />
              <p>Gedung UKM FMIPA Unila</p>
            </div>

            <Link
              href="mailto:himakomputer.unila@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <FaEnvelope />
              <span>himakomputer.unila@gmail.com</span>
            </Link>
          </div>
        </section>
      </div>

      <p className="mt-12 text-center text-zinc-50">
        &copy; {new Date().getFullYear()}{' '}
        <Link
          href="https://prave.com"
          className="font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS.
        </Link>{' '}
        All rights reserved.
      </p>
    </footer>
  )
}
