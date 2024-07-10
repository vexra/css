import login from '@/actions/login'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { MdArrowBack } from 'react-icons/md'

export default function Login() {
  return (
    <main className="bg-gradient-css min-h-screen">
      <Link href="/">
        <MdArrowBack className="text-xl" />
      </Link>

      <h1 className="text-4xl font-bold text-zinc-50">Selamat Datang di CSS</h1>
      <Image
        src="/images/logo/computer-science-showdown.png"
        alt="css logo"
        width="360"
        height="360"
      />

      <form action={login}>
        <fieldset>
          <legend className="text-3xl font-medium text-zinc-50">Log In</legend>
          <button
            type="submit"
            className="rounded-lg bg-zinc-50 px-4 py-2 text-xl font-medium text-[#3A0CA3]"
          >
            <FcGoogle className="inline text-xl" />
            Continue with Google
          </button>
        </fieldset>
      </form>
    </main>
  )
}
