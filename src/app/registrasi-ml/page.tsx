import MLRegistrationForm from '@/components/MLRegistrationForm'
import { isInRange } from '@/lib/utils'
import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'

export default function RegistrasiML() {
  noStore()

  const now = new Date()
  const startDate1 = new Date('2024-09-9')
  const endDate1 = new Date('2024-09-22')
  const startDate2 = new Date('2024-09-23')
  const endDate2 = new Date('2024-10-11')

  const isRegistrationOpen =
    isInRange(now, startDate1, endDate1) || isInRange(now, startDate2, endDate2)

  return (
    <main className="bg-gradient-css min-h-screen font-sans">
      <div className="flex justify-center">
        <Image
          src="/images/logo/computer-science-showdown.png"
          alt="css logo"
          width="240"
          height="240"
        />
      </div>
      <h1 className="text-center text-3xl font-semibold text-white">
        Formulir Pendaftaran ML
      </h1>

      <div className="flex justify-center">
        <div className="mt-5 w-full px-4 pb-8 md:max-w-xl">
          <div className="rounded-3xl bg-custom-gray p-8">
            {isRegistrationOpen ? (
              <MLRegistrationForm />
            ) : (
              <p>Maaf, waktu pendaftaran sudah ditutup.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
