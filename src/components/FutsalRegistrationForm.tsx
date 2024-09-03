'use client'

import registerFutsal from '@/actions/futsal'
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
    fullnameMember3: [],
    phoneMember3: [],
    birthdateMember3: [],
    studentCardMember3: [],
    fullnameMember4: [],
    phoneMember4: [],
    birthdateMember4: [],
    studentCardMember4: [],
    fullnameMember5: [],
    phoneMember5: [],
    birthdateMember5: [],
    studentCardMember5: [],
    fullnameMember6: [],
    phoneMember6: [],
    birthdateMember6: [],
    studentCardMember6: [],
    fullnameMember7: [],
    phoneMember7: [],
    birthdateMember7: [],
    studentCardMember7: [],
    fullnameMember8: [],
    phoneMember8: [],
    birthdateMember8: [],
    studentCardMember8: [],
    fullnameMember9: [],
    phoneMember9: [],
    birthdateMember9: [],
    studentCardMember9: [],
    fullnameMember10: [],
    phoneMember10: [],
    birthdateMember10: [],
    studentCardMember10: [],
    fullnameMember11: [],
    phoneMember11: [],
    birthdateMember11: [],
    studentCardMember11: [],
    fullnameMember12: [],
    phoneMember12: [],
    birthdateMember12: [],
    studentCardMember12: [],
    fullnameAssistant1: [],
    phoneAssistant1: [],
    fullnameAssistant2: [],
    phoneAssistant2: [],
    email: [],
    institution: [],
    teamName: [],
    paymentProof: [],
    accountHolderName: [],
  },
}

