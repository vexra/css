import Link from 'next/link'

export default function Futsal() {
  return (
    <main className="p-4 sm:p-6 md:px-20 md:py-8 dark:bg-black">
      <h1 className="bg-gradient-heading mt-10 bg-clip-text py-2 text-center text-5xl font-bold text-transparent">
        Futsal
      </h1>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-[#132D46] dark:text-slate-300">
          Deskripsi Lomba
        </h2>

        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Lomba Futsal adalah permainan bola yang dimainkan oleh dua regu, yang
          masing masing beranggotakan lima orang. Tujuannya adalah memasukkan
          bola ke gawang lawan, dengan memanipulasi bola dengan kaki dan anggota
          tubuh lain selain tangan, kecuali posisi kiper. Lomba ini diadakan
          untuk Siswa/I Kelas X-XII, SMA/SMK/Sederajat
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-[#132D46] dark:text-slate-300">
          Ketentuan Umum
        </h2>

        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Ketentuan umum merupakan ketentuan yang berlaku untuk kategori
          perlombaan Futsal
        </p>

        <ol className="mt-2 list-decimal px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Peserta merupakan Siswa SMA/SMK/MA sederajat.
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Peserta menyerahkan fotocopy kartu pelajar.
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Jumlah peserta dalam satu tim beranggotakan 5 orang pemain inti, 5
            pemain cadangan dan 2 official.
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Pemain diwajibkan menjunjung tinggi sportivitas dan
            anti-diskriminasi SARA.
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Peserta menyerahkan pas foto 2x3 sebanyak 2 lembar.
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-[#132D46] dark:text-slate-300">
          Penghargaan
        </h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Penghargaan bagi para pemenang Futsal
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          {' '}
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Juara 1 : Uang Tunai senilai Rp 2.000.000 + Trofi +
            Sertifikat/Pemain
          </li>
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Juara 2 : Uang Tunai senilai Rp 1.500.000 + Trofi +
            Sertifikat/Pemain
          </li>
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Juara 3 : Uang Tunai senilai Rp 1.000.000 + Trofi +
            Sertifikat/Pemain
          </li>
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Best Player : Uang Tunai + Sertifikat
          </li>
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Top Score : Uang Tunai + Sertifikat
          </li>
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Best Suporter : Uang Tunai + Sertifikat
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-[#132D46] dark:text-slate-300">
          Pendaftaran
        </h2>

        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          Timeline Futsal
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Gelombang I : 15 Agustus-10 September 2024
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Gelombang II : 10 September-10 Oktober 2024
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Technical Meeting : 17 Oktober 2023
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Pelaksanaan Lomba : 13 Oktober 2024 - 14 Oktober 2024
          </li>
        </ul>

        <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
          Biaya pendaftaran Futsal sebesar
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Gelombang I : Rp. 350.000/team
          </li>

          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Gelombang II : Rp. 375.000/team
          </li>
        </ul>

        <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
          Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan
          transfer melalui :
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Dana: 082289046489 a.n. Anindya Salsabila
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-[#132D46] dark:text-slate-300">
          Contact Person
        </h2>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Firman Situmorang : +62 813-1991-2461
          </li>
          <li className="mt-0 text-base text-slate-600 dark:text-slate-400">
            Jhon V Nababan : +62 813-7583-9812
          </li>
        </ul>
      </section>

      <Link
        href="/registrasi-futsal"
        className="bg-gradient-heading mx-auto mt-10 block w-fit rounded-lg px-6 py-4 text-2xl font-semibold text-zinc-50 sm:px-8 md:px-16 md:text-4xl"
      >
        Daftar Sekarang
      </Link>
    </main>
  )
}
