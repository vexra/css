'use client'

import registerCpc from '@/actions/cpc'
import compressImage from '@/lib/compress-image'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  errors: {
    email: [],
    fullname: [],
    phone: [],
    institution: [],
    birthdate: [],
    studentCard: [],
    paymentProof: [],
    accountHolderName: [],
  },
}

export default function CPCRegistrationForm() {
  const [state, formAction] = useFormState(registerCpc, initialState)
  const [compressedFiles, setCompressedFiles] = useState({
    studentCard: null,
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
    if (compressedFiles.studentCard) {
      formData.set(
        'studentCard',
        compressedFiles.studentCard,
        'studentCard.jpg',
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
      {/* Profile */}
      <fieldset>
        <legend className="text-3xl font-semibold text-white">
          Profil Peserta
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
            placeholder="Email kamu"
            required
          />
          {state?.errors.email?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="fullname">
            Nama Lengkap
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Nama kamu"
            required
          />
          {state?.errors.fullname?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="phone">
            No. Telpon
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="phone"
            type="text"
            name="phone"
            placeholder="Nomor telepon kamu"
            required
          />
          {state?.errors.phone?.map((error) => (
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
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 outline-none"
            id="institution"
            type="text"
            name="institution"
            placeholder="Instansi kamu"
            required
          />
          {state?.errors.institution?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-white" htmlFor="birthdate">
            Tanggal Lahir
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="birthdate"
            type="date"
            name="birthdate"
            required
          />
          {state?.errors.birthdate?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCard"
          >
            Upload Kartu Identitas Diri
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="shadow-custom mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white outline-none"
            id="studentCard"
            type="file"
            accept="image/*"
            name="studentCard"
            required
          />
          {state?.errors.studentCard?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>
      </fieldset>

      {/* Administrasi */}
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

      <div className="mt-8 flex gap-2 text-white">
        <Link
          href="/cpc"
          className="w-1/2 rounded-xl bg-red-500 py-4 text-center font-bold"
        >
          Kembali
        </Link>
        <SubmitButton />
      </div>
    </form>
  )
}

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
