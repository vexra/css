import Image from 'next/image'
import Link from 'next/link'

export default function Futsal() {
  return (
    <main className="bg-gradient-css p-4 sm:p-6 md:px-20 md:py-8">
      <h1 className="mt-10 bg-gradient-heading bg-clip-text py-2 text-center text-5xl font-bold text-transparent text-zinc-50">
        Futsal
      </h1>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Deskripsi Lomba</h2>

        <p className="mt-2 text-base text-zinc-200">
          Lomba Futsal adalah permainan bola yang dimainkan oleh dua regu, yang
          masing masing beranggotakan lima orang. Tujuannya adalah memasukkan
          bola ke gawang lawan, dengan memanipulasi bola dengan kaki dan anggota
          tubuh lain selain tangan, kecuali posisi kiper. Lomba ini diadakan
          untuk Siswa/I Kelas X-XII, SMA/SMK/Sederajat
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Ketentuan Umum</h2>

        <p className="mt-2 text-base text-zinc-200">
          Ketentuan umum merupakan ketentuan yang berlaku untuk kategori
          perlombaan Futsal
        </p>

        <ol className="mt-2 list-decimal px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Peserta merupakan Siswa SMA/SMK/MA sederajat.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta menyerahkan fotocopy kartu pelajar.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Jumlah peserta dalam satu tim beranggotakan 5 orang pemain inti, 5
            pemain cadangan dan 2 official.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Pemain diwajibkan menjunjung tinggi sportivitas dan
            anti-diskriminasi SARA.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta menyerahkan pas foto 2x3 sebanyak 2 lembar.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Membawa surat rekomendasi sekolah dengan cap basah dan tanda tangan
            dari sekolah
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Mengisi surat pertanggungjawaban dan membawa materai sebesar 10000
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Penghargaan</h2>
        <p className="mt-2 text-base text-zinc-200">
          Penghargaan bagi para pemenang Futsal
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          {' '}
          <li className="mt-2 text-base text-zinc-200">
            Juara 1 : Uang Tunai senilai Rp 2.000.000 + Trofi +
            Sertifikat/Pemain
          </li>
          <li className="mt-2 text-base text-zinc-200">
            Juara 2 : Uang Tunai senilai Rp 1.500.000 + Trofi +
            Sertifikat/Pemain
          </li>
          <li className="mt-2 text-base text-zinc-200">
            Juara 3 : Uang Tunai senilai Rp 1.000.000 + Trofi +
            Sertifikat/Pemain
          </li>
          <li className="mt-2 text-base text-zinc-200">
            Best Player : Uang Tunai + Sertifikat
          </li>
          <li className="mt-2 text-base text-zinc-200">
            Top Score : Uang Tunai + Sertifikat
          </li>
          <li className="mt-2 text-base text-zinc-200">
            Best Suporter : Uang Tunai + Sertifikat
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Pendaftaran</h2>

        <p className="mt-2 text-base text-zinc-200">Timeline Futsal</p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Tanggal Pendaftaran : 15 Agustus - 10 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Technical Meeting : 11 Oktober 2023
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Pelaksanaan Lomba : 13 Oktober 2024 - 14 Oktober 2024
          </li>
        </ul>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran Futsal sebesar Rp. 250.000/team
        </p>

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
              'https://drive.google.com/file/d/1MhR2Ekf6ldkM70hm46eVXK-GALq8jCZo/view?usp=drivesdk'
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
            Devrina : +62 895-6405-64619
          </li>
          <li className="mt-0 text-base text-zinc-200">
            Zelvin : +62 819-9146-6906
          </li>
        </ul>
      </section>

      <section className="mt-10 text-center">
        <h1 className="mt-10 bg-gradient-heading bg-clip-text py-2 text-3xl font-bold text-transparent text-zinc-50">
          Pendaftaran Futsal Silahkan Langsung Hubungi Contact Person yang
          Tertera! Terimakasih.
        </h1>
      </section>
    </main>
  )
}
