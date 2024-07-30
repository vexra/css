import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { MdArrowBack } from 'react-icons/md'

export default function WaLct() {
  return (
    <main className="bg-gradient-css flex min-h-screen flex-col p-8">
      <Link href="/">
        <MdArrowBack className="text-3xl text-zinc-50" />
      </Link>

      <div className="my-auto flex flex-col items-center justify-center self-center">
        <h1 className="text-2xl font-bold text-zinc-50 lg:text-4xl">
          Registrasi Sukses
        </h1>
        <Image
          src="/images/logo/computer-science-showdown.png"
          alt="css logo"
          width="360"
          height="360"
        />

        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center gap-8">
            <legend className="text-xl font-medium text-zinc-50 lg:text-3xl">
              Silahkan join WA Group LCT
            </legend>

            <a
              href="https://chat.whatsapp.com/FcCEXP1i1H1C5Wl9PfOQTz"
              target="_blank"
              className="group flex flex-row items-center gap-2 rounded-lg bg-zinc-50 px-4 py-2 text-xl font-medium text-green-500 duration-500 hover:bg-green-600 hover:text-white"
            >
              <FaWhatsapp className="text-xl text-green-500 group-hover:text-white lg:text-2xl" />
              Join Group Whatsapp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
