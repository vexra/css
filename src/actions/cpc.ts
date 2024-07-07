'use server'

import { currentUser } from '@/lib/auth'
import db from '@/lib/db'
import { registerCpcSchema } from '@/schemas'
import { put } from '@vercel/blob'
import { redirect } from 'next/navigation'

export default async function registerCpc(prevState: any, formData: FormData) {
  const user = await currentUser()
  if (!user) return redirect('/')

  const validatedFields = registerCpcSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const {
    accountHolderName,
    birthdate,
    email,
    fullname,
    institution,
    paymentProof,
    phone,
    studentCard,
  } = validatedFields.data

  const paymentProofBlobPromise = put(paymentProof.name, paymentProof, {
    access: 'public',
  })

  const studentCardBlobPromise = put(studentCard.name, studentCard, {
    access: 'public',
  })

  const result = await Promise.all([
    paymentProofBlobPromise,
    studentCardBlobPromise,
  ])

  const cpc = await db.cpc.create({
    data: {
      userId: user.id!,
      accountHolderName,
      birthdate,
      email,
      fullname,
      institution,
      paymentProof: result[0].downloadUrl,
      phone,
      studentCard: result[1].downloadUrl,
    },
  })
}
