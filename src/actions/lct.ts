'use server'

import { currentUser } from '@/lib/auth'
import db from '@/lib/db'
import { registerLctSchema } from '@/schemas'
import { put } from '@vercel/blob'
import { redirect } from 'next/navigation'

export default async function registerLct(prevState: any, formData: FormData) {
  const user = await currentUser()
  if (!user) return redirect('/')

  const validatedFields = registerLctSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const {
    fullnameLead,
    phoneLead,
    birthdateLead,
    studentCardLead,
    fullnameMember1,
    phoneMember1,
    birthdateMember1,
    studentCardMember1,
    fullnameMember2,
    phoneMember2,
    birthdateMember2,
    studentCardMember2,
    fullnameAssistant,
    phoneAssistant,
    email,
    institution,
    teamName,
    paymentProof,
    accountHolderName,
  } = validatedFields.data

  const studentCardLeadBlobPromise = put(
    studentCardLead.name,
    studentCardLead,
    {
      access: 'public',
    },
  )

  const studentCardMember1BlobPromise = put(
    studentCardMember1.name,
    studentCardMember1,
    {
      access: 'public',
    },
  )

  const studentCardMember2BlobPromise = put(
    studentCardMember2.name,
    studentCardMember2,
    {
      access: 'public',
    },
  )

  const paymentProofBlobPromise = put(paymentProof.name, paymentProof, {
    access: 'public',
  })

  const result = await Promise.all([
    studentCardLeadBlobPromise,
    studentCardMember1BlobPromise,
    studentCardMember2BlobPromise,
    paymentProofBlobPromise,
  ])

  const lct = await db.lct.create({
    data: {
      userId: user.id!,
      fullnameLead,
      phoneLead,
      birthdateLead,
      studentCardLead: result[0].downloadUrl,
      fullnameMember1,
      phoneMember1,
      birthdateMember1,
      studentCardMember1: result[1].downloadUrl,
      fullnameMember2,
      phoneMember2,
      birthdateMember2,
      studentCardMember2: result[2].downloadUrl,
      fullnameAssistant,
      phoneAssistant,
      email,
      institution,
      teamName,
      paymentProof: result[3].downloadUrl,
      accountHolderName,
    },
  })
  redirect('wa-lct')
}
