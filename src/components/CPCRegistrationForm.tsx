import Link from 'next/link'

export default function CPCRegistrationForm() {
  return (
    <form method="post" encType="multipart/form-data">
      {/* Profile */}
      <fieldset>
        <legend className="text-3xl font-semibold text-white">
          Profil Peserta
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="fullname">
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullname"
            type="text"
            name="fullname"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phone"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phone"
            type="text"
            name="phone"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="institution"
          >
            Instansi
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="institution"
            type="text"
            name="institution"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdate"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdate"
            type="date"
            name="birthdate"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCard"
          >
           Upload Kartu Identitas Diri
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCard"
            type="file"
            accept="image/*"
            name="studentCard"
            required
          />
        </div>
      </fieldset>
      {/* Profile End */}

      {/* Administarasi Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Administarasi
        </legend>
        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="paymentProof"
          >
            Upload Bukti Pembayaran
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="paymentProof"
            type="file"
            accept="image/*"
            name="paymentProof"
            required
          />
        </div>
      </fieldset>
      {/* Administrasi End */}

      <div className="mt-8 flex gap-2 text-white">
        <Link href="" className="w-1/2 rounded-xl bg-red-500 py-4 font-bold">
          Kembali
        </Link>
        <Link href="" className="w-1/2 rounded-xl bg-green-400 py-4 font-bold">
          Daftar
        </Link>
      </div>
    </form>
  )
}