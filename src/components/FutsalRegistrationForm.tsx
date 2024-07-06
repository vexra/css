import Link from 'next/link'

export default function FutsalRegistrationForm() {
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
            className="block font-semibold text-white"
            htmlFor="studentCardMember3"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
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
            className="block font-semibold text-white"
            htmlFor="studentCardMember4"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
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

      {/* Profile Anggota 5 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 5
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember5"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember5"
            type="text"
            name="fullnameMember5"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember5"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember5"
            type="text"
            name="phoneMember5"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember5"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember5"
            type="date"
            name="birthdateMember5"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember5"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember5"
            type="file"
            accept="image/*"
            name="studentCardMember5"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 5 End */}

      {/* Profile Anggota 6 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 6
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember6"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember6"
            type="text"
            name="fullnameMember6"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember6"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember6"
            type="text"
            name="phoneMember6"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember6"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember6"
            type="date"
            name="birthdateMember6"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember6"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember6"
            type="file"
            accept="image/*"
            name="studentCardMember6"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 6 End */}

      {/* Profile Anggota 7 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 7
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember7"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember7"
            type="text"
            name="fullnameMember7"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember7"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember7"
            type="text"
            name="phoneMember7"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember7"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember7"
            type="date"
            name="birthdateMember7"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember7"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember7"
            type="file"
            accept="image/*"
            name="studentCardMember7"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 7 End */}

      {/* Profile Anggota 8 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 8
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember8"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember8"
            type="text"
            name="fullnameMember8"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember8"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember8"
            type="text"
            name="phoneMember8"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember8"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember8"
            type="date"
            name="birthdateMember8"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember8"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember8"
            type="file"
            accept="image/*"
            name="studentCardMember8"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 8 End */}

      {/* Profile Anggota 9 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 9
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember9"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember9"
            type="text"
            name="fullnameMember9"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember9"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember9"
            type="text"
            name="phoneMember9"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember9"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember9"
            type="date"
            name="birthdateMember9"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember9"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember9"
            type="file"
            accept="image/*"
            name="studentCardMember9"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 9 End */}

      {/* Profile Anggota 10 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 10
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember10"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameMember10"
            type="text"
            name="fullnameMember10"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember10"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneMember10"
            type="text"
            name="phoneMember10"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember10"
          >
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdateMember10"
            type="date"
            name="birthdateMember10"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="studentCardMember10"
          >
            Kartu Pelajar
            <span className="font-normal text-slate-300">Max 1 Mb</span>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCardMember10"
            type="file"
            accept="image/*"
            name="studentCardMember10"
            required
          />
        </div>
      </fieldset>
      {/* Profile Anggota 10 End */}


      {/* Profile Pendamping 1 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Pendamping 1
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameAssistant1"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameAssistant1"
            type="text"
            name="fullnameAssistant1"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneAssistant1"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneAssistant1"
            type="text"
            name="phoneAssistant1"
            required
          />
        </div>
      </fieldset>
      {/* Profile Pendamping 1 End */}

      {/* Profile Pendamping 2 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Pendamping 2
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameAssistant2"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="fullnameAssistant2"
            type="text"
            name="fullnameAssistant2"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneAssistant2"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="phoneAssistant2"
            type="text"
            name="phoneAssistant2"
            required
          />
        </div>
      </fieldset>
      {/* Profile Pendamping 2 End */}

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