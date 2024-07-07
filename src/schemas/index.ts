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

export const registerLctSchema = z.object({
  fullnameLead: z.string({ invalid_type_error: 'Invalid Fullname Lead' }),
  phoneLead: z.string({ invalid_type_error: 'Invalid Phone Lead Number' }),
  birthdateLead: z
    .string()
    .transform((birthdateLead) => new Date(birthdateLead))
    .pipe(z.date()),
  studentCardLead: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Lead is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember1: z.string({
    invalid_type_error: 'Invalid Fullname Member 1',
  }),
  phoneMember1: z.string({
    invalid_type_error: 'Invalid Phone Member 1 Number',
  }),
  birthdateMember1: z
    .string()
    .transform((birthdateMember1) => new Date(birthdateMember1))
    .pipe(z.date()),
  studentCardMember1: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 1 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember2: z.string({
    invalid_type_error: 'Invalid Fullname Member 2',
  }),
  phoneMember2: z.string({
    invalid_type_error: 'Invalid Phone Member 2 Number',
  }),
  birthdateMember2: z
    .string()
    .transform((birthdateMember2) => new Date(birthdateMember2))
    .pipe(z.date()),
  studentCardMember2: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 2 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameAssistant: z.string({
    invalid_type_error: 'Invalid Fullname Assistant',
  }),
  phoneAssistant: z.string({
    invalid_type_error: 'Invalid Phone Assistant Number',
  }),

  email: z
    .string({ invalid_type_error: 'Invalid Email' })
    .email({ message: 'Email is required' }),
  institution: z.string({ invalid_type_error: 'Invalid Institution' }),
  teamName: z.string({ invalid_type_error: 'Invalid Team Name' }),
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
