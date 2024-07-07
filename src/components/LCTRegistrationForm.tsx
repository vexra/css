import Link from 'next/link'

export default function LCTRegistrationForm() {
  return (
    <form method="post" encType="multipart/form-data">
      {/* Profile Ketua Start */}
      <fieldset>
        <legend className="text-3xl font-semibold text-white">
          Profil Ketua
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameLead"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameLead"
            type="text"
            name="fullnameLead"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="phoneLead">
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneLead"
            type="text"
            name="phoneLead"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateLead"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateLead"
            type="date"
            name="birthdateLead"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardLead"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardLead"
            type="file"
            accept="image/*"
            name="studentCardLead"
            required
          />
        </div>
      </fieldset>
      {/* Profile Ketua End */}

      {/* Profile Anggota 1 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 1
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember1"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember1"
            type="text"
            name="fullnameMember1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember1"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember1"
            type="text"
            name="phoneMember1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember1"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember1"
            type="date"
            name="birthdateMember1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember1"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember1"
            type="file"
            accept="image/*"
            name="studentCardMember1"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 1 End */}

      {/* Profile Anggota 2 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 2
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember2"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember2"
            type="text"
            name="fullnameMember2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember2"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember2"
            type="text"
            name="phoneMember2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember2"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember2"
            type="date"
            name="birthdateMember2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember2"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember2"
            type="file"
            accept="image/*"
            name="studentCardMember2"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 2 End */}

      {/* Profile Pendamping Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Pendamping
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameAssistant"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameAssistant"
            type="text"
            name="fullnameAssistant"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneAssistant"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneAssistant"
            type="text"
            name="phoneAssistant"
            required
          />
        </div>
      </fieldset>
      {/* Profile Pendamping End */}

      {/* Profile Tim Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Tim
        </legend>
        <div className="mt-2">
          <label className="block font-semibold text-white" htmlFor="email">
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
          <label className="block font-semibold text-white" htmlFor="teamName">
            Nama Tim
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="teamName"
            type="text"
            name="teamName"
            required
          />
        </div>
      </fieldset>
      {/* Profile Tim End */}

      {/* Administrasi Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Administrasi
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

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="accountHolderName"
          >
            Atas Nama
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="accountHolderName"
            type="text"
            name="accountHolderName"
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
