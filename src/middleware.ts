import authConfig from '@/auth.config'
import {
  DEFAULT_ADMIN_LOGIN_REDIRECT,
  DEFAULT_USER_LOGIN_REDIRECT,
  adminRoutePrefix,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  userRoutePrefix,
  userRoutes,
} from '@/routes'
import { UserRole } from '@prisma/client'
import NextAuth from 'next-auth'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isUserRoute =
    nextUrl.pathname.startsWith(userRoutePrefix) ||
    userRoutes.includes(nextUrl.pathname)
  const isAdminRoute = nextUrl.pathname.startsWith(adminRoutePrefix)

  const isUser = req.auth?.user.role === UserRole.USER
  const isAdmin = req.auth?.user.role === UserRole.ADMIN

  if (isApiAuthRoute) return

  if (isAuthRoute) {
    if (isLoggedIn && isUser) {
      return Response.redirect(new URL(DEFAULT_USER_LOGIN_REDIRECT, nextUrl))
    }

    if (isLoggedIn && isAdmin) {
      return Response.redirect(new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, nextUrl))
    }

    return
  }

  if (isLoggedIn) {
    if (isUser && !isPublicRoute && !isUserRoute) {
      return Response.redirect(new URL(DEFAULT_USER_LOGIN_REDIRECT, nextUrl))
    }

    if (isAdmin && !isPublicRoute && !isAdminRoute) {
      return Response.redirect(new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, nextUrl))
    }

    return
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname

    if (nextUrl.search) callbackUrl += nextUrl.search

    const encodedCallbackUrl = encodeURIComponent(callbackUrl)

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    )
  }

  return
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
}
