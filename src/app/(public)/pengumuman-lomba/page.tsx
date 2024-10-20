export default function PengumumanLomba() {
  return (
    <main className="bg-gradient-css flex flex-col items-center justify-center gap-8 px-4 py-8 font-sans md:px-8">
      <h1 className="text-center text-3xl font-bold text-zinc-50 md:text-5xl">
        Pengumuman Juara Lomba
      </h1>

      <section className="flex w-full flex-col items-center justify-center gap-4 md:gap-8">
        {/* LCT */}
        <section className="w-full rounded-lg bg-zinc-50 shadow-lg dark:bg-purple-900">
          <div className="rounded-t-lg bg-purple-100 px-6 py-4 dark:bg-purple-800">
            <h2 className="text-2xl font-bold text-purple-700 md:text-4xl dark:text-zinc-100">
              Lomba Cepat tepat
            </h2>
          </div>
          <div className="p-4 md:p-8">
            <table className="min-w-full table-auto divide-y divide-purple-200">
              <thead className="bg-purple-300 dark:bg-purple-800">
                <tr className="text-center align-middle dark:text-zinc-100">
                  <th className="px-4 py-2">Juara</th>
                  <th className="px-4 py-2">Sekolah</th>
                  <th className="px-4 py-2">Tim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-200 bg-zinc-50 dark:text-slate-800">
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    1
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    SMAN 10 Bandar Lampung
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    ItsclubSmandasa
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    2
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    SMAN 2 Bandar Lampung
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    Babu Bima
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    3
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    MAN Insan Cendekia Lampung Timur
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    Freak Skibidi
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CPC */}
        <section className="w-full rounded-lg bg-zinc-50 shadow-lg dark:bg-purple-900">
          <div className="rounded-t-lg bg-purple-100 px-6 py-4 dark:bg-purple-800">
            <h2 className="text-2xl font-bold text-purple-700 md:text-4xl dark:text-zinc-100">
              Competitive Programming Competition
            </h2>
          </div>
          <div className="p-4 md:p-8">
            <table className="min-w-full table-auto divide-y divide-purple-200">
              <thead className="bg-purple-300 dark:bg-purple-800">
                <tr className="text-center align-middle dark:text-zinc-100">
                  <th className="px-4 py-2">Juara</th>
                  <th className="px-4 py-2">Instansi</th>
                  <th className="px-4 py-2">Nama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-200 bg-zinc-50 dark:text-slate-800">
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    1
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    SMAN 3 Malang
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    Rozan Laudzai
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    2
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    MAN 2 Pekanbaru
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    Muhammad Hariz Faizullah
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    3
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    MAN 2 Pekanbaru
                  </td>
                  <td className="text-center align-middle" rowSpan={1}>
                    KADZYA REENASHIRA HERNANDO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mobile Legend */}
        <section className="w-full rounded-lg bg-zinc-50 shadow-lg dark:bg-purple-900">
          <div className="rounded-t-lg bg-purple-100 px-6 py-4 dark:bg-purple-800">
            <h2 className="text-2xl font-bold text-purple-700 md:text-4xl dark:text-zinc-100">
              Mobile Legend
            </h2>
          </div>
          <div className="p-4 md:p-8">
            <table className="min-w-full table-auto divide-y divide-purple-200">
              <thead className="bg-purple-300 dark:bg-purple-800">
                <tr className="text-center align-middle dark:text-zinc-100">
                  <th className="px-4 py-2">Juara</th>
                  <th className="px-4 py-2">Tim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-200 bg-zinc-50 dark:text-slate-800">
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    1
                  </td>
                  <td className="text-center">GxG</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    2
                  </td>
                  <td className="text-center">xxknjt</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    3
                  </td>
                  <td className="text-center">Major Mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Futsal */}
        <section className="w-full rounded-lg bg-zinc-50 shadow-lg dark:bg-purple-900">
          <div className="rounded-t-lg bg-purple-100 px-6 py-4 dark:bg-purple-800">
            <h2 className="text-2xl font-bold text-purple-700 md:text-4xl dark:text-zinc-100">
              Futsal
            </h2>
          </div>
          <div className="p-4 md:p-8">
            <table className="min-w-full table-auto divide-y divide-purple-200">
              <thead className="bg-purple-300 dark:bg-purple-800">
                <tr className="text-center align-middle dark:text-zinc-100">
                  <th className="px-4 py-2">Juara</th>
                  <th className="px-4 py-2">Sekolah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-200 bg-zinc-50 dark:text-slate-800">
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    1
                  </td>
                  <td className="text-center">SMK 2 Mei Bandar Lampung</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    2
                  </td>
                  <td className="text-center">Smk Trisukses</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    3
                  </td>
                  <td className="text-center">Man 1 Bandar Lampung</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    Best Player
                  </td>
                  <td className="text-center">Ridho (Smk Trisukses)</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    Top Scorer
                  </td>
                  <td className="text-center">Algi (Smk 2 Mei)</td>
                </tr>
                <tr>
                  <td className="text-center align-middle" rowSpan={1}>
                    Best Suporter
                  </td>
                  <td className="text-center">Man 1 Bandar Lampung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  )
}
