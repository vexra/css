import login from '@/actions/login'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { MdArrowBack } from 'react-icons/md'

export default function Login() {
  return (
    <main className="bg-gradient-css flex min-h-screen flex-col p-8">
      <Link href="/">
        <MdArrowBack className="text-3xl text-zinc-50" />
      </Link>

      <div className="my-auto flex flex-col items-center justify-center self-center">
        <h1 className="text-2xl font-bold text-zinc-50 lg:text-4xl">
          Selamat Datang di CSS
        </h1>
        <Image
          src="/images/logo/computer-science-showdown.png"
          alt="css logo"
          width="360"
          height="360"
        />

        <form className="flex flex-col" action={login}>
          <div className="flex flex-col items-center justify-center gap-8">
            <legend className="text-xl font-medium text-zinc-50 lg:text-3xl">
              Log In
            </legend>

            <button
              type="submit"
              className="flex flex-row items-center gap-2 rounded-lg bg-zinc-50 px-4 py-2 text-xl font-medium text-[#3A0CA3]"
            >
              <FcGoogle className="text-xl lg:text-2xl" />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
