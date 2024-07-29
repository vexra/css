'use server'

import { currentUser } from '@/lib/auth'
import db from '@/lib/db'
import { registerCpcSchema } from '@/schemas'
import { put } from '@vercel/blob'
import { redirect } from 'next/navigation'

export default async function registerCpc(prevState: any, formData: FormData) {
  const user = await currentUser()
  if (!user) return redirect('/')

  console.log(22)

  const validatedFields = registerCpcSchema.safeParse(
    Object.fromEntries(formData),
  )

  if (!validatedFields.success) {
    console.log('ste')
    console.log(validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  console.log(33)

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

  const studentCardBlobPromise = put(studentCard.name, studentCard, {
    access: 'public',
  })

  const paymentProofBlobPromise = put(paymentProof.name, paymentProof, {
    access: 'public',
  })

  const result = await Promise.all([
    studentCardBlobPromise,
    paymentProofBlobPromise,
  ])

  console.log(result)

  const cpc = await db.cpc.create({
    data: {
      userId: user.id!,
      fullname,
      phone,
      birthdate,
      studentCard: result[0].downloadUrl,
      email,
      institution,
      paymentProof: result[1].downloadUrl,
      accountHolderName,
    },
  })
}
