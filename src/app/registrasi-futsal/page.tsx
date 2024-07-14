import FutsalRegistrationForm from '@/components/FutsalRegistrationForm'
import Image from 'next/image'

export default function RegistrasiFutsal() {
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
        Formulir Pendaftaran Futsal
      </h1>

      <div className="flex justify-center">
        <div className="mt-5 w-full px-4 pb-8 md:max-w-xl">
          <div className="bg-custom-gray rounded-3xl p-8">
            <FutsalRegistrationForm />
          </div>
        </div>
      </div>
    </main>
  )
}
