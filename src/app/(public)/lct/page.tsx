import Image from 'next/image'
import Link from 'next/link'

export default function Ml() {
  return (
    <main className="bg-gradient-css p-4 sm:p-6 md:px-20 md:py-8">
      <h1 className="mt-10 bg-gradient-heading bg-clip-text py-2 text-center text-5xl font-bold text-transparent text-zinc-50">
        Lomba Cepat Tepat
      </h1>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Deskripsi Lomba</h2>

        <p className="mt-2 text-base text-zinc-200">
          Lomba Cepat Tepat Komputer adalah salah satu cabang lomba di bidang
          akademik dalam rangkaian acara Computer Science Showdown tahun 2024.
          Lomba ini diadakan untuk siswa/i SMA/MA/SMK Sederajat guna
          mengembangkan keilmuan di bidang ilmu komputer. Materi yang dilombakan
          dalam Lomba Cepat Tepat Komputer adalah mengenai pengetahuan dasar
          dalam ilmu komputer seperti komunikasi data dan jaringan komputer,
          Microsoft Office, pengetahuan umum dalam bidang komputer, sistem
          bilangan, perangkat lunak dan perangkat keras komputer, dasar-dasar
          sistem operasi, matematika diskrit, serta bahasa pemrograman
          pseudocode. Peserta lomba ini, dituntut untuk cekatan, lugas, serta
          tepat dalam menjawab pertanyaan-pertanyaan yang dilombakan.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Ketentuan Umum</h2>

        <p className="mt-2 text-base text-zinc-200">
          Ketentuan umum merupakan ketentuan yang berlaku untuk kategori
          perlombaan Lomba Cepat Tepat
        </p>

        <ol className="mt-2 list-decimal px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Peserta LCT Komputer adalah siswa/i yang duduk di kelas 1 - 3
            SMA/MA/SMK/Sederajat.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Satu tim terdiri dari tiga orang.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Satu sekolah dapat mengirim lebih dari satu tim dengan maksimal 3
            tim.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Satu tim didampingi oleh 1 orang guru pembimbing.
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Penghargaan</h2>
        <p className="mt-2 text-base text-zinc-200">
          Penghargaan bagi para pemenang Lomba Cepat Tepat Komputer
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Juara 1 : Uang Tunai senilai Rp. 900.000,00. + Sertifikat + Piala +
            Voucher 50%
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Juara 2 : Uang Tunai senilai Rp. 650.000,00. + Sertifikat + Piala +
            Voucher 50%
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Juara 3 : Uang Tunai senilai Rp. 400.000,00. + Sertifikat + Piala +
            Voucher 50%
          </li>
          <li className="mt-2 text-base text-zinc-200">
            Seluruh peserta LCTK dan guru pembimbing akan mendapatkan
            e-sertifikat
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Pendaftaran</h2>

        <p className="mt-2 text-base text-zinc-200">
          Timeline Lomba Cepat Tepat Komputer
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Gelombang I : 1 - 30 Agustus 2024 (Sudah Tutup)
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Gelombang II : 8 September - 11 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Technical Meeting : 10 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Pelaksanaan Lomba : 12 Oktober 2024
          </li>
        </ul>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran Lomba Cepat Tepat Komputer sebesar
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Gelombang I : Sudah Tutup
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Gelombang II : Rp. 165.000/tim
          </li>
        </ul>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan
          transfer melalui :
        </p>

        <Image
          src="/images/qrispembayaran.jpg"
          width={200}
          height={200}
          alt="whatsapp"
        />

        <div className="mt-2 flex items-center gap-x-2">
          <p className="text-base text-zinc-200">Lihat Poster panduan</p>

          <Link
            className="bg-gradient-to-r from-[#7209B7] to-[#3A0CA3] bg-clip-text text-base font-semibold text-transparent hover:from-[#9B51E0] hover:to-[#020202]"
            href={
              'https://drive.google.com/file/d/1mfgLWpR3MumLxv9atcH91JKoeLCkNCNI/view?usp=drivesdk'
            }
            target="_blank"
          >
            Disini.
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Contact Person</h2>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Luthfi Aditya : +62 812-1241-1730
          </li>
          <li className="mt-0 text-base text-zinc-200">
            Clara Monica : +62 822-6948-8323
          </li>
        </ul>
      </section>

      <Link
        href="/registrasi-lct"
        className="mx-auto mt-10 block w-fit rounded-lg bg-gradient-to-r from-[#7209B7] to-[#3A0CA3] px-6 py-4 text-2xl font-semibold text-zinc-50 hover:from-[#7209B7] hover:to-[#ff0b99] sm:px-8 md:px-16 md:text-4xl"
      >
        Daftar Sekarang
      </Link>
    </main>
  )
}
