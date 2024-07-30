import CPCRegistrationForm from '@/components/CPCRegistrationForm'
import Image from 'next/image'

export default function RegistrasiCPC() {
  return (
    <main className="bg-gradient-css font-sans">
      <div className="flex justify-center">
        <Image
          src="/images/logo/computer-science-showdown.png"
          alt="css logo"
          width="240"
          height="240"
        />
      </div>
      <h1 className="text-center text-3xl font-semibold text-white">
        Formulir Pendaftaran CPC
      </h1>

      <div className="flex justify-center">
        <div className="mt-5 w-full px-4 pb-8 md:max-w-xl">
          <div className="rounded-3xl bg-custom-gray p-8">
            <CPCRegistrationForm />
          </div>
        </div>
      </div>
    </main>
  )
}
