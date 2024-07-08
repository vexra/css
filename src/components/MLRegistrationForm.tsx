'use client'

import registerMl from '@/actions/ml'
import compressImage from '@/lib/compress-image'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  errors: {
    fullnameLead: [],
    usernameLead: [],
    userIdLead: [],
    phoneLead: [],
    birthdateLead: [],
    studentCardLead: [],
    fullnameMember1: [],
    usernameMember1: [],
    userIdMember1: [],
    phoneMember1: [],
    birthdateMember1: [],
    studentCardMember1: [],
    fullnameMember2: [],
    usernameMember2: [],
    userIdMember2: [],
    phoneMember2: [],
    birthdateMember2: [],
    studentCardMember2: [],
    fullnameMember3: [],
    usernameMember3: [],
    userIdMember3: [],
    phoneMember3: [],
    birthdateMember3: [],
    studentCardMember3: [],
    fullnameMember4: [],
    usernameMember4: [],
    userIdMember4: [],
    phoneMember4: [],
    birthdateMember4: [],
    studentCardMember4: [],
    fullnameSubtituteMember1: [],
    usernameSubtituteMember1: [],
    userIdSubtituteMember1: [],
    phoneSubtituteMember1: [],
    birthdateSubtituteMember1: [],
    studentCardSubtituteMember1: [],
    fullnameSubtituteMember2: [],
    usernameSubtituteMember2: [],
    userIdSubtituteMember2: [],
    phoneSubtituteMember2: [],
    birthdateSubtituteMember2: [],
    studentCardSubtituteMember2: [],
    email: [],
    teamName: [],
    paymentProof: [],
    accountHolderName: [],
  },
}

