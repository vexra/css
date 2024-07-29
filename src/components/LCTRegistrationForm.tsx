'use client'

import registerLct from '@/actions/lct'
import compressImage from '@/lib/compress-image'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  errors: {
    fullnameLead: [],
    phoneLead: [],
    birthdateLead: [],
    studentCardLead: [],
    fullnameMember1: [],
    phoneMember1: [],
    birthdateMember1: [],
    studentCardMember1: [],
    fullnameMember2: [],
    phoneMember2: [],
    birthdateMember2: [],
    studentCardMember2: [],
    fullnameAssistant: [],
    phoneAssistant: [],
    email: [],
    teamName: [],
    paymentProof: [],
    accountHolderName: [],
  },
}

export default function LCTRegistrationForm() {
  const [state, formAction] = useFormState(registerLct, initialState)
  const [compressedFiles, setCompressedFiles] = useState({
    studentCardLead: null,
    studentCardMember1: null,
    studentCardMember2: null,
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="phoneLead">
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember1"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember2"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameAssistant"
            type="text"
            name="fullnameAssistant"
            placeholder="Nama pendamping"
            required
          />
          {state?.errors.fullnameAssistant?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneAssistant"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneAssistant"
            type="text"
            name="phoneAssistant"
            placeholder="Nomor telepon pendamping"
            required
          />
          {state?.errors.phoneAssistant?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
          <label
            className="block font-semibold text-white"
            htmlFor="institution"
          >
            Instansi
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="institution"
            type="text"
            name="institution"
            placeholder="Instansi tim"
            required
          />
          {state?.errors.institution?.map((error) => (
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
          className="w-1/2 rounded-xl bg-red-500 py-4 text-center font-bold duration-500 hover:bg-red-600"
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
        className="w-1/2 rounded-xl bg-green-500 py-4 text-center font-bold duration-500 hover:bg-green-600"
      >
        Daftar
      </button>
    )
  }
}
