'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

export default async function login() {
  try {
    await signIn('google')
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: 'Something went wrong!' }
    }

    throw error
  }
}