export default function FutsalRegistrationForm() {
  const [state, formAction] = useFormState(registerFutsal, initialState)
  const [compressedFiles, setCompressedFiles] = useState({
    studentCardLead: null,
    studentCardMember1: null,
    studentCardMember2: null,
    studentCardMember3: null,
    studentCardMember4: null,
    studentCardMember5: null,
    studentCardMember6: null,
    studentCardMember7: null,
    studentCardMember8: null,
    studentCardMember9: null,
    studentCardMember10: null,
    studentCardMember11: null,
    studentCardMember12: null,
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
    if (compressedFiles.studentCardMember5) {
      formData.set(
        'studentCardMember5',
        compressedFiles.studentCardMember5,
        'studentCardMember5.jpg',
      )
    }
    if (compressedFiles.studentCardMember6) {
      formData.set(
        'studentCardMember6',
        compressedFiles.studentCardMember6,
        'studentCardMember6.jpg',
      )
    }
    if (compressedFiles.studentCardMember7) {
      formData.set(
        'studentCardMember7',
        compressedFiles.studentCardMember7,
        'studentCardMember7.jpg',
      )
    }
    if (compressedFiles.studentCardMember8) {
      formData.set(
        'studentCardMember8',
        compressedFiles.studentCardMember8,
        'studentCardMember8.jpg',
      )
    }
    if (compressedFiles.studentCardMember9) {
      formData.set(
        'studentCardMember9',
        compressedFiles.studentCardMember9,
        'studentCardMember9.jpg',
      )
    }
    if (compressedFiles.studentCardMember10) {
      formData.set(
        'studentCardMember10',
        compressedFiles.studentCardMember10,
        'studentCardMember10.jpg',
      )
    }
    if (compressedFiles.studentCardMember11) {
      formData.set(
        'studentCardMember11',
        compressedFiles.studentCardMember11,
        'studentCardMember11.jpg',
      )
    }
    if (compressedFiles.studentCardMember12) {
      formData.set(
        'studentCardMember12',
        compressedFiles.studentCardMember12,
        'studentCardMember12.jpg',
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember3"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember4"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember5"
            type="text"
            name="fullnameMember5"
            placeholder="Nama anggota 5"
            required
          />
          {state?.errors.fullnameMember5?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember5"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember5"
            type="text"
            name="phoneMember5"
            placeholder="Nomor telepon anggota 5"
            required
          />
          {state?.errors.phoneMember5?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember5"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember5"
            type="date"
            name="birthdateMember5"
            required
          />
          {state?.errors.birthdateMember5?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember5"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember5"
            type="file"
            accept="image/*"
            name="studentCardMember5"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember5?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember6"
            type="text"
            name="fullnameMember6"
            placeholder="Nama anggota 6"
            required
          />
          {state?.errors.fullnameMember6?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember6"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember6"
            type="text"
            name="phoneMember6"
            placeholder="Nomor telepon anggota 6"
            required
          />
          {state?.errors.phoneMember6?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember6"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember6"
            type="date"
            name="birthdateMember6"
            required
          />
          {state?.errors.birthdateMember6?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember6"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember6"
            type="file"
            accept="image/*"
            name="studentCardMember6"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember6?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember7"
            type="text"
            name="fullnameMember7"
            placeholder="Nama anggota 7"
            required
          />
          {state?.errors.fullnameMember7?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember7"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember7"
            type="text"
            name="phoneMember7"
            placeholder="Nomor telepon anggota 7"
            required
          />
          {state?.errors.phoneMember7?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember7"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember7"
            type="date"
            name="birthdateMember7"
            required
          />
          {state?.errors.birthdateMember7?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember7"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember7"
            type="file"
            accept="image/*"
            name="studentCardMember7"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember7?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember8"
            type="text"
            name="fullnameMember8"
            placeholder="Nama anggota 8"
            required
          />
          {state?.errors.fullnameMember8?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember8"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember8"
            type="text"
            name="phoneMember8"
            placeholder="Nomor telepon anggota 8"
            required
          />
          {state?.errors.phoneMember8?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember8"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember8"
            type="date"
            name="birthdateMember8"
            required
          />
          {state?.errors.birthdateMember8?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember8"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember8"
            type="file"
            accept="image/*"
            name="studentCardMember8"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember8?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember9"
            type="text"
            name="fullnameMember9"
            placeholder="Nama anggota 9"
            required
          />
          {state?.errors.fullnameMember9?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember9"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember9"
            type="text"
            name="phoneMember9"
            placeholder="Nomor telepon anggota 9"
            required
          />
          {state?.errors.phoneMember9?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember9"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember9"
            type="date"
            name="birthdateMember9"
            required
          />
          {state?.errors.birthdateMember9?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember9"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember9"
            type="file"
            accept="image/*"
            name="studentCardMember9"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember9?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember10"
            type="text"
            name="fullnameMember10"
            placeholder="Nama anggota 10"
            required
          />
          {state?.errors.fullnameMember10?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember10"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember10"
            type="text"
            name="phoneMember10"
            placeholder="Nomor telepon anggota 10"
            required
          />
          {state?.errors.phoneMember10?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember10"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember10"
            type="date"
            name="birthdateMember10"
            required
          />
          {state?.errors.birthdateMember10?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember10"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember10"
            type="file"
            accept="image/*"
            name="studentCardMember10"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember10?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>
      </fieldset>
      {/* Profile Anggota 10 End */}

      {/* Profile Anggota 11 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 11
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember11"
          >
            Nama Lengkap
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember11"
            type="text"
            name="fullnameMember11"
            placeholder="Nama anggota 11"
            required
          />
          {state?.errors.fullnameMember11?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember11"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember11"
            type="text"
            name="phoneMember11"
            placeholder="Nomor telepon anggota 11"
            required
          />
          {state?.errors.phoneMember11?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember11"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember11"
            type="date"
            name="birthdateMember11"
            required
          />
          {state?.errors.birthdateMember11?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember11"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember11"
            type="file"
            accept="image/*"
            name="studentCardMember11"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember11?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>
      </fieldset>
      {/* Profile Anggota 11 End */}

      {/* Profile Anggota 12 Start */}
      <fieldset className="mt-8">
        <legend className="text-3xl font-semibold text-white">
          Profil Anggota 12
        </legend>
        <div className="mt-2">
          <label
            className="block font-semibold text-white"
            htmlFor="fullnameMember12"
          >
            Nama Lengkap
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameMember12"
            type="text"
            name="fullnameMember12"
            placeholder="Nama anggota 12"
            required
          />
          {state?.errors.fullnameMember12?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneMember12"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneMember12"
            type="text"
            name="phoneMember12"
            placeholder="Nomor telepon anggota 12"
            required
          />
          {state?.errors.phoneMember12?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="birthdateMember12"
          >
            Tanggal Lahir
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="birthdateMember12"
            type="date"
            name="birthdateMember12"
            required
          />
          {state?.errors.birthdateMember12?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="flex flex-row items-center gap-2 font-semibold text-white"
            htmlFor="studentCardMember12"
          >
            Kartu Pelajar
            <small className="font-normal text-slate-300">Max 1 Mb</small>
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white shadow-custom outline-none"
            id="studentCardMember12"
            type="file"
            accept="image/*"
            name="studentCardMember12"
            onChange={handleFileChange}
            required
          />
          {state?.errors.studentCardMember12?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>
      </fieldset>
      {/* Profile Anggota 12 End */}

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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameAssistant1"
            type="text"
            name="fullnameAssistant1"
            placeholder="Nama pendamping 1"
            required
          />
          {state?.errors.fullnameAssistant1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneAssistant1"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneAssistant1"
            type="text"
            name="phoneAssistant1"
            placeholder="Nomor telepon pendamping 1"
            required
          />
          {state?.errors.phoneAssistant1?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="fullnameAssistant2"
            type="text"
            name="fullnameAssistant2"
            placeholder="Nama pendamping 2"
            required
          />
          {state?.errors.fullnameAssistant2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
        </div>

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="phoneAssistant2"
          >
            No. Telpon
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="phoneAssistant2"
            type="text"
            name="phoneAssistant2"
            placeholder="Nomor telepon pendamping 2"
            required
          />
          {state?.errors.phoneAssistant2?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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

        <div className="mt-4">
          <label
            className="block font-semibold text-white"
            htmlFor="institution"
          >
            Nama Institusi
          </label>
          <input
            className="mt-1 w-full rounded-lg bg-[#D9D9D933] px-2 py-2 text-white placeholder-white/70 shadow-custom outline-none"
            id="institution"
            type="text"
            name="institution"
            placeholder="Nama institusi"
            required
          />
          {state?.errors.institution?.map((error) => (
            <p key={error} aria-live="polite" className="sr-only">
              {error}
            </p>
          ))}
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
          href="/futsal"
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