export default function MLRegistrationForm() {
  const [state, formAction] = useFormState(registerMl, initialState)
  const [compressedFiles, setCompressedFiles] = useState({
    studentCardLead: null,
    studentCardMember1: null,
    studentCardMember2: null,
    studentCardMember3: null,
    studentCardMember4: null,
    studentCardSubtituteMember1: null,
    studentCardSubtituteMember2: null,
    paymentProof: null,
  })

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target
    if (files && files.length > 0) {
      const compressedFile = await compressImage(files[0])
      setCompressedFiles((prevState) => ({
        ...prevState,
        [name]: compressedFile,
      }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    // Replace original files with compressed files in formData
    if (compressedFiles.studentCardLead) {
      formData.set(
        'studentCardLead',
        compressedFiles.studentCardLead,
        'studentCardLead.jpg',
      )
    }
    if (compressedFiles.studentCardMember1) {
      formData.set(
        'studentCardMember1',
        compressedFiles.studentCardMember1,
        'studentCardMember1.jpg',
      )
    }
    if (compressedFiles.studentCardMember2) {
      formData.set(
        'studentCardMember2',
        compressedFiles.studentCardMember2,
        'studentCardMember2.jpg',
      )
    }
    if (compressedFiles.studentCardMember3) {
      formData.set(
        'studentCardMember3',
        compressedFiles.studentCardMember3,
        'studentCardMember3.jpg',
      )
    }
    if (compressedFiles.studentCardMember4) {
      formData.set(
        'studentCardMember4',
        compressedFiles.studentCardMember4,
        'studentCardMember4.jpg',
      )
    }
    if (compressedFiles.studentCardSubtituteMember1) {
      formData.set(
        'studentCardSubtituteMember1',
        compressedFiles.studentCardSubtituteMember1,
        'studentCardSubtituteMember1.jpg',
      )
    }
    if (compressedFiles.studentCardSubtituteMember2) {
      formData.set(
        'studentCardSubtituteMember2',
        compressedFiles.studentCardSubtituteMember2,
        'studentCardSubtituteMember2.jpg',
      )
    }
    if (compressedFiles.paymentProof) {
      formData.set(
        'paymentProof',
        compressedFiles.paymentProof,
        'paymentProof.jpg',
      )
    }

    // Perform your form submission with formData
    formAction(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameLead"
            type="text"
            name="fullnameLead"
            placeholder="Nama ketua"
            required
          />
          {state?.errors.fullnameLead?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameLead"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameLead"
            type="text"
            name="usernameLead"
            placeholder="Username ketua"
            required
          />
          {state?.errors.usernameLead?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdLead"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdLead"
            type="text"
            name="userIdLead"
            placeholder="User id ketua"
            required
          />
          {state?.errors.userIdLead?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="phoneLead">
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneLead"
            type="text"
            name="phoneLead"
            placeholder="Nomor telepon ketua"
            required
          />
          {state?.errors.phoneLead?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateLead?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardLead?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameMember1"
            type="text"
            name="fullnameMember1"
            placeholder="Nama anggota 1"
            required
          />
          {state?.errors.fullnameMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember1"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameMember1"
            type="text"
            name="usernameMember1"
            placeholder="Username anggota 1"
            required
          />
          {state?.errors.usernameMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember1"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdMember1"
            type="text"
            name="userIdMember1"
            placeholder="User id anggota 1"
            required
          />
          {state?.errors.userIdMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember1"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneMember1"
            type="text"
            name="phoneMember1"
            placeholder="Nomor telepon anggota 1"
            required
          />
          {state?.errors.phoneMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameMember2"
            type="text"
            name="fullnameMember2"
            placeholder="Nama anggota 2"
            required
          />
          {state?.errors.fullnameMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember2"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameMember2"
            type="text"
            name="usernameMember2"
            placeholder="Username anggota 2"
            required
          />
          {state?.errors.usernameMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember2"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdMember2"
            type="text"
            name="userIdMember2"
            placeholder="User id anggota 2"
            required
          />
          {state?.errors.userIdMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember2"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneMember2"
            type="text"
            name="phoneMember2"
            placeholder="Nomor telepon anggota 2"
            required
          />
          {state?.errors.phoneMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameMember3"
            type="text"
            name="fullnameMember3"
            placeholder="Nama anggota 3"
            required
          />
          {state?.errors.fullnameMember3?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember3"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameMember3"
            type="text"
            name="usernameMember3"
            placeholder="Username anggota 3"
            required
          />
          {state?.errors.usernameMember3?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember3"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdMember3"
            type="text"
            name="userIdMember3"
            placeholder="User id anggota 3"
            required
          />
          {state?.errors.userIdMember3?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember3"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneMember3"
            type="text"
            name="phoneMember3"
            placeholder="Nomor telepon anggota 3"
            required
          />
          {state?.errors.phoneMember3?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateMember3?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember3?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameMember4"
            type="text"
            name="fullnameMember4"
            placeholder="Nama anggota 4"
            required
          />
          {state?.errors.fullnameMember4?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameMember4"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameMember4"
            type="text"
            name="usernameMember4"
            placeholder="Username anggota 4"
            required
          />
          {state?.errors.usernameMember4?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdMember4"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdMember4"
            type="text"
            name="userIdMember4"
            placeholder="User id anggota 4"
            required
          />
          {state?.errors.userIdMember4?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember4"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneMember4"
            type="text"
            name="phoneMember4"
            placeholder="Nomor telepon anggota 4"
            required
          />
          {state?.errors.phoneMember4?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateMember4?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember4?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameSubtituteMember1"
            type="text"
            name="fullnameSubtituteMember1"
            placeholder="Nama cadangan 1"
            required
          />
          {state?.errors.fullnameSubtituteMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameSubtituteMember1"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameSubtituteMember1"
            type="text"
            name="usernameSubtituteMember1"
            placeholder="Username cadangan 1"
            required
          />
          {state?.errors.usernameSubtituteMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdSubtituteMember1"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdSubtituteMember1"
            type="text"
            name="userIdSubtituteMember1"
            placeholder="User id cadangan 1"
            required
          />
          {state?.errors.userIdSubtituteMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneSubtituteMember1"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneSubtituteMember1"
            type="text"
            name="phoneSubtituteMember1"
            placeholder="Nomor telepon cadangan 1"
            required
          />
          {state?.errors.phoneSubtituteMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateSubtituteMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardSubtituteMember1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullnameSubtituteMember2"
            type="text"
            name="fullnameSubtituteMember2"
            placeholder="Nama cadangan 2"
            required
          />
          {state?.errors.fullnameSubtituteMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="usernameSubtituteMember2"
          >
            Username
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="usernameSubtituteMember2"
            type="text"
            name="usernameSubtituteMember2"
            placeholder="Username cadangan 2"
            required
          />
          {state?.errors.usernameSubtituteMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="userIdSubtituteMember2"
          >
            User Id
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="userIdSubtituteMember2"
            type="text"
            name="userIdSubtituteMember2"
            placeholder="User id cadangan 2"
            required
          />
          {state?.errors.userIdSubtituteMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneSubtituteMember2"
          >
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phoneSubtituteMember2"
            type="text"
            name="phoneSubtituteMember2"
            placeholder="Nomor telepon cadangan 2"
            required
          />
          {state?.errors.phoneSubtituteMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          {state?.errors.birthdateSubtituteMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardSubtituteMember2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="email"
            type="email"
            name="email"
            placeholder="Email tim"
            required
          />
          {state?.errors.email?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="teamName">
            Nama Tim
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="teamName"
            type="text"
            name="teamName"
            placeholder="Nama tim"
            required
          />
          {state?.errors.teamName?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            onChange={handleFileChange}
            required
          />
          {state?.errors.paymentProof?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="accountHolderName"
          >
            Atas Nama
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="accountHolderName"
            type="text"
            name="accountHolderName"
            placeholder="Pembayaran atas nama"
            required
          />
          {state?.errors.accountHolderName?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>
      </fieldset>
      {/* Administrasi End */}

      <div className="mt-8 flex gap-2 text-white">
        <Link
          href="/"
          className="w-1/2 rounded-xl bg-red-500 py-4 text-center font-bold"
        >
          Kembali
        </Link>
        <SubmitButton />
      </div>
    </form>
  )

  function SubmitButton() {
    const { pending } = useFormStatus()

    return (
      <button
        type="submit"
        disabled={pending}
        className="w-1/2 rounded-xl bg-green-400 py-4 text-center font-bold"
      >
        Daftar
      </button>
    )
  }
}
