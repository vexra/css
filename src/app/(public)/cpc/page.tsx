import Link from 'next/link'

export default function Ml() {
  return (
    <main className="bg-gradient-css p-4 sm:p-6 md:px-20 md:py-8">
      <h1 className="mt-10 bg-gradient-heading bg-clip-text py-2 text-center text-5xl font-bold text-transparent text-zinc-50">
        Competitive Programming Competition
      </h1>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Deskripsi Lomba</h2>

        <div className="mt-2 flex flex-col gap-4 text-base text-zinc-200">
          <p>
            Competitive Programming Competition adalah salah satu rangkaian
            kompetisi pada acara Computer Science Showdown Universitas Lampung.
            Competitive Programming menguji kemampuan peserta dalam
            menyelesaikan suatu masalah secara sistematis menggunakan bahasa
            pemrograman yang telah ditentukan, yaitu C/C++/Java. Perlombaan akan
            dilaksanakan pada platform hackerrank.com Penilaian akan dihitung
            berdasarkan kecepatan waktu dalam mengerjakan kode pemrograman serta
            poin yang diperoleh jika peserta berhasil menjawab dengan tepat.
            Peringkat Competitive Programming Competition menggunakan sistem
            papan skor dari platform hackerrank.
          </p>

          <p>
            Competitive Programming Competition terdiri dari sesi pemanasan,
            penyisihan dan babak final. Sesi pemanasan akan dilaksanakan paling
            lambat satu hari sebelum babak penyisihan dilakukan yang bersifat
            opsional atau tidak memengaruhi proses penilaian. Dianjurkan bagi
            peserta untuk mengikuti sesi pemanasan agar peserta memahami dan
            familiar dengan platform yang akan digunakan.
          </p>

          <p>
            Pada babak penyisihan dan final yang akan dilaksanakan secara daring
            melalui platform google meet. Diharapkan kepada seluruh peserta
            untuk mempersiapkan kebutuhan lomba dengan baik seperti device dan
            koneksi internet yang akan digunakan dalam kegiatan CPC.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Ketentuan Umum</h2>

        <p className="mt-2 text-base text-zinc-200">
          Ketentuan umum merupakan ketentuan yang berlaku untuk kategori
          perlombaan Mobile Legends
        </p>

        <ol className="mt-2 list-decimal px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Peserta lomba adalah masyarakat umur dari seluruh Indonesia yang
            berusia 16-24 tahun yang belum pernah mengikuti Olimpiade komputer
            tingkat nasional yang diselenggarakan kementerian pendidikan dan
            kebudayaan.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Setiap peserta yang sudah terdaftar tidak dapat diganti oleh orang
            lain selama kompetisi berlangsung dengan alasan apapun.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta yang tidak memenuhi ketentuan diatas (nomor 1 sampai dengan
            3) maka dianggap gugur.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta lomba bersifat perorangan.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Setiap peserta diharapkan mengikuti acara pembukaan Computer Science
            Showdown pada hari Sabtu, 12 Oktober 2024.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta diberi waktu sampai dengan hari Jumat, 11 Oktober 2024 untuk
            mengajukan pertanyaan ke Contact Person yang tertera seputar
            petunjuk teknis seluruh lomba, yang nantinya akan dibahas pada hari
            Kamis, 10 Oktober 2024 pukul 20.00 s/d selesai dalam Technical
            Meeting di media rapat daring yang disiapkan panitia.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Peserta yang tidak mengikuti Technical Meeting dianggap setuju
            dengan semua hasil akhir keputusan Meeting.
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Seluruh peserta wajib mengikuti peraturan yang sudah ditetapkan
            tanpa terkecuali.
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Penghargaan</h2>
        <p className="mt-2 text-base text-zinc-200">
          Penghargaan bagi para pemenang Competitive Programming Competition
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Juara 1 : Uang Tunai senilai Rp. Rp 1.000.000 + Sertifikat
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Juara 2 : Uang Tunai senilai Rp. 800.000 + Sertifikat
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Juara 3 : Uang Tunai senilai Rp. 500.000 + Sertifikat
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl font-bold text-zinc-50">Pendaftaran</h2>

        <p className="mt-2 text-base text-zinc-200">
          Timeline Competitive Programming Competition
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Gelombang I : 1 Agustus - 30 Agustus 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Gelombang II : 8 September - 8 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Technical Meeting : 10 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Warming Up : 12 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Penyisihan : 13 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Semifinal : 14 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Final : 15 Oktober 2024
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Pengumuman Pemenang : 20 Oktober 2024
          </li>
        </ul>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran Competitive Programming Competition sebesar
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Gelombang I : Rp. Rp100.000 per Peserta
          </li>

          <li className="mt-2 text-base text-zinc-200">
            Gelombang II : Rp. Rp120.000 per Peserta
          </li>
        </ul>

        <p className="mt-5 text-base text-zinc-200">
          Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan
          transfer melalui :
        </p>

        <ul className="mt-2 list-disc px-6 marker:font-bold marker:text-[#3A0CA3]">
          <li className="mt-2 text-base text-zinc-200">
            Seabank : 901950749935 a/n Ananda Karunia Putri
          </li>
        </ul>

        <div className="mt-2 flex items-center gap-x-2">
          <p className="text-base text-zinc-200">Lihat Poster panduan</p>

          <Link
            className="bg-gradient-to-r from-[#7209B7] to-[#3A0CA3] bg-clip-text text-base font-semibold text-transparent hover:from-[#9B51E0] hover:to-[#020202]"
            href={
              'https://drive.google.com/file/d/1pL9hYXi5igan_5y_PhbI2jgydyqxz4pP/view?usp=drivesdk'
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
            Ridho Fernando : +62 858-8818-0419
          </li>
          <li className="mt-0 text-base text-zinc-200">
            Adrianne Julian : +62-823-1555-0334
          </li>
        </ul>
      </section>

      <Link
        href="/registrasi-cpc"
        className="mx-auto mt-10 block w-fit rounded-lg bg-gradient-to-r from-[#7209B7] to-[#3A0CA3] px-6 py-4 text-2xl font-semibold text-zinc-50 hover:from-[#7209B7] hover:to-[#ff0b99] sm:px-8 md:px-16 md:text-4xl"
      >
        Daftar Sekarang
      </Link>
    </main>
  )
}
