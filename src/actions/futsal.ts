'use server'

import { currentUser } from '@/lib/auth'
import db from '@/lib/db'
import { registerFutsalSchema } from '@/schemas'
import { put } from '@vercel/blob'
import { redirect } from 'next/navigation'

export default async function registerFutsal(
  prevState: any,
  formData: FormData,
) {
  const user = await currentUser()
  if (!user) return redirect('/')

  const validatedFields = registerFutsalSchema.safeParse(
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
    fullnameMember3,
    phoneMember3,
    birthdateMember3,
    studentCardMember3,
    fullnameMember4,
    phoneMember4,
    birthdateMember4,
    studentCardMember4,
    fullnameMember5,
    phoneMember5,
    birthdateMember5,
    studentCardMember5,
    fullnameMember6,
    phoneMember6,
    birthdateMember6,
    studentCardMember6,
    fullnameMember7,
    phoneMember7,
    birthdateMember7,
    studentCardMember7,
    fullnameMember8,
    phoneMember8,
    birthdateMember8,
    studentCardMember8,
    fullnameMember9,
    phoneMember9,
    birthdateMember9,
    studentCardMember9,
    fullnameMember10,
    phoneMember10,
    birthdateMember10,
    studentCardMember10,
    fullnameMember11,
    phoneMember11,
    birthdateMember11,
    studentCardMember11,
    fullnameMember12,
    phoneMember12,
    birthdateMember12,
    studentCardMember12,
    fullnameAssistant1,
    phoneAssistant1,
    fullnameAssistant2,
    phoneAssistant2,
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

  const studentCardMember5BlobPromise = put(
    studentCardMember5.name,
    studentCardMember5,
    {
      access: 'public',
    },
  )

  const studentCardMember6BlobPromise = put(
    studentCardMember6.name,
    studentCardMember6,
    {
      access: 'public',
    },
  )

  const studentCardMember7BlobPromise = put(
    studentCardMember7.name,
    studentCardMember7,
    {
      access: 'public',
    },
  )

  const studentCardMember8BlobPromise = put(
    studentCardMember8.name,
    studentCardMember8,
    {
      access: 'public',
    },
  )

  const studentCardMember9BlobPromise = put(
    studentCardMember9.name,
    studentCardMember9,
    {
      access: 'public',
    },
  )

  const studentCardMember10BlobPromise = put(
    studentCardMember10.name,
    studentCardMember10,
    {
      access: 'public',
    },
  )

  const studentCardMember11BlobPromise = put(
    studentCardMember11.name,
    studentCardMember11,
    {
      access: 'public',
    },
  )

  const studentCardMember12BlobPromise = put(
    studentCardMember12.name,
    studentCardMember12,
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
    studentCardMember5BlobPromise,
    studentCardMember6BlobPromise,
    studentCardMember7BlobPromise,
    studentCardMember8BlobPromise,
    studentCardMember9BlobPromise,
    studentCardMember10BlobPromise,
    studentCardMember11BlobPromise,
    studentCardMember12BlobPromise,
    paymentProofBlobPromise,
  ])

  const futsal = await db.futsal.create({
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
      fullnameMember3,
      phoneMember3,
      birthdateMember3,
      studentCardMember3: result[3].downloadUrl,
      fullnameMember4,
      phoneMember4,
      birthdateMember4,
      studentCardMember4: result[4].downloadUrl,
      fullnameMember5,
      phoneMember5,
      birthdateMember5,
      studentCardMember5: result[5].downloadUrl,
      fullnameMember6,
      phoneMember6,
      birthdateMember6,
      studentCardMember6: result[6].downloadUrl,
      fullnameMember7,
      phoneMember7,
      birthdateMember7,
      studentCardMember7: result[7].downloadUrl,
      fullnameMember8,
      phoneMember8,
      birthdateMember8,
      studentCardMember8: result[8].downloadUrl,
      fullnameMember9,
      phoneMember9,
      birthdateMember9,
      studentCardMember9: result[9].downloadUrl,
      fullnameMember10,
      phoneMember10,
      birthdateMember10,
      studentCardMember10: result[10].downloadUrl,
      fullnameMember11,
      phoneMember11,
      birthdateMember11,
      studentCardMember11: result[11].downloadUrl,
      fullnameMember12,
      phoneMember12,
      birthdateMember12,
      studentCardMember12: result[12].downloadUrl,
      fullnameAssistant1,
      phoneAssistant1,
      fullnameAssistant2,
      phoneAssistant2,
      email,
      institution,
      teamName,
      paymentProof: result[13].downloadUrl,
      accountHolderName,
    },
  })
  redirect('wa-futsal')
}
