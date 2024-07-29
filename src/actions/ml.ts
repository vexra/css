'use server'

import { currentUser } from '@/lib/auth'
import db from '@/lib/db'
import { registerMlSchema } from '@/schemas'
import { put } from '@vercel/blob'
import { redirect } from 'next/navigation'

export default async function registerMl(prevState: any, formData: FormData) {
  const user = await currentUser()
  if (!user) return redirect('/')

  const validatedFields = registerMlSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const {
    fullnameLead,
    usernameLead,
    userIdLead,
    phoneLead,
    birthdateLead,
    studentCardLead,
    fullnameMember1,
    usernameMember1,
    userIdMember1,
    phoneMember1,
    birthdateMember1,
    studentCardMember1,
    fullnameMember2,
    usernameMember2,
    userIdMember2,
    phoneMember2,
    birthdateMember2,
    studentCardMember2,
    fullnameMember3,
    usernameMember3,
    userIdMember3,
    phoneMember3,
    birthdateMember3,
    studentCardMember3,
    fullnameMember4,
    usernameMember4,
    userIdMember4,
    phoneMember4,
    birthdateMember4,
    studentCardMember4,
    fullnameSubtituteMember1,
    usernameSubtituteMember1,
    userIdSubtituteMember1,
    phoneSubtituteMember1,
    birthdateSubtituteMember1,
    studentCardSubtituteMember1,
    fullnameSubtituteMember2,
    usernameSubtituteMember2,
    userIdSubtituteMember2,
    phoneSubtituteMember2,
    birthdateSubtituteMember2,
    studentCardSubtituteMember2,
    email,
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

  const studentCardMember3BlobPromise = put(
    studentCardMember3.name,
    studentCardMember3,
    {
      access: 'public',
    },
  )

  const studentCardMember4BlobPromise = put(
    studentCardMember4.name,
    studentCardMember4,
    {
      access: 'public',
    },
  )

  const studentCardSubtituteMember1BlobPromise = put(
    studentCardSubtituteMember1.name,
    studentCardSubtituteMember1,
    {
      access: 'public',
    },
  )

  const studentCardSubtituteMember2BlobPromise = put(
    studentCardSubtituteMember2.name,
    studentCardSubtituteMember2,
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
    studentCardMember3BlobPromise,
    studentCardMember4BlobPromise,
    studentCardSubtituteMember1BlobPromise,
    studentCardSubtituteMember2BlobPromise,
    paymentProofBlobPromise,
  ])

  const ml = await db.ml.create({
    data: {
      userId: user.id!,
      fullnameLead,
      usernameLead,
      userIdLead,
      phoneLead,
      birthdateLead,
      studentCardLead: result[0].downloadUrl,
      fullnameMember1,
      usernameMember1,
      userIdMember1,
      phoneMember1,
      birthdateMember1,
      studentCardMember1: result[1].downloadUrl,
      fullnameMember2,
      usernameMember2,
      userIdMember2,
      phoneMember2,
      birthdateMember2,
      studentCardMember2: result[2].downloadUrl,
      fullnameMember3,
      usernameMember3,
      userIdMember3,
      phoneMember3,
      birthdateMember3,
      studentCardMember3: result[3].downloadUrl,
      fullnameMember4,
      usernameMember4,
      userIdMember4,
      phoneMember4,
      birthdateMember4,
      studentCardMember4: result[4].downloadUrl,
      fullnameSubtituteMember1,
      usernameSubtituteMember1,
      userIdSubtituteMember1,
      phoneSubtituteMember1,
      birthdateSubtituteMember1,
      studentCardSubtituteMember1: result[5].downloadUrl,
      fullnameSubtituteMember2,
      usernameSubtituteMember2,
      userIdSubtituteMember2,
      phoneSubtituteMember2,
      birthdateSubtituteMember2,
      studentCardSubtituteMember2: result[6].downloadUrl,
      email,
      teamName,
      paymentProof: result[7].downloadUrl,
      accountHolderName,
    },
  })
  redirect('wa-ml')
}
