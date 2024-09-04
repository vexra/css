'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import {
  FaArrowRight,
  FaCheckCircle,
  FaDesktop,
  FaFutbol,
  FaGamepad,
  FaRegCalendar,
  FaRegClock,
  FaStopwatch,
  FaTrophy,
} from 'react-icons/fa'

export default function Home() {
  const [sponsors, setSponsors] = useState<
    { src: string; alt: string; width: string; height: string }[]
  >([])

  const [medpart, setMedpart] = useState<
    { src: string; alt: string; width: string; height: string }[]
  >([])

  const originalSponsors = useMemo(
    () => [
      {
        src: '/images/logo/PT. EPRAS JAYA MURNI PERKASA.jpeg',
        alt: 'logo',
        width: '90',
        height: '90',
      },
      {
        src: '/images/logo/Khazzanah Tour & Travel Cab. Lampung.png',
        alt: 'logo',
        width: '70',
        height: '70',
      },
      {
        src: '/images/logo/PT. Indonesia Teknologi.png',
        alt: 'logo',
        width: '70',
        height: '70',
      },
      {
        src: '/images/logo/Eleos.jpeg',
        alt: 'logo',
        width: '70',
        height: '70',
      },
      {
        src: '/images/logo/KING.png',
        alt: 'logo',
        width: '70',
        height: '70',
      },
    ],
    [],
  )

  const originalMedpart = useMemo(
    () => [
      {
        src: '/images/logo/infolomba.PNG',
        alt: 'logo',
        width: '90',
        height: '90',
      },
      {
        src: '/images/logo/Logo-seputar.infoid.jpg',
        alt: 'logo',
        width: '100',
        height: '100',
      },
      {
        src: '/images/logo/logo hima IF.png',
        alt: 'logo',
        width: '50',
        height: '50',
      },
      {
        src: '/images/logo/Logo Kawal Event.jpg',
        alt: 'logo',
        width: '100',
        height: '100',
      },
      {
        src: '/images/logo/LOGO PRO 2 BDL FULL - WIDE CONFIGURATION - SEMENTARA.png',
        alt: 'logo',
        width: '150',
        height: '150',
      },
      {
        src: '/images/logo/LOGO TEKNOKRA.png',
        alt: 'logo',
        width: '240',
        height: '240',
      },
      {
        src: '/images/logo/logolombasma2.png',
        alt: 'logo',
        width: '150',
        height: '150',
      },
      {
        src: '/images/logo/Olimpiade Update.png',
        alt: 'logo',
        width: '65',
        height: '65',
      },
      {
        src: '/images/logo/pikr unila.jpeg',
        alt: 'logo',
        width: '65',
        height: '65',
      },
      {
        src: '/images/logo/Logo Rakanila.png',
        alt: 'logo',
        width: '65',
        height: '65',
      },
      {
        src: '/images/logo/Logo Kejar Mimpi Lampung.jpg',
        alt: 'logo',
        width: '65',
        height: '65',
      },
      {
        src: '/images/logo/Logo Himafi-1.png',
        alt: 'logo',
        width: '65',
        height: '65',
      },
      {
        src: '/images/logo/HIMATIKA.PNG',
        alt: 'logo',
        width: '75',
        height: '75',
      },
      {
        src: '/images/logo/Himatro.png',
        alt: 'logo',
        width: '75',
        height: '75',
      },
      {
        src: '/images/logo/logo mpl.png',
        alt: 'logo',
        width: '120',
        height: '120',
      },
    ],
    [],
  )

  useEffect(() => {
    const clonedSponsors = [
      ...originalSponsors,
      ...originalSponsors,
      ...originalSponsors,
    ]
    setSponsors(clonedSponsors)
  }, [originalSponsors])

  useEffect(() => {
    const clonedMedpart = [...originalMedpart, ...originalMedpart]
    setMedpart(clonedMedpart)
  }, [originalMedpart])

  return (
    <main className="dark:bg-black">
      <div className="">
        <div className="xs:px-10 bg-gradient-three-colors p-4 sm:px-20 md:flex md:h-screen md:flex-row-reverse">
          <div className="flex justify-center md:w-1/2 md:justify-end md:pt-28 xl:pr-24">
            <div>
              <Image
                src="/images/logo/computer-science-showdown.png"
                alt="logo css"
                width="360"
                height="360"
              />
            </div>
          </div>

          <div className="md:flex md:w-1/2 md:flex-col md:pt-36">
            <h1 className="text-center text-4xl font-bold text-white md:text-start md:text-6xl">
              Dare to Dream Strive for Greatness
            </h1>
            <div className="flex justify-center md:justify-start">
              <Link
                href="#about"
                className="mt-16 rounded-full bg-violet-600 bg-opacity-60 px-10 py-3.5 text-lg font-bold text-white shadow-custom hover:bg-violet-600 hover:delay-300 lg:mt-10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <section className="xs:px-10 bg-gradient-three-colors p-4 sm:px-20 lg:bg-none">
          <div className="md:grid md:grid-cols-2 md:place-items-center md:gap-x-8 xl:mt-20 xl:flex xl:justify-center xl:gap-10">
            <div className="mt-8 flex w-full flex-col items-center rounded-xl bg-[#3A0CA3] px-4 py-16 md:h-80 md:w-80 md:justify-self-end md:py-0 md:pt-10 lg:pt-20">
              <FaRegCalendar className="text-5xl text-white" />
              <h3 className="mt-2 text-center text-2xl font-bold text-white">
                Pembukaan
              </h3>
              <p className="mt-2 text-center text-white">
                Pembukaan akan dilaksanakan pada tanggal 12 Oktober 2024
              </p>
            </div>

            <div className="mt-8 flex w-full flex-col items-center rounded-xl bg-[#3A0CA3] px-4 py-16 md:h-80 md:w-80 md:justify-self-start md:py-0 md:pt-10 lg:pt-20">
              <FaRegClock className="text-5xl text-white" />
              <h3 className="mt-2 text-center text-2xl font-bold text-white">
                Pelaksanaan Lomba
              </h3>
              <p className="mt-2 text-center text-white">
                Pelaksanaan 4 cabang lomba akan dilaksanakan mulai tanggal 12
                Oktober - 20 Oktober 2024
              </p>
            </div>

            <div className="mt-8 flex w-full flex-col items-center rounded-xl bg-[#3A0CA3] px-4 py-16 md:h-80 md:w-80 md:justify-self-end md:py-0 md:pt-10 lg:pt-20">
              <FaCheckCircle className="text-5xl text-white" />
              <h3 className="mt-2 text-center text-2xl font-bold text-white">
                Penutupan
              </h3>
              <p className="mt-2 text-center text-white">
                Penutupan dilaksanakan pada tanggal 20 Oktober 2024{' '}
              </p>
            </div>

            <div className="mt-8 flex w-full flex-col items-center rounded-xl bg-[#3A0CA3] px-4 py-16 md:h-80 md:w-80 md:justify-self-start md:py-0 md:pt-10 lg:pt-20">
              <FaTrophy className="text-5xl text-white" />
              <h3 className="mt-2 text-center text-2xl font-bold text-white">
                Pengumuman Pemenang
              </h3>
              <p className="text-center text-white">
                Pengumuman pemenang akan dilaksanakan pada penutupan Computer
                Science Showdown 2024
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 px-8">
          <section className="mt-10 font-semibold" id="about">
            <h2 className="text-center text-2xl text-[#7209B7]">About Us</h2>
            <div className="mx-auto mt-2 w-20 border border-t-4 border-[#3A0CA3]"></div>

            <h3 className="mt-5 text-2xl text-[#7209B7] dark:text-white">
              Apa Itu Computer Science Showdown?
            </h3>

            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Dalam rangka Dies Natalis Jurusan, kami ingin mengadakan
              serangkaian acara besar yang bersifat pengembangan keilmuan
              sebagai refleksi dari Visi dan Misi FMIPA yang menuntut kami untuk
              selalu menjujung tinggi tentang penelitian. Dies Natalis Jurusan
              Ilmu Komputer ini juga merupakan momentum untuk memberikan
              kesempatan kepada para pelajar dan umum di luar sana.
            </p>

            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Maka melalui acara ini kami berupaya untuk mengoptimalkan
              kehidupan saintis dengan kreatifitas yang kaya akan imajinasi
              dalam memberikan terobosan - terobosan baru bagi perkembangan ilmu
              pengetahuan dan teknologi. Acara ini juga sebagai ajang motivasi
              bagi kami untuk menjadi lebih baik, dengan adanya tekad untuk maju
              dan terus memberikan manfaat bagi civitas akademik Jurusan Ilmu
              Komputer khususnya dan civitas FMIPA Universitas Lampung.
            </p>
          </section>

          <div className="mt-10 font-semibold">
            <div className="md:mt-16 md:flex">
              <div className="md:w-1/2 md:pt-5">
                <h2 className="mt-5 text-2xl text-[#7209B7] dark:text-white">
                  Keuntungan yang didapatkan jika mengikuti Computer Science
                  Showdown
                </h2>

                <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-violet-500">
                  <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Sertifikat
                  </li>
                  <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Menambah pengalaman di CV
                  </li>
                  <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Relasi & Skill
                  </li>
                  <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Uang Tunai
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="flex justify-center md:justify-end lg:pr-20">
                  <Image
                    src="/images/logo/computer-science-showdown.png"
                    alt="logo css"
                    width="240"
                    height="240"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 font-semibold">
            <div>
              <h4 className="text-center text-3xl font-semibold text-[#7209B7]">
                Lomba
              </h4>
              <div className="mx-auto mt-2 w-20 border border-t-4 border-[#3A0CA3]"></div>
              <p className="mt-4 text-center text-base text-slate-600 dark:text-slate-400">
                Dalam Computer Science Showdown 2024 ini terdapat beberapa
                cabang lomba yang dapat diikuti:
              </p>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-x-20">
              <div className="group">
                <div className="mt-10 border-t-2 border-[#3A0CA3] group-hover:border-t-4 group-hover:border-[#7209B7] group-hover:delay-500"></div>
                <div className="p-4">
                  <FaStopwatch className="mt-5 text-5xl text-[#7209B7] dark:text-white" />
                  <h3 className="mt-10 text-3xl font-semibold dark:text-white">
                    LCT
                  </h3>
                  <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
                    Lomba Cepat Tepat ini dapat diikuti oleh jenjang SMA
                    sederajat
                  </p>
                  <Link
                    href="/lct"
                    className="mt-2 flex items-center gap-x-2 text-base text-slate-600 hover:text-[#7209B7] hover:underline hover:underline-offset-2 dark:text-slate-400"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>

              <div className="group">
                <div className="mt-10 border-t-2 border-[#3A0CA3] group-hover:border-t-4 group-hover:border-[#7209B7] group-hover:delay-500"></div>
                <div className="p-4">
                  <FaDesktop className="mt-5 text-5xl text-[#7209B7] dark:text-white" />
                  <h3 className="mt-10 text-3xl font-semibold dark:text-white">
                    CPC
                  </h3>
                  <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
                    Competitive Programing Competition ini dapat diikuti oleh
                    umum
                  </p>
                  <Link
                    href="/cpc"
                    className="mt-2 flex items-center gap-x-2 text-base text-slate-600 hover:text-[#7209B7] hover:underline hover:underline-offset-2 dark:text-slate-400"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>

              <div className="group">
                <div className="mt-10 border-t-2 border-[#3A0CA3] group-hover:border-t-4 group-hover:border-[#7209B7] group-hover:delay-500"></div>
                <div className="p-4">
                  <FaFutbol className="mt-5 text-5xl text-[#7209B7] dark:text-white" />
                  <h3 className="mt-10 text-3xl font-semibold dark:text-white">
                    Futsal
                  </h3>
                  <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
                    Cabang lomba futsal ini dapat diikuti oleh jenjang SMA
                    sederajat
                  </p>
                  <Link
                    href="/futsal"
                    className="mt-2 flex items-center gap-x-2 text-base text-slate-600 hover:text-[#7209B7] hover:underline hover:underline-offset-2 dark:text-slate-400"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>

              <div className="group">
                <div className="mt-10 border-t-2 border-[#3A0CA3] group-hover:border-t-4 group-hover:border-[#7209B7] group-hover:delay-500"></div>
                <div className="p-4">
                  <FaGamepad className="mt-5 text-5xl text-[#7209B7] dark:text-white" />
                  <h3 className="mt-10 text-3xl font-semibold dark:text-white">
                    Mobile Legend
                  </h3>
                  <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
                    Cabang lomba mobile legend ini dapat diikuti oleh umum
                  </p>
                  <Link
                    href="/ml"
                    className="mt-2 flex items-center gap-x-2 text-base text-slate-600 hover:text-[#7209B7] hover:underline hover:underline-offset-2 dark:text-slate-400"
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mt-10 text-center text-3xl font-semibold text-[#7209B7]">
            Sponsor
          </h4>
          <div className="mx-auto mt-2 w-20 border border-t-4 border-[#3A0CA3]"></div>

          <div className="group mb-10 mt-16 inline-flex h-20 w-full flex-nowrap justify-center overflow-hidden lg:mt-10 dark:bg-white">
            <ul className="hidden items-center justify-center group-hover:[animation-play-state:paused] lg:flex [&_img]:max-w-none [&_li]:mx-8">
              {sponsors
                .slice(0, originalSponsors.length)
                .map((sponsor, index) => (
                  <li key={index}>
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={parseInt(sponsor.width)}
                      height={parseInt(sponsor.height)}
                    />
                  </li>
                ))}
            </ul>
            <ul className="flex animate-loop-scroll-50 items-center justify-center group-hover:[animation-play-state:paused] md:justify-start lg:hidden [&_img]:max-w-none [&_li]:mx-8">
              {sponsors.map((sponsor, index) => (
                <li key={index}>
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={parseInt(sponsor.width)}
                    height={parseInt(sponsor.height)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <h4 className="mt-10 text-center text-3xl font-semibold text-[#7209B7]">
            Medpart
          </h4>
          <div className="mx-auto mt-2 w-20 border border-t-4 border-[#3A0CA3]"></div>

          <div className="group mb-10 mt-16 inline-flex h-20 w-full flex-nowrap overflow-hidden lg:mt-10 dark:bg-white">
            <ul className="flex animate-loop-scroll-50 items-center justify-center group-hover:[animation-play-state:paused] md:justify-start [&_img]:max-w-none [&_li]:mx-8">
              {medpart.map((medpart, index) => (
                <li key={index}>
                  <Image
                    src={medpart.src}
                    alt={medpart.alt}
                    width={parseInt(medpart.width)}
                    height={parseInt(medpart.height)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
