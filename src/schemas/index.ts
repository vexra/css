import { z } from 'zod'

const MAX_FILE_SIZE = 1

const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024)
  return +result.toFixed(decimalsNum)
}

const ACCEPTED_FILE_TYPES = ['image/*']

export const registerCpcSchema = z.object({
  email: z
    .string({ invalid_type_error: 'Invalid Email' })
    .email({ message: 'Email is required' }),
  fullname: z.string({ invalid_type_error: 'Invalid Fullname' }),
  phone: z.string({ invalid_type_error: 'Invalid Phone Number' }),
  institution: z.string({ invalid_type_error: 'Invalid Institution' }),
  birthdate: z
    .string()
    .transform((birthDate) => new Date(birthDate))
    .pipe(z.date()),
  studentCard: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),
  paymentProof: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Payment Proof is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),
  accountHolderName: z.string({
    invalid_type_error: 'Invalid Account Holder Name',
  }),
})
