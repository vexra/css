import Link from 'next/link'

export default function Ml() {
  return (
    <main className="bg-gradient-css p-4 sm:p-6 md:px-20 md:py-8">
      <h1 className="mt-10 bg-gradient-heading bg-clip-text py-2 text-center text-5xl font-bold text-transparent text-zinc-50">
        Mobile Legends
      </h1>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Deskripsi Lomba</h2>

        <p className="mt-2 text-base text-zinc-200">
          CSS (Computer Science Showdown) 2024 merupakan ajang kompetisi di
          bidang e-sport game, yaitu Mobile Legends : Bang Bang. Mobile Legends
          adalah sebuah permainan mobile berjenis MOBA (Multiplayer Online
          Battle Arena) yang dikembangkan dan diterbitkan oleh Moonton.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Ketentuan Umum</h2>

        <p className="mt-2 text-base text-zinc-200">
          Ketentuan umum merupakan ketentuan yang berlaku untuk kategori
          perlombaan Mobile Legends
        </p>

        <ol className="mt-2 list-decimal px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Peserta wajib menaati setiap peraturan yang ada.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta wajib menjunjung tinggi sportivitas dan kejujuran.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Dilarang melakukan ujaran kebencian, mengandung SARA, dan negatif.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Panitia bisa mendiskualifikasi peserta apabila peserta melanggar
            aturan.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Segala kelalaian merupakan tanggung jawab setiap peserta maupun tim.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Gelar juara yang diperoleh tim dapat dicabut oleh pihak panitia
            apabila ditemukan kecurangan atau pelanggaran hukum dalam proses
            pelaksanaan perlombaan.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Ketentuan pause 1x3 menit (Chat all &quot;P/Pause&quot;) berlaku
            pada saat semifinal dan final.
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Penghargaan</h2>
        <p className="mt-2 text-base text-zinc-200">
          Penghargaan bagi para pemenang Mobile Legend
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Juara 1 : Uang Tunai senilai Rp. 700.000 + e-sertifikat
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Juara 2 : Uang Tunai senilai Rp. 500.000 + e-sertifikat
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Juara 3 : Uang Tunai senilai Rp. 300.000 + e-sertifikat
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Pendaftaran</h2>

        <p className="mt-2 text-base text-zinc-200">Timeline Mobile Legends</p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Tanggal Pendaftaran : 9 September - 11 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Technical Meeting : -
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Pelaksanaan Lomba : 15 Oktober 2024 - 19 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Penyisihan : 15 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Semifinal dan Final : 19 Oktober 2024
          </li>
        </ul>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran Mobile Legend sebesar Rp. 60.000/team
        </p>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan
          transfer melalui :
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Bank Lampung 3800301563350 a.n. Himakom FMIPA UNILA
          </li>
        </ul>

        <div className="mt-2 flex items-center gap-x-2">
          <p className="text-base text-zinc-200">Lihat Poster panduan</p>

          <Link
            className="bg-gradient-to-r from-[#7209B7] to-[#3A0CA3] bg-clip-text text-base font-semibold text-transparent hover:from-[#9B51E0] hover:to-[#020202]"
            href={
              'https://drive.google.com/file/d/1MknLn5hLi31gabOg0uUZ0dGXhFX1GD9_/view?usp=drivesdk'
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
            Firman Situmorang : +62 813-1991-2461
          </li>
          <li className="mt-0 text-base text-zinc-200">
            Jhon V Nababan : +62 813-7583-9812
          </li>
        </ul>
      </section>

      <Link
        href="/registrasi-ml"
        className="mx-auto mt-10 block w-fit rounded-lg bg-gradient-to-r from-[#7209B7] to-[#3A0CA3] px-6 py-4 text-2xl font-semibold text-zinc-50 hover:from-[#7209B7] hover:to-[#ff0b99] sm:px-8 md:px-16 md:text-4xl"
      >
        Daftar Sekarang
      </Link>
    </main>
  )
}
