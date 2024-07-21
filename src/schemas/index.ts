import { z } from 'zod'

const MAX_FILE_SIZE = 1

const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024)
  return +result.toFixed(decimalsNum)
}

const ACCEPTED_FILE_TYPES = ['image/']

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

export const registerMlSchema = z.object({
  fullnameLead: z.string({ invalid_type_error: 'Invalid Fullname Lead' }),
  usernameLead: z.string({ invalid_type_error: 'Invalid Username Lead' }),
  userIdLead: z.string({ invalid_type_error: 'Invalid User Id Lead' }),
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
  usernameMember1: z.string({
    invalid_type_error: 'Invalid Username Member 1',
  }),
  userIdMember1: z.string({
    invalid_type_error: 'Invalid User Id Member 1',
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
  usernameMember2: z.string({
    invalid_type_error: 'Invalid Username Member 2',
  }),
  userIdMember2: z.string({
    invalid_type_error: 'Invalid User Id Member 2',
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

  fullnameMember3: z.string({
    invalid_type_error: 'Invalid Fullname Member 3',
  }),
  usernameMember3: z.string({
    invalid_type_error: 'Invalid Username Member 3',
  }),
  userIdMember3: z.string({
    invalid_type_error: 'Invalid User Id Member 3',
  }),
  phoneMember3: z.string({
    invalid_type_error: 'Invalid Phone Member 3 Number',
  }),
  birthdateMember3: z
    .string()
    .transform((birthdateMember3) => new Date(birthdateMember3))
    .pipe(z.date()),
  studentCardMember3: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 3 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember4: z.string({
    invalid_type_error: 'Invalid Fullname Member 4',
  }),
  usernameMember4: z.string({
    invalid_type_error: 'Invalid Username Member 4',
  }),
  userIdMember4: z.string({
    invalid_type_error: 'Invalid User Id Member 4',
  }),
  phoneMember4: z.string({
    invalid_type_error: 'Invalid Phone Member 4 Number',
  }),
  birthdateMember4: z
    .string()
    .transform((birthdateMember4) => new Date(birthdateMember4))
    .pipe(z.date()),
  studentCardMember4: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 4 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameSubtituteMember1: z.string({
    invalid_type_error: 'Invalid Fullname Subtitute Member 1',
  }),
  usernameSubtituteMember1: z.string({
    invalid_type_error: 'Invalid Username Subtitute Member 1',
  }),
  userIdSubtituteMember1: z.string({
    invalid_type_error: 'Invalid User Id Subtitute Member 1',
  }),
  phoneSubtituteMember1: z.string({
    invalid_type_error: 'Invalid Phone Subtitute Member 1 Number',
  }),
  birthdateSubtituteMember1: z
    .string()
    .transform(
      (birthdateSubtituteMember1) => new Date(birthdateSubtituteMember1),
    )
    .pipe(z.date()),
  studentCardSubtituteMember1: z
    .custom<File>()
    .refine(
      (file) => file !== undefined,
      'Student Card Subtitute Member 1 is required',
    )
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameSubtituteMember2: z.string({
    invalid_type_error: 'Invalid Fullname Subtitute Member 2',
  }),
  usernameSubtituteMember2: z.string({
    invalid_type_error: 'Invalid Username Subtitute Member 2',
  }),
  userIdSubtituteMember2: z.string({
    invalid_type_error: 'Invalid User Id Subtitute Member 2',
  }),
  phoneSubtituteMember2: z.string({
    invalid_type_error: 'Invalid Phone Subtitute Member 2 Number',
  }),
  birthdateSubtituteMember2: z
    .string()
    .transform(
      (birthdateSubtituteMember2) => new Date(birthdateSubtituteMember2),
    )
    .pipe(z.date()),
  studentCardSubtituteMember2: z
    .custom<File>()
    .refine(
      (file) => file !== undefined,
      'Student Card Subtitute Member 2 is required',
    )
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  email: z
    .string({ invalid_type_error: 'Invalid Email' })
    .email({ message: 'Email is required' }),
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

export const registerFutsalSchema = z.object({
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

  fullnameMember3: z.string({
    invalid_type_error: 'Invalid Fullname Member 3',
  }),
  phoneMember3: z.string({
    invalid_type_error: 'Invalid Phone Member 3 Number',
  }),
  birthdateMember3: z
    .string()
    .transform((birthdateMember3) => new Date(birthdateMember3))
    .pipe(z.date()),
  studentCardMember3: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 3 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember4: z.string({
    invalid_type_error: 'Invalid Fullname Member 4',
  }),
  phoneMember4: z.string({
    invalid_type_error: 'Invalid Phone Member 4 Number',
  }),
  birthdateMember4: z
    .string()
    .transform((birthdateMember4) => new Date(birthdateMember4))
    .pipe(z.date()),
  studentCardMember4: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 4 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember5: z.string({
    invalid_type_error: 'Invalid Fullname Member 5',
  }),
  phoneMember5: z.string({
    invalid_type_error: 'Invalid Phone Member 5 Number',
  }),
  birthdateMember5: z
    .string()
    .transform((birthdateMember5) => new Date(birthdateMember5))
    .pipe(z.date()),
  studentCardMember5: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 5 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember6: z.string({
    invalid_type_error: 'Invalid Fullname Member 6',
  }),
  phoneMember6: z.string({
    invalid_type_error: 'Invalid Phone Member 6 Number',
  }),
  birthdateMember6: z
    .string()
    .transform((birthdateMember6) => new Date(birthdateMember6))
    .pipe(z.date()),
  studentCardMember6: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 6 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember7: z.string({
    invalid_type_error: 'Invalid Fullname Member 7',
  }),
  phoneMember7: z.string({
    invalid_type_error: 'Invalid Phone Member 7 Number',
  }),
  birthdateMember7: z
    .string()
    .transform((birthdateMember7) => new Date(birthdateMember7))
    .pipe(z.date()),
  studentCardMember7: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 7 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember8: z.string({
    invalid_type_error: 'Invalid Fullname Member 8',
  }),
  phoneMember8: z.string({
    invalid_type_error: 'Invalid Phone Member 8 Number',
  }),
  birthdateMember8: z
    .string()
    .transform((birthdateMember8) => new Date(birthdateMember8))
    .pipe(z.date()),
  studentCardMember8: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 8 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember9: z.string({
    invalid_type_error: 'Invalid Fullname Member 9',
  }),
  phoneMember9: z.string({
    invalid_type_error: 'Invalid Phone Member 9 Number',
  }),
  birthdateMember9: z
    .string()
    .transform((birthdateMember9) => new Date(birthdateMember9))
    .pipe(z.date()),
  studentCardMember9: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 9 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember10: z.string({
    invalid_type_error: 'Invalid Fullname Member 10',
  }),
  phoneMember10: z.string({
    invalid_type_error: 'Invalid Phone Member 10 Number',
  }),
  birthdateMember10: z
    .string()
    .transform((birthdateMember10) => new Date(birthdateMember10))
    .pipe(z.date()),
  studentCardMember10: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 10 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember11: z.string({
    invalid_type_error: 'Invalid Fullname Member 11',
  }),
  phoneMember11: z.string({
    invalid_type_error: 'Invalid Phone Member 11 Number',
  }),
  birthdateMember11: z
    .string()
    .transform((birthdateMember11) => new Date(birthdateMember11))
    .pipe(z.date()),
  studentCardMember11: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 11 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameMember12: z.string({
    invalid_type_error: 'Invalid Fullname Member 12',
  }),
  phoneMember12: z.string({
    invalid_type_error: 'Invalid Phone Member 12 Number',
  }),
  birthdateMember12: z
    .string()
    .transform((birthdateMember12) => new Date(birthdateMember12))
    .pipe(z.date()),
  studentCardMember12: z
    .custom<File>()
    .refine((file) => file !== undefined, 'Student Card Member 12 is required')
    .refine(
      (file) => sizeInMB(file.size) <= MAX_FILE_SIZE,
      `The maximum file size is ${MAX_FILE_SIZE}MB`,
    )
    .refine(
      (file) => ACCEPTED_FILE_TYPES.some((type) => file.type.startsWith(type)),
      'File type is not supported',
    ),

  fullnameAssistant1: z.string({
    invalid_type_error: 'Invalid Fullname Assistant 1',
  }),
  phoneAssistant1: z.string({
    invalid_type_error: 'Invalid Phone Assistant 1 Number',
  }),

  fullnameAssistant2: z.string({
    invalid_type_error: 'Invalid Fullname Assistant 2',
  }),
  phoneAssistant2: z.string({
    invalid_type_error: 'Invalid Phone Assistant 2 Number',
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
