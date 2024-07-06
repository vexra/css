import Link from 'next/link'

export default function MLRegistrationForm() {
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

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameLead"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameLead"
            type="text"
            name="usernameLead"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdLead"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdLead"
            type="text"
            name="userIdLead"
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
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardLead"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
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

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember1"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameMember1"
            type="text"
            name="usernameMember1"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember1"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdMember1"
            type="text"
            name="userIdMember1"
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
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember1"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
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

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember2"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameMember2"
            type="text"
            name="usernameMember2"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember2"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdMember2"
            type="text"
            name="userIdMember2"
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
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember2"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
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

      {/* Profile Anggota 3 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 3
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember3"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember3"
            type="text"
            name="fullnameMember3"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember3"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameMember3"
            type="text"
            name="usernameMember3"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember3"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdMember3"
            type="text"
            name="userIdMember3"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember3"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember3"
            type="text"
            name="phoneMember3"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember3"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember3"
            type="date"
            name="birthdateMember3"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember3"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember3"
            type="file"
            accept="image/*"
            name="studentCardMember3"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 3 End */}

      {/* Profile Anggota 4 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 4
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember4"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember4"
            type="text"
            name="fullnameMember4"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember4"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameMember4"
            type="text"
            name="usernameMember4"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember4"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdMember4"
            type="text"
            name="userIdMember4"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember4"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember4"
            type="text"
            name="phoneMember4"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember4"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember4"
            type="date"
            name="birthdateMember4"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember4"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember4"
            type="file"
            accept="image/*"
            name="studentCardMember4"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 4 End */}

      {/* Profile Cadangan 1 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Cadangan 1
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameSubtituteMember1"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameSubtituteMember1"
            type="text"
            name="fullnameSubtituteMember1"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameSubtituteMember1"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameSubtituteMember1"
            type="text"
            name="usernameSubtituteMember1"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdSubtituteMember1"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdSubtituteMember1"
            type="text"
            name="userIdSubtituteMember1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneSubtituteMember1"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneSubtituteMember1"
            type="text"
            name="phoneSubtituteMember1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateSubtituteMember1"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateSubtituteMember1"
            type="date"
            name="birthdateSubtituteMember1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardSubtituteMember1"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardSubtituteMember1"
            type="file"
            accept="image/*"
            name="studentCardSubtituteMember1"
            required
          />
        </div>
      </fieldset>
      {/* Profile Cadangan 1 End */}

      {/* Profile Cadangan 2 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Cadangan 2
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameSubtituteMember2"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameSubtituteMember2"
            type="text"
            name="fullnameSubtituteMember2"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameSubtituteMember2"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="usernameSubtituteMember2"
            type="text"
            name="usernameSubtituteMember2"
            required
          />
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdSubtituteMember2"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="userIdSubtituteMember2"
            type="text"
            name="userIdSubtituteMember2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneSubtituteMember2"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneSubtituteMember2"
            type="text"
            name="phoneSubtituteMember2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateSubtituteMember2"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateSubtituteMember2"
            type="date"
            name="birthdateSubtituteMember2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardSubtituteMember2"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardSubtituteMember2"
            type="file"
            accept="image/*"
            name="studentCardSubtituteMember2"
            required
          />
        </div>
      </fieldset>
      {/* Profile Cadangan 2 End */}

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

      {/* Administarasi Start */}
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
      </fieldset>
      {/* Administrasi End */}

      <div className="mt-8 flex gap-2 text-white">
        <Link
          href=""
          className="w-1/2 rounded-xl bg-red-500 py-4 text-center font-bold"
        >
          Kembali
        </Link>
        <Link
          href=""
          className="w-1/2 rounded-xl bg-green-400 py-4 text-center font-bold"
        >
          Daftar
        </Link>
      </div>
    </form>
  )
}
